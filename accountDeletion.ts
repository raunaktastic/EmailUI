/**
 * Espotz — Confirm Account Deletion Email Template
 *
 * Theme: Premium Dark Esports Aesthetic (Contained Box)
 * Tailored for a critical security action using a "business-minded" approach
 * with striking red accents to signify danger.
 *
 * Template Variables:
 *  {{logoUrl}}       — Full URL to the Espotz logo image
 *  {{clanBannerUrl}} — Full URL to the clan banner image
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #f4f3f8;
      font-family: 'Inter', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 0;
      margin: 0;
      color: #111827;
    }
    a { text-decoration: none; }
    img { display: block; border: 0; }

    /* The outer light-gray wrapper mimicking the email client's background */
    .outer-wrapper {
      width: 100%;
      background-color: #f4f3f8;
      padding: 40px 12px;
    }

    /* The actual 600px email container carrying the dark theme */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0b0216;
      background-image: radial-gradient(circle at 50% 0%, #1d0b47 0%, #0b0216 60%);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,0,0.08);
      padding-top: 40px;
      padding-bottom: 40px;
    }

    /* Header Section */
    .header {
      text-align: center;
      margin-bottom: 24px;
    }
    .header-logo {
      max-width: 160px;
      margin: 0 auto 8px auto;
    }
    .tagline {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #8b5cf6;
      text-transform: uppercase;
    }

    /* Banner Image */
    .banner-wrapper {
      width: 100%;
      height: 180px;
      position: relative;
      z-index: 1;
    }
    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
      filter: grayscale(40%); /* Slightly mute the banner to emphasize the red card */
    }

    /* Floating White Card (Contained in the box) */
    .content-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 48px 40px;
      margin: -60px 24px 0 24px; /* Floats up over the banner, spaced from edges */
      position: relative;
      z-index: 2;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      text-align: center;
    }

    /* Card Top Icon (Red Alert) */
    .alert-icon {
      width: 48px;
      height: 48px;
      background-color: #fef2f2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px auto;
      border: 1px solid #fee2e2;
    }

    /* Typography */
    .title {
      font-size: 26px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 12px;
      letter-spacing: -0.5px;
    }
    .title span {
      color: #dc2626; /* Striking Red */
    }

    .greeting {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 8px;
    }

    .message {
      font-size: 14px;
      line-height: 22px;
      color: #4b5563;
      margin-bottom: 24px;
    }

    /* Danger Zone / Checklist */
    .danger-box {
      background-color: #fef2f2;
      border: 1px solid #fca5a5;
      border-radius: 12px;
      padding: 24px;
      text-align: left;
      margin-bottom: 28px;
    }
    .danger-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      color: #991b1b;
      font-weight: 800;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .danger-text {
      font-size: 13px;
      line-height: 20px;
      color: #991b1b;
      margin-bottom: 12px;
    }
    .checklist {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
    .checklist li {
      position: relative;
      padding-left: 24px;
      font-size: 13px;
      line-height: 20px;
      color: #7f1d1d;
      margin-bottom: 8px;
    }
    .checklist li::before {
      content: '✗';
      position: absolute;
      left: 0;
      top: 0;
      color: #dc2626;
      font-weight: bold;
    }

    /* Call to Action */
    .cta-button {
      display: inline-block;
      width: 100%;
      background-color: #dc2626;
      color: #ffffff;
      padding: 16px 32px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);
      margin-bottom: 24px;
    }

    /* Link Disclaimer */
    .disclaimer-box {
      font-size: 12px;
      line-height: 18px;
      color: #6b7280;
      margin-bottom: 24px;
    }
    .disclaimer-box a {
      color: #6d28d9;
      word-break: break-all;
    }
    .disclaimer-box strong {
      color: #374151;
    }

    /* Help Section */
    .help-section {
      padding-top: 24px;
      border-top: 1px solid #f3f4f6;
    }
    .help-icon {
      font-size: 20px;
      margin-bottom: 8px;
    }
    .help-text h4 {
      font-size: 13px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 4px;
    }
    .help-text p {
      font-size: 12px;
      line-height: 18px;
      color: #6b7280;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding-top: 40px;
    }
    .footer-logo {
      max-width: 120px;
      margin: 0 auto 8px auto;
    }
    .footer-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #6d28d9;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .footer-social-title {
      font-size: 11px;
      font-weight: 600;
      color: #9ca3af;
      margin-bottom: 12px;
    }
    .social-icons {
      margin-bottom: 24px;
    }
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: #1f1235;
      border-radius: 50%;
      margin: 0 4px;
    }
    .social-icon img {
      width: 16px;
      height: 16px;
      display: block;
      border: 0;
    }
    .copyright {
      font-size: 11px;
      color: #6b7280;
    }
  </style>
