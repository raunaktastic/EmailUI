/**
 * Espotz — Confirm Account Deletion Email Template
 *
 * Theme: Full Banner Light Layout (Consistent with Clan templates)
 * Features a top banner image, warning alert box,
 * and a weighty red confirmation button.
 *
 * Template Variables:
 *  {{logoUrl}}    — Full URL to the Espotz logo image
 *  {{bannerUrl}}  — Full URL to the warning banner image
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
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

    .banner-container {
      position: relative;
      width: 100%;
      height: 220px;
      overflow: hidden;
    }
    
    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .email-body {
      padding: 30px 40px;
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
      margin-bottom: 20px;
    }

    .greeting {
      font-size: 20px;
      font-weight: 700;
      color: #111111;
      margin-bottom: 16px;
    }

    .message {
      font-size: 14px;
      line-height: 24px;
      color: #555555;
      margin-bottom: 24px;
    }
    
    .whats-next {
      background-color: #fffaf0;
      border: 1px solid #fbd38d;
      border-left: 3px solid #dd6b20;
      border-radius: 6px;
      padding: 20px;
      font-size: 13px;
      line-height: 22px;
      color: #7b341e;
      margin-bottom: 30px;
    }
    .whats-next strong {
      color: #c05621;
    }

    .btn-container {
      text-align: center;
      margin-bottom: 30px;
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
      background: #111111;
      padding: 28px 40px;
      text-align: center;
      color: #888888;
    }

    .footer-logo {
      display: inline-block;
      max-width: 110px;
      height: auto;
      margin-bottom: 16px;
    }
    
    .footer-team {
      font-size: 12px;
      font-weight: 700;
      color: #cccccc;
      margin-bottom: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .footer-text {
      font-size: 11px;
      line-height: 18px;
      margin-bottom: 8px;
    }

    .footer-copy {
      font-size: 11px;
    }
  </style>
</head>
<body>

  <div class="email-wrap">
    <!-- Banner -->
    <div class="banner-container">
      <img src="{{bannerUrl}}" alt="Warning Banner" class="banner-img">
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>⚠️</span> CONFIRM DELETION
      </div>

      <h1 class="greeting">Hi {{name}},</h1>
      
      <div class="message">
        We received a request to <strong>permanently delete your Espotz account</strong>. To confirm, tap the button below. This will delete your account and personal data and sign you out everywhere.
      </div>

      <div class="whats-next">
        <strong>⚠️ WARNING:</strong> This action cannot be undone. All your gaming statistics, achievements, wallets, and registered tournament data will be permanently wiped out.
      </div>

      <div class="btn-container">
        <a href="{{confirmUrl}}" class="cta-btn">Confirm account deletion</a>
      </div>

      <div class="message" style="font-size: 13px; color: #666666;">
        This link expires in <strong>1 hour</strong> and can be used once. If the button doesn't work, copy and paste this URL into your browser:<br/>
        <a href="{{confirmUrl}}" style="color:#5B2EF7;word-break:break-all">{{confirmUrl}}</a>
      </div>

      <div class="message" style="font-size: 13px; color: #666666; margin-top: 10px;">
        If you didn't request this, you can safely ignore this email — your account will not be deleted.
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer-generated email — please do not reply. For help, contact our support team.
      </div>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <img class="footer-logo" src="{{logoUrl}}" alt="Espotz">
      <div class="footer-team">TEAM ESPOTZ</div>
      <div class="footer-text">This is an automated transactional email from Espotz security team.</div>
      <div class="footer-copy">&copy; Espotz, {{year}}</div>
    </div>
  </div>

</body>
</html>\`;
