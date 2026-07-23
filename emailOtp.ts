/**
 * Espotz — Login Code Email Template
 *
 * Theme: Minimalist Security Verification (OpenAI Style)
 * Features a clean, distraction-free layout with a centered logo,
 * elegant typography, and a large, high-impact centered code.
 *
 * Template Variables:
 *  {{logoUrl}}   — Full URL to the Espotz logo image
 *  {{name}}      — The user's name
 *  {{code}}      — The 6-digit login code
 *  {{year}}      — Current year for copyright footer
 */

export const emailOtp = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Verification Code</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #f9fafb;
      font-family: 'Inter', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 40px 12px;
      color: #374151;
    }
    a { text-decoration: none; }
    img { display: block; border: 0; }

    .email-wrap {
      max-width: 560px;
      width: 100%;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      border: 1px solid #f3f4f6;
      padding: 48px 40px;
    }

    .logo-container {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .logo-container img {
      display: inline-block;
      max-width: 120px;
      height: auto;
    }

    .greeting {
      font-size: 20px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 16px;
      letter-spacing: -0.25px;
    }

    .message {
      font-size: 15px;
      line-height: 24px;
      color: #4b5563;
      margin-bottom: 32px;
    }

    .code-container {
      text-align: center;
      margin: 36px 0;
    }

    .code-display {
      display: inline-block;
      font-family: 'Inter', Arial, sans-serif;
      font-size: 44px;
      font-weight: 700;
      letter-spacing: 6px;
      color: #5B2EF7;
      padding: 12px 24px;
      background-color: #f3f0ff;
      border-radius: 8px;
    }

    .divider {
      height: 1px;
      background-color: #f3f4f6;
      margin: 32px 0;
    }

    .disclaimer {
      font-size: 12px;
      line-height: 20px;
      color: #9ca3af;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      font-size: 12px;
      color: #9ca3af;
    }
  </style>
</head>
<body>

  <div class="email-wrap">
    <!-- Centered Logo -->
    <div class="logo-container">
      <img src="{{logoUrl}}" alt="Espotz">
    </div>

    <!-- Body Content -->
    <h1 class="greeting">Hi {{name}},</h1>
    
    <div class="message">
      Use the code below to sign in to <strong>Espotz</strong>. The code is valid for 10 minutes — type it into the same screen where you entered your email.
    </div>

    <div class="code-container">
      <div class="code-display">{{code}}</div>
    </div>

    <div class="message" style="font-size: 14px; margin-bottom: 0;">
      If you didn't request this code, you can safely ignore this email — someone may have typed your address by mistake.
    </div>

    <div class="divider"></div>

    <div class="disclaimer">
      <strong>Note:</strong> This is a computer-generated email — please do not reply. For help, contact our support team.
    </div>

    <!-- Minimal Footer -->
    <div class="footer">
      <p style="margin-bottom: 4px;">&copy; Espotz, {{year}}</p>
    </div>
  </div>

</body>
</html>\`;