</head>
<body>

  <div class="outer-wrapper">
    <div class="email-container">
      
      <!-- Top Logo & Tagline -->
      <div class="header">
        <img class="header-logo" src="{{logoUrl}}" alt="Espotz">
        <div class="tagline">PLAY. COMPETE. CONQUER.</div>
      </div>

      <!-- Background Arena/Clan Banner -->
      <div class="banner-wrapper">
        <img class="banner-img" src="{{clanBannerUrl}}" alt="Arena">
      </div>

      <!-- Main White Card -->
      <div class="content-card">
        
        <!-- Red Alert Icon -->
        <div class="alert-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        <h1 class="title">Confirm Account <span>Deletion</span></h1>
        
        <div class="greeting">Hi {{name}},</div>
        <div class="message">
          We received a request to <strong>permanently delete your Espotz account</strong>. To confirm the deletion, tap the button below. This will sign you out everywhere and trigger data deletion.
        </div>

        <!-- Danger Checklist Box -->
        <div class="danger-box">
          <div class="danger-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            WARNING: CANNOT BE UNDONE
          </div>
          <div class="danger-text">
            Completing this override request will initiate deletion of:
          </div>
          <ul class="checklist">
            <li>All personal profile and account credentials</li>
            <li>Wallet balance, transaction history, and coins records</li>
            <li>Team rosters, historical brackets, and tournament statistics</li>
          </ul>
        </div>

        <!-- Call to Action -->
        <a href="{{confirmUrl}}" class="cta-button">Confirm account deletion</a>

        <!-- Disclaimer Text -->
        <div class="disclaimer-box">
          This verification link expires in <strong>1 hour</strong> and is valid for a single use. If the button doesn't work, copy and paste this URL into your browser:<br/>
          <a href="{{confirmUrl}}">{{confirmUrl}}</a>
        </div>
        
        <div class="disclaimer-box" style="margin-bottom: 0;">
          If you didn't request this action, you can safely ignore this email — your account will not be affected.
        </div>

        <!-- Help Section -->
        <div class="help-section">
          <div class="help-icon">🎧</div>
          <div class="help-text">
            <h4>Need Help?</h4>
            <p>Note: This is a computer-generated security email — please do not reply. For help, contact our support team.</p>
          </div>
        </div>

      </div>

      <!-- Footer Section -->
      <div class="footer">
        <img class="footer-logo" src="{{logoUrl}}" alt="Espotz">
        <div class="footer-tag">PLAY. COMPETE. CONQUER.</div>
        
        <div class="footer-social-title">Follow ESPOTZ</div>
        <div class="social-icons">
          <a href="#" class="social-icon"><img src="https://img.icons8.com/ios-filled/50/8b5cf6/instagram-new.png" alt="Instagram"></a>
          <a href="#" class="social-icon"><img src="https://img.icons8.com/ios-filled/50/8b5cf6/discord-logo.png" alt="Discord"></a>
          <a href="#" class="social-icon"><img src="https://img.icons8.com/ios-filled/50/8b5cf6/youtube-play.png" alt="YouTube"></a>
          <a href="#" class="social-icon"><img src="https://img.icons8.com/ios-filled/50/8b5cf6/twitterx--v1.png" alt="Twitter"></a>
        </div>
        
        <div class="copyright">&copy; {{year}} ESPOTZ. All rights reserved.</div>
      </div>

    </div>
  </div>

</body>
</html>\`;
