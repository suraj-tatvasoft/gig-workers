import { BRAND_NAME } from '@/constants';

export const emailLayout = (content: string, extraStyles = '') => {
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', Arial, sans-serif;
          background: #f8fafc;
          margin: 0;
          padding: 20px;
          color: #1e293b;
        }

        .email-container {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px;
          max-width: 600px;
          margin: auto;
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px 15px;
          background-color: #1890ff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #000;
        }

        h1 {
          color: #1e293b;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 20px 0;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 20px 0;
        }

        .btn-container {
          text-align: center;
          margin: 30px 0;
        }

        .btn {
          display: inline-block;
          background-color: #1890ff;
          color: #ffffff;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        .btn:hover {
          background-color: #40a9ff;
        }

        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          font-size: 12px;
          color: #94a3b8;
          text-align: center;
        }

        @media (max-width: 600px) {
          .email-container {
            padding: 30px 20px;
          }

          h1 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
          }

          .btn {
            padding: 12px 24px;
            font-size: 14px;
          }
        }
        ${extraStyles}
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">${BRAND_NAME}</div>
        </div>

        ${content}

        <div class="footer">&copy; ${currentYear} ${BRAND_NAME}. All rights reserved.</div>
      </div>
    </body>
  </html>
  `;
};
