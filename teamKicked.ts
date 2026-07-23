/**
 * Espotz — Removed From Tournament Email Template
 *
 * Theme: Full Banner Light Layout (Consistent with Clan templates)
 * Features a top banner image, a clean white email body,
 * and a prominent call-to-action to keep the user engaged.
 *
 * Template Variables:
 *  {{logoUrl}}        — Full URL to the Espotz logo image
 *  {{bannerUrl}}      — Full URL to the tournament banner image
 *  {{playerName}}     — The user's name
 *  {{tournamentName}} — Name of the tournament
 *  {{tournamentsLink}} — Link to the tournaments exploration page
 *  {{year}}           — Current year for copyright footer
 */

export const teamKicked = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tournament Update</title>
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
      color: #ef4444;
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
      <img src="{{bannerUrl}}" alt="Tournament Banner" class="banner-img">
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>🚫</span> TOURNAMENT UPDATE
      </div>

      <h1 class="greeting">Hello {{playerName}},</h1>
      
      <div class="message">
        Looks like your team has been kicked out of the <strong>{{tournamentName}}</strong> tournament. Don't worry about your entry fee — if you paid one, it will be automatically refunded to your wallet within 24 hours.
      </div>

      <div class="message">
        That means you won't be able to register for this tournament again.
      </div>

      <div class="message" style="margin-bottom: 8px;">
        But hey, the fun doesn't stop here! There are plenty of other tournaments waiting for you — show off your skills and keep the grind alive!
      </div>

      <div class="btn-container">
        <a href="{{tournamentsLink}}" class="cta-btn">Explore tournaments &rarr;</a>
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer generated email, please do not reply. In case you wish to seek more information, please contact our customer care team via phone or email. <strong>DISCLAIMER:</strong> Espotz has sent this e-mail message for the sole use of its desired recipient/s. In case you are not the intended recipient, please delete the message. Any unauthorized use of content of this email, including any attached documents, is prohibited by law.
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
