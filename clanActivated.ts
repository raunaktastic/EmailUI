/**
 * Espotz — Clan Activated Email Template
 *
 * Theme: "Full Banner" Layout (Selected Design)
 * Features a clean white email body, dark header with spacing, a full-width clan banner image,
 * and the clan avatar/name overlaying the banner image at the bottom left.
 *
 * Template Variables:
 *  {{logoUrl}}        — Full URL to the Espotz logo image
 *  {{clanBannerUrl}}  — Cover photo of the clan
 *  {{clanAvatarUrl}}  — Profile avatar photo of the clan
 *  {{clanName}}       — Name of the clan (e.g. "Paneer tika")
 *  {{memberCount}}    — Number of members in the clan (e.g. "1")
 *  {{body}}           — Main email body content
 *  {{ctaUrl}}         — URL for the "View Your Clan" call-to-action button
 *  {{unsubscribeUrl}} — URL for the unsubscribe action
 *  {{year}}           — Current year for copyright footer
 */

export const clanActivated = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clan Activated</title>
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
    }

    .email-header {
      background: #111111;
      text-align: center;
      padding: 24px 40px;
      margin-bottom: 24px;
    }
    .email-header img {
      display: inline-block;
      max-width: 130px;
      height: auto;
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

    .banner-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px 30px;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .clan-avatar {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      border: 2px solid #5B2EF7;
      object-fit: cover;
    }

    .clan-info h2 {
      color: #ffffff;
      font-size: 20px;
      margin-bottom: 4px;
    }
    .clan-info p {
      color: #e0e0e0;
      font-size: 13px;
      font-weight: 500;
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

    .whats-next {
      background-color: #faf9ff;
      border: 1px solid #f0ecff;
      border-left: 3px solid #5B2EF7;
      border-radius: 6px;
      padding: 20px;
      font-size: 13px;
      line-height: 22px;
      color: #666666;
      margin-bottom: 30px;
    }
    .whats-next strong {
      color: #111111;
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
      padding: 24px 40px;
      text-align: center;
      color: #888888;
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
    .footer-copy a {
      color: #888888;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="email-wrap">
    <!-- Header -->
    <div class="email-header">
      <img src="{{logoUrl}}" alt="Espotz">
    </div>

    <!-- Banner -->
    <div class="banner-container">
      <img src="{{clanBannerUrl}}" alt="Clan Banner" class="banner-img">
      <div class="banner-overlay">
        <img class="clan-avatar" src="{{clanAvatarUrl}}" alt="Avatar">
        <div class="clan-info">
          <h2>{{clanName}}</h2>
          <p>{{memberCount}} Members</p>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="email-body">
      <div class="badge">
        <span>⚡</span> CLAN ACTIVATED
      </div>

      <h1 class="greeting">Hello Commander,</h1>
      
      <div class="message">
        {{body}}
      </div>

      <div class="btn-container">
        <a href="{{ctaUrl}}" class="cta-btn">VIEW CLAN DASHBOARD &rarr;</a>
      </div>

      <div class="whats-next">
        <strong>What's next?</strong> You can now register for upcoming tournaments, customize your clan social links, manage sponsors, and add players to your roster.
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is an automated email notification, please do not reply. To get help or seek info, contact our customer support center. <strong>DISCLAIMER:</strong> Espotz has delivered this message for the exclusive use of its addressed recipient(s). If you are not the intended recipient, please delete this message. Any unauthorized replication or distribution is strictly prohibited.
      </div>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-team">TEAM ESPOTZ</div>
      <div class="footer-text">This email was sent automatically from Espotz tournaments division.</div>
      <div class="footer-copy">&copy; Espotz, {{year}} &nbsp;|&nbsp; <a href="{{unsubscribeUrl}}">Unsubscribe</a></div>
    </div>
  </div>

</body>
</html>\`;
