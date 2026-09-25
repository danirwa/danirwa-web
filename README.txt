AI Cash Mentor HQ - Starter Funnel deployment package

Target repo: danirwa/danirwa-web
Target public URL: https://danirwa.com/aicash

Files to add:
  public/aicash/index.html
  public/aicash/thanks.html
  public/aicash/starter-kit.html
  public/aicash/styles.css
  public/aicash/og-card.svg

Files to replace with the supplied versions:
  worker/index.js
  public/sitemap.xml

What the funnel does:
1. Landing page captures email via FormSubmit to aicash@danirwa.com.
2. FormSubmit redirects to /aicash/thanks after successful submission.
3. The confirmation page links to /aicash/starter-kit.
4. FormSubmit is configured to send an autoresponse containing the starter-kit link.
5. Cloudflare Analytics Engine receives ai_cash_page_view, ai_cash_lead_submit, and ai_cash_kit_view events through /api/event.

FIRST-LAUNCH STEP:
The first form submission may trigger a FormSubmit activation email to aicash@danirwa.com. Open it and activate the form. After activation, test the form again from a non-owner email address.

Instagram bio link after deployment:
https://danirwa.com/aicash

Recommended Instagram link title:
Free AI Cash Starter Kit
