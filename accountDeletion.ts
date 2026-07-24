/**
 * Espotz — Confirm Account Deletion Email Template
 *
 * Theme: Minimalist "Real Market" UI
 * An ultra-clean, highly professional layout without banners.
 * Uses strict typography and a clear red CTA for the danger action.
 *
 * Template Variables:
 *  {{logoUrl}}       — Full URL to the Espotz logo image
 *  {{name}}          — The user's name
 *  {{confirmUrl}}    — One-time confirmation link
 *  {{year}}          — Current year for copyright footer
 */

export const accountDeletion = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Account Deletion</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #f9fafb;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 0;
      margin: 0;
      color: #111827;
    }
    a { text-decoration: none; color: #6d28d9; }
    img { display: block; border: 0; }

    .wrapper {
      width: 100%;
      background-color: #f9fafb;
      padding: 40px 16px;
    }

    .container {
      max-width: 560px;
      margin: 0 auto;
    }

    /* Logo Header */
    .header {
      margin-bottom: 32px;
      text-align: center;
    }
    .header-logo {
      height: 32px;
      width: auto;
      margin: 0 auto;
    }

    /* Main White Card */
    .content-card {
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 48px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
      letter-spacing: -0.5px;
    }
    .title span {
      color: #dc2626;
    }

    .message {
      font-size: 15px;
      line-height: 24px;
      color: #4b5563;
      margin-bottom: 24px;
    }

    /* Danger List Box */
    .danger-box {
      background-color: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 32px;
    }
    .danger-title {
      font-size: 13px;
      font-weight: 700;
      color: #991b1b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    .danger-text {
      font-size: 14px;
      line-height: 22px;
      color: #991b1b;
      margin-bottom: 12px;
    }
    .checklist {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .checklist li {
      position: relative;
      padding-left: 20px;
      font-size: 14px;
      line-height: 22px;
      color: #7f1d1d;
      margin-bottom: 8px;
    }
    .checklist li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #dc2626;
      font-weight: bold;
    }

    /* CTA Button */
    .cta-button {
      display: block;
      width: 100%;
      background-color: #dc2626;
      color: #ffffff;
      padding: 16px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 32px;
      transition: background-color 0.2s;
    }
    .cta-button:hover {
      background-color: #b91c1c;
    }

    /* Note and Disclaimer */
    .note {
      font-size: 14px;
      line-height: 22px;
      color: #6b7280;
      margin-bottom: 16px;
    }
    .note a {
      color: #6d28d9;
      word-break: break-all;
    }
    
    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 32px 0;
    }

    .help-text {
      font-size: 13px;
      color: #9ca3af;
      line-height: 20px;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding-top: 32px;
      padding-bottom: 32px;
    }
    .footer-links {
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 16px;
    }
    .footer-links a {
      color: #6b7280;
      margin: 0 8px;
      font-weight: 500;
    }
    .footer-links a:hover {
      color: #111827;
    }
    .copyright {
      font-size: 12px;
      color: #9ca3af;
    }
    
    /* Responsive */
    @media only screen and (max-width: 600px) {
      .content-card {
        padding: 32px 24px;
      }
    }
  </style>
</head>
<body>

  <div class="wrapper">
    <div class="container">
      
      <!-- Header -->
      <div class="header">
        <img class="header-logo" src="{{logoUrl}}" alt="Espotz">
      </div>

      <!-- Main Content Card -->
      <div class="content-card">
        
        <h1 class="title">Confirm Account <span>Deletion</span></h1>
        
        <div class="message">
          Hi {{name}},<br><br>
          We received a request to permanently delete your Espotz account. To confirm the deletion, click the button below. This will sign you out everywhere and trigger data deletion.
        </div>

        <!-- Warning Checklist -->
        <div class="danger-box">
          <div class="danger-title">Warning: Cannot Be Undone</div>
          <div class="danger-text">Completing this override request will initiate deletion of:</div>
          <ul class="checklist">
            <li>All personal profile and account credentials</li>
            <li>Wallet balance, transaction history, and coins records</li>
            <li>Team rosters, historical brackets, and tournament statistics</li>
          </ul>
        </div>

        <!-- CTA Button -->
        <a href="{{confirmUrl}}" class="cta-button">Confirm account deletion</a>

        <div class="note">
          This verification link expires in <strong>1 hour</strong>. If the button doesn't work, copy and paste this URL into your browser:<br>
          <a href="{{confirmUrl}}">{{confirmUrl}}</a>
        </div>
        
        <div class="note" style="margin-bottom: 0;">
          If you didn't request this action, you can safely ignore this email — your account will not be affected.
        </div>

        <div class="divider"></div>

        <div class="help-text">
          Note: This is a computer-generated security email. Please do not reply. For help, contact our support team.
        </div>

      </div>

      <!-- Text-based Footer -->
      <div class="footer">
        <div class="footer-links">
          <a href="#">Instagram</a> &bull;
          <a href="#">Discord</a> &bull;
          <a href="#">YouTube</a> &bull;
          <a href="#">Twitter</a>
        </div>
        <div class="copyright">&copy; {{year}} Espotz Inc. All rights reserved.</div>
      </div>

    </div>
  </div>

</body>
</html>\`;
