/**
 * Espotz — Login Code Email Template
 *
 * Theme: Full Banner Light Layout (Consistent with Clan templates)
 * Features a top banner image, a clean white email body,
 * and a prominent passcode hero card.
 *
 * Template Variables:
 *  {{logoUrl}}       — Full URL to the Espotz logo image
 *  {{clanBannerUrl}} — Full URL to the clan banner image
 *  {{name}}          — The user's name
 *  {{code}}          — The 6-digit login code
 *  {{year}}          — Current year for copyright footer
 */

export const emailOtp = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Login Code</title>
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
      background-color: #f6f4ff;
      border: 1px solid #e9e5ff;
      color: #5B2EF7;
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
      margin-bottom: 30px;
    }
    
    .message strong {
      color: #5B2EF7;
    }

    .otp-container {
      text-align: center;
      margin: 24px 0 32px 0;
    }

    .otp-box {
      display: inline-block;
      background-color: #f6f4ff;
      border: 2px dashed #5B2EF7;
      border-radius: 8px;
      padding: 16px 32px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 8px;
      color: #2d0745;
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
      <img src="{{clanBannerUrl}}" alt="Security Banner" class="banner-img">
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>🔑</span> SECURE LOGIN
      </div>

      <h1 class="greeting">Hi {{name}},</h1>
      
      <div class="message">
        Use the code below to sign in to <strong>Espotz</strong>. The code is valid for 10 minutes — type it into the same screen where you entered your email.
      </div>

      <div class="otp-container">
        <div class="otp-box">{{code}}</div>
      </div>

      <div class="message" style="font-size: 13px; color: #666666;">
        If you didn't request this code, you can safely ignore this email — someone may have typed your address by mistake.
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
