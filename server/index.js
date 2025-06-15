const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

app.post('/api/save-order', async (req, res) => {
  const { name, phone, address, items } = req.body;
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = '13lRCeHr8k0HlfMT7NM8mYxkbZU3GntoZa5bdEsPeQA0';  // Update this!
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:D',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[name, phone, address, items.join(', ')]],
    },
  });

  res.send({ status: 'Order saved' });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});