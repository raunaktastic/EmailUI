/**
 * Espotz — Donation Contribution Thank You Email Template
 *
 * Theme: Golden VIP Loot (Creative Overhaul)
 * Features a glowing cosmic dark theme, celebratory green success badge,
 * premium gold gradient value capsule, and active gaming button styling.
 */

export const Contributiontemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Contribution</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
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
      border: 1px solid rgba(0, 230, 118, 0.2);
    }

    .email-header {
      background: linear-gradient(135deg, #1b0c3d 0%, #0d0626 100%);
      text-align: center;
      padding: 28px 40px;
      border-bottom: 1px solid rgba(0, 230, 118, 0.15);
    }
    .email-header img {
      display: inline-block;
      max-width: 130px;
      height: auto;
    }

    .email-body {
      padding: 40px 40px 30px 40px;
      background: radial-gradient(circle at top, #0f2b25 0%, #120d2d 100%);
    }

    .badge-container {
      margin-bottom: 24px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: rgba(0, 230, 118, 0.1);
      border: 1px solid rgba(0, 230, 118, 0.4);
      color: #00e676;
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
    
    .donation-panel {
      background: linear-gradient(135deg, #1a160c 0%, #0b071e 100%);
      border: 1px solid rgba(255, 215, 0, 0.3);
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      margin: 28px 0;
      position: relative;
    }

    .donation-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(to right, transparent, #ffd700, transparent);
    }

    .donation-label {
      font-family: 'Share Tech Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: #ffd700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    .donation-val {
      font-size: 36px;
      font-weight: 900;
      color: #ffd700;
      text-shadow: 0 0 16px rgba(255, 215, 0, 0.4);
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
      border-top: 1px solid rgba(0, 230, 118, 0.15);
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
          <span>✨</span> CONTRIBUTION MATCHED
        </div>
      </div>

      <h1 class="greeting">Dear {{name}},</h1>
      
      <div class="message">
        Thank you for your generous contribution supporting the arena prize pool for <strong>{{tournamentName}}</strong> on Espotz!
      </div>

      <div class="donation-panel">
        <div class="donation-label">CREDITS CONTRIBUTED</div>
        <div class="donation-val">{{donationAmount}} EC</div>
      </div>

      <div class="message">
        Your contribution directly boosts the active community pool rewards and fuels competitive match grinds. We deeply appreciate your championship support.
      </div>

      <div class="message" style="margin-bottom: 8px;">
        You can view the active tournament pool and real-time statistics below:
      </div>

      <div class="btn-container">
        <a href="{{tournamentLink}}" class="cta-btn">View Tournament &nbsp;↗</a>
      </div>

      <div class="message" style="color: #ffffff; font-weight: 600;">
        Thank you for being part of the Espotz community!
      </div>

      <div class="disclaimer">
        <strong>Note:</strong> This is a computer generated email, please do not reply. In case you wish to seek more information, please contact our customer care team via phone or email. DISCLAIMER: Espotz has sent this e-mail message for the sole use of its desired recipient/s. In case you are not the intended recipient, please delete the message. Any unauthorized use of content of this email, including any attached documents, is prohibited by law.
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
