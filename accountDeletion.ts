/**
 * Espotz — Confirm Account Deletion Email Template
 *
 * Theme: Premium Modern SaaS UI (Danger Variation)
 * Highly attractive CSS-driven layout without external banner images.
 * Features a glowing dark container, a crisp white card, and striking red accents.
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #f1f5f9;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 0;
      margin: 0;
      color: #18181b;
    }
    a { text-decoration: none; color: #dc2626; }
    img { display: block; border: 0; }

    .wrapper {
      width: 100%;
      background-color: #f1f5f9;
      padding: 40px 16px;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    /* Premium Dark Container with Glowing Top (Red Tint for Danger) */
    .email-box {
      background-color: #09090b;
      background-image: radial-gradient(circle at top center, rgba(220, 38, 38, 0.25) 0%, rgba(9, 9, 11, 1) 60%);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 24px 48px rgba(0,0,0,0.15);
    }

    /* Logo Header */
    .header {
      padding: 48px 20px 32px 20px;
      text-align: center;
    }
    .header-logo {
      height: 36px;
      width: auto;
      margin: 0 auto;
    }

    /* Main White Card */
    .content-card {
      background-color: #ffffff;
      border-radius: 20px;
      padding: 48px 40px;
      margin: 0 24px 32px 24px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .badge {
      display: inline-block;
      background-color: #fef2f2;
      color: #dc2626;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      padding: 6px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      margin-bottom: 24px;
      border: 1px solid #fee2e2;
    }

    .title {
      font-size: 28px;
      font-weight: 800;
      color: #18181b;
      margin-bottom: 12px;
      letter-spacing: -0.5px;
    }
    .title span {
      color: #dc2626;
    }

    .message {
      font-size: 15px;
      line-height: 24px;
      color: #52525b;
      margin-bottom: 32px;
    }

    /* Danger List Box */
    .danger-box {
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
      border: 1px solid #fca5a5;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 32px;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
    }
    .danger-title {
      font-size: 13px;
      font-weight: 800;
      color: #991b1b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      font-size: 16px;
    }

    /* CTA Button */
    .cta-button {
      display: block;
      width: 100%;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: #ffffff;
      padding: 16px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 32px;
      box-shadow: 0 8px 16px rgba(220, 38, 38, 0.25);
      transition: transform 0.2s, box-shadow 0.2s;
      letter-spacing: 0.5px;
    }
    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(220, 38, 38, 0.3);
    }

    /* Security Note */
    .note-box {
      background-color: #f8fafc;
      border-left: 4px solid #cbd5e1;
      padding: 16px 20px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
    }
    .note {
      font-size: 13px;
      line-height: 20px;
      color: #64748b;
      margin: 0;
    }
    .note a {
      color: #dc2626;
      word-break: break-all;
    }

    .help-text {
      font-size: 13px;
      color: #94a3b8;
      line-height: 20px;
      text-align: center;
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #f1f5f9;
    }

    /* Footer */
    .email-footer {
      background: #0a0814;
      padding: 24px 40px;
      text-align: center;
      border-radius: 0 0 20px 20px;
    }
    .footer-team {
      font-size: 13px;
      font-weight: 700;
      color: rgba(255,255,255,0.7);
      margin-bottom: 4px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .footer-copy {
      font-size: 12px;
      color: rgba(255,255,255,0.4);
    }
    .footer-copy a {
      color: #7c3aed;
      text-decoration: underline;
    }
    
    /* Responsive */
    @media only screen and (max-width: 600px) {
      .content-card {
        padding: 32px 24px;
        margin: 0 16px 24px 16px;
      }
    }
  </style>
</head>
<body>

  <div class="wrapper">
    <div class="container">
      <div class="email-box">
        
        <!-- Header -->
        <div class="header">
          <img class="header-logo" src="{{logoUrl}}" alt="Espotz">
        </div>

        <!-- Main Content Card -->
        <div class="content-card">
          
          <div class="badge">ACTION REQUIRED</div>
          
          <h1 class="title">Confirm Account <span>Deletion</span></h1>
          
          <div class="message">
            Hi {{name}},<br><br>
            We received a request to permanently delete your Espotz account. To confirm the deletion, tap the button below. This will sign you out everywhere and trigger data deletion.
          </div>

          <!-- Danger Box -->
          <div class="danger-box">
            <div class="danger-title">Warning: Cannot Be Undone</div>
            <ul class="checklist">
              <li>All personal profile and account credentials</li>
              <li>Wallet balance, transaction history, and coins records</li>
              <li>Team rosters, historical brackets, and tournament statistics</li>
            </ul>
          </div>

          <!-- CTA Button -->
          <a href="{{confirmUrl}}" class="cta-button">Confirm account deletion</a>

          <div class="note-box">
            <p class="note" style="margin-bottom: 8px;">This verification link expires in <strong>1 hour</strong>. If the button doesn't work, copy and paste this URL into your browser: <br><a href="{{confirmUrl}}">{{confirmUrl}}</a></p>
            <p class="note">If you didn't request this action, you can safely ignore this email — your account will not be affected.</p>
          </div>

          <div class="help-text">
            This is a computer-generated security email. Please do not reply.<br>For help, contact our support team.
          </div>

        </div>

        <!-- Footer -->
        <div class="email-footer">
          <p class="footer-team">Team Espotz</p>
          <p class="footer-copy">&copy; Espotz, {{year}} &nbsp;|&nbsp; <a href="#">Unsubscribe</a></p>
        </div>

      </div>
    </div>
  </div>

</body>
</html>\`;
