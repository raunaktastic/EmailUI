/**
 * Espotz — Removed From Tournament Email Template
 *
 * Theme: E-sports Knockout Card (Creative Overhaul)
 * Features a dynamic gaming stadium dark layout, warning accents,
 * and a stylized arena recovery button.
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
      background-color: #0b071e;
      font-family: 'Inter', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 40px 12px;
      color: #b0a8d6;
    }
    a { text-decoration: none; }
    img { display: block; border: 0; }

    .email-wrap {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      background-color: #120d2d;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(91, 46, 247, 0.15);
      border: 1px solid rgba(255, 46, 147, 0.2);
    }

    .email-header {
      background: linear-gradient(135deg, #1b0c3d 0%, #0d0626 100%);
      text-align: center;
      padding: 28px 40px;
      border-bottom: 1px solid rgba(255, 46, 147, 0.15);
    }
    .email-header img {
      display: inline-block;
      max-width: 130px;
      height: auto;
    }

    .email-body {
      padding: 40px 40px 30px 40px;
      background: radial-gradient(circle at top, #23123a 0%, #120d2d 100%);
    }

    .badge-container {
      margin-bottom: 24px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.4);
      color: #ff4d4d;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .greeting {
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }

    .message {
      font-size: 14px;
      line-height: 24px;
      color: #b0a8d6;
      margin-bottom: 24px;
    }
    
    .arena-card {
      background-color: #080517;
      border: 1px solid rgba(255, 46, 147, 0.25);
      border-radius: 12px;
      padding: 20px 24px;
      margin: 28px 0;
      position: relative;
    }

    .arena-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; bottom: 0; width: 4px;
      background-color: #ff2e93;
      border-radius: 12px 0 0 12px;
    }

    .arena-title {
      font-size: 11px;
      font-weight: 800;
      color: #ff2e93;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 6px;
    }

    .arena-name {
      font-size: 18px;
      font-weight: 800;
      color: #ffffff;
    }

    .btn-container {
      text-align: center;
      margin: 32px 0;
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
      box-shadow: 0 4px 14px rgba(91, 46, 247, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .disclaimer {
      font-size: 11px;
      line-height: 18px;
      color: #6d668c;
      text-align: justify;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .email-footer {
      background: linear-gradient(135deg, #1b0c3d 0%, #0d0626 100%);
      padding: 28px 40px;
      text-align: center;
      border-top: 1px solid rgba(255, 46, 147, 0.15);
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
      color: rgba(255, 255, 255, 0.4);
    }

    .footer-copy {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.3);
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
      <div class="badge-container">
        <div class="badge">
          <span>🚫</span> ELIMINATED / KICKED
        </div>
      </div>

      <h1 class="greeting">Hello {{playerName}},</h1>
      
      <div class="message">
        We are writing to inform you that your squad has been knocked out from the tournament listed below:
      </div>

      <div class="arena-card">
        <div class="arena-title">TOURNAMENT MATRICES</div>
        <div class="arena-name">{{tournamentName}}</div>
      </div>

      <div class="message">
        Don't worry about your entry fee — if you paid one, it will be automatically refunded to your wallet balance within 24 hours.
      </div>

      <div class="message">
        That means you won't be able to register for this specific tournament again.
      </div>

      <div class="message" style="margin-bottom: 8px; color: #ffffff; font-weight: 600;">
        But hey, the grind never stops! There are plenty of other arenas waiting for you — show off your skills and keep the grind alive!
      </div>

      <div class="btn-container">
        <a href="{{tournamentsLink}}" class="cta-btn">Explore arenas &rarr;</a>
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer generated email, please do not reply. In case you wish to seek more information, please contact our customer care team via phone or email. <strong>DISCLAIMER:</strong> Espotz has sent this e-mail message for the sole use of its desired recipient/s. In case you are not the intended recipient, please delete the message. Any unauthorized use of content of this email, including any attached documents, is prohibited by law.
      </div>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-team">TEAM ESPOTZ</div>
      <div class="footer-text">This is an automated transactional email from Espotz tournaments division.</div>
      <div class="footer-copy">&copy; Espotz, {{year}}</div>
    </div>
  </div>

</body>
</html>\`;
