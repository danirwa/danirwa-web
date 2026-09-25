const allowedEvents = new Set([
  'page_view',
  'early_access_open',
  'early_access_success',
  'early_access_error',
  'how_it_works_click',
  'ai_cash_page_view',
  'ai_cash_lead_submit',
  'ai_cash_kit_view',
]);

const staticRoutes = new Map([
  ['/aicash', '/aicash/index.html'],
  ['/aicash/', '/aicash/index.html'],
  ['/aicash/thanks', '/aicash/thanks.html'],
  ['/aicash/thanks/', '/aicash/thanks.html'],
  ['/aicash/starter-kit', '/aicash/starter-kit.html'],
  ['/aicash/starter-kit/', '/aicash/starter-kit.html'],
]);

function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(init.headers || {}),
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/event') {
      if (request.method !== 'POST') return json({ ok: false }, { status: 405 });

      const origin = request.headers.get('origin');
      if (origin && origin !== url.origin) {
        return json({ ok: false }, { status: 403 });
      }

      const contentType = request.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        return json({ ok: false }, { status: 415 });
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return json({ ok: false }, { status: 400 });
      }

      const event = String(body?.event || '').slice(0, 48);
      const path = String(body?.path || '/').slice(0, 160);
      const source = String(body?.source || '').slice(0, 80);

      if (!allowedEvents.has(event) || !path.startsWith('/')) {
        return json({ ok: false }, { status: 400 });
      }

      env.ANALYTICS.writeDataPoint({
        blobs: [event, path, source],
        doubles: [1],
        indexes: [event],
      });

      return json({ ok: true }, { status: 202 });
    }

    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'danirwa-web' });
    }

    const assetPath = staticRoutes.get(url.pathname);
    if (assetPath) {
      const assetUrl = new URL(request.url);
      assetUrl.pathname = assetPath;
      return env.ASSETS.fetch(new Request(assetUrl, request));
    }

    return env.ASSETS.fetch(request);
  },
};
