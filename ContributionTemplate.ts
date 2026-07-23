/**
 * Espotz — Donation Contribution Thank You Email Template
 *
 * Theme: Full Banner Light Layout (Consistent with Clan templates)
 * Features a top banner image, a clean white email body,
 * and a highlighted contribution capsule.
 *
 * Template Variables:
 *  {{logoUrl}}        — Full URL to the Espotz logo image
 *  {{bannerUrl}}      — Full URL to the celebratory banner image
 *  {{name}}           — The user's name
 *  {{donationAmount}} — The donation amount (e.g. 50.00)
 *  {{tournamentName}} — Name of the tournament
 *  {{tournamentLink}} — Link to the tournament page
 *  {{year}}           — Current year for copyright footer
 */

export const Contributiontemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Contribution</title>
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
      background-color: #ecfdf5;
      border: 1px solid #d1fae5;
      color: #10b981;
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
      background-color: #faf9ff;
      border: 1px solid #f0ecff;
      border-left: 3px solid #5B2EF7;
      border-radius: 6px;
      padding: 20px;
      font-size: 14px;
      line-height: 22px;
      color: #555555;
      margin-bottom: 30px;
      text-align: center;
    }
    .whats-next strong {
      color: #5B2EF7;
      font-size: 24px;
      display: block;
      margin-top: 8px;
    }

    .btn-container {
      text-align: center;
      margin-bottom: 30px;
    }

    .cta-btn {
      display: inline-block;
      padding: 14px 32px;
      background-color: #5B2EF7;
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
      <img src="{{bannerUrl}}" alt="Contribution Banner" class="banner-img">
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>✨</span> CONTRIBUTION RECEIVED
      </div>

      <h1 class="greeting">Dear {{name}},</h1>
      
      <div class="message">
        Thank you for your generous contribution to the tournament <strong>{{tournamentName}}</strong> on Espotz!
      </div>

      <div class="whats-next">
        Amount Contributed:
        <strong>{{donationAmount}} EC</strong>
      </div>

      <div class="message">
        Your contribution helps support the tournament prize pool and makes a real difference to the gaming community. We truly appreciate your support.
      </div>

      <div class="message" style="margin-bottom: 8px;">
        You can view the tournament and see how your contribution is making an impact by clicking the link below:
      </div>

      <div class="btn-container">
        <a href="{{tournamentLink}}" class="cta-btn">View Tournament &nbsp;↗</a>
      </div>

      <div class="message" style="color: #111111; font-weight: 600;">
        Thank you for being part of the Espotz community!
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer generated email, please do not reply. In case you wish to seek more information, please contact our customer care team via phone or email. DISCLAIMER: Espotz has sent this e-mail message for the sole use of its desired recipient/s. In case you are not the intended recipient, please delete the message. Any unauthorized use of content of this email, including any attached documents, is prohibited by law.
      </div>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <img class="footer-logo" src="{{logoUrl}}" alt="Espotz">
      <div class="footer-team">TEAM ESPOTZ</div>
      <div class="footer-text">This is an automated transactional email from Espotz tournaments division.</div>
      <div class="footer-copy">&copy; Espotz, {{year}}</div>
    </div>
  </div>

</body>
</html>\`;
