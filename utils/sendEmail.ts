import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'

const sendEmail = async ({ name, email }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'juanmatusg16@gmail.com',
            name: 'Test SendGrid'
          },
          content: [
            {
              type: 'text/html',
              value: ''
            }
          ]
        })
    });
}

export { sendEmail };
