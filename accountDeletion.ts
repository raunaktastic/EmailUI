/**
 * Espotz — Confirm Account Deletion Email Template
 *
 * Theme: Cautionary Transactional Layout (Consistent with Clan POC)
 * Features a deep purple header bar with the logo, an warning/danger alert box,
 * a weighty red confirmation button, and a fallback URL display.
 *
 * Template Variables:
 *  {{logoUrl}}    — Full URL to the Espotz logo image
 *  {{name}}       — The user's name
 *  {{confirmUrl}} — One-time confirmation link
 *  {{year}}       — Current year for copyright footer
 */

export const accountDeletion = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Account Deletion</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #f4f3f8;
      font-family: 'Inter', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 40px 12px;
      color: #4a475e;
    }
    a { text-decoration: none; }
    img { display: block; border: 0; }

    .email-wrap {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      border: 1px solid #e1dcf5;
    }

    .email-header {
      background: #261d59;
      text-align: center;
      padding: 24px 40px;
    }
    .email-header img {
      display: inline-block;
      max-width: 130px;
      height: auto;
    }

    .email-body {
      padding: 40px 40px 30px 40px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #fef2f2;
      border: 1px solid #fee2e2;
      color: #b91c1c;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .greeting {
      font-size: 20px;
      font-weight: 700;
      color: #2d0745;
      margin-bottom: 16px;
    }

    .message {
      font-size: 14px;
      line-height: 24px;
      color: #4a475e;
      margin-bottom: 24px;
    }
    
    .alert-box {
      background-color: #fffaf0;
      border: 1px solid #fbd38d;
      border-left: 4px solid #dd6b20;
      border-radius: 6px;
      padding: 16px 20px;
      font-size: 13px;
      line-height: 22px;
      color: #7b341e;
      margin: 24px 0;
    }

    .alert-box strong {
      color: #c05621;
    }

    .btn-container {
      text-align: center;
      margin: 32px 0;
    }

    .cta-btn {
      display: inline-block;
      padding: 14px 32px;
      background-color: #ef4444;
      color: #ffffff;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border-radius: 6px;
      width: 100%;
      text-align: center;
      box-shadow: 0 4px 14px rgba(239, 68, 68, 0.25);
    }

    .fallback-container {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 16px;
      margin: 24px 0;
      word-break: break-all;
    }

    .fallback-title {
      font-size: 11px;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .fallback-url {
      font-size: 12px;
      color: #5B2EF7;
      line-height: 18px;
    }

    .disclaimer {
      font-size: 11px;
      line-height: 18px;
      color: #999999;
      text-align: justify;
      padding-top: 20px;
      border-top: 1px solid #eeeeee;
    }

    .email-footer {
      background: #261d59;
      padding: 28px 40px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .footer-team {
      font-size: 12px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .footer-text {
      font-size: 11px;
      line-height: 18px;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.5);
    }

    .footer-copy {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.4);
    }
  </style>
</head>
<body>

  <div class="email-wrap">
    <!-- Header -->
    <div class="email-header">
      <img src="{{logoUrl}}" alt="Espotz">
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>⚠️</span> Account Action Required
      </div>

      <h1 class="greeting">Hi {{name}},</h1>
      
      <div class="message">
        We received a request to <strong>permanently delete your Espotz account</strong>. To confirm, tap the button below. This will delete your account and personal data and sign you out everywhere.
      </div>

      <div class="alert-box">
        <strong>⚠️ CRITICAL:</strong> This action cannot be undone. All your gaming statistics, achievements, wallets, and registered tournament data will be permanently wiped out.
      </div>

      <div class="btn-container">
        <a href="{{confirmUrl}}" class="cta-btn">Confirm account deletion</a>
      </div>

      <div class="message" style="font-size: 13px; color: #76728c;">
        This link expires in <strong>1 hour</strong> and can be used once. If you did not request this, you can safely ignore this email — your account will remain active.
      </div>

      <div class="fallback-container">
        <div class="fallback-title">If the button doesn't work, copy and paste this URL:</div>
        <div class="fallback-url">{{confirmUrl}}</div>
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer-generated email — please do not reply. For help, contact our support team.
      </div>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-team">TEAM ESPOTZ</div>
      <div class="footer-text">This is an automated transactional email from Espotz security team.</div>
      <div class="footer-copy">&copy; Espotz, {{year}}</div>
    </div>
  </div>

</body>
</html>\`;
