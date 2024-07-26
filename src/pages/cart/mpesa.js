const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const app = express();

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

// Replace with your actual credentials
const CONSUMER_KEY = 'YOUR_CONSUMER_KEY';
const CONSUMER_SECRET = 'YOUR_CONSUMER_SECRET';
const SHORTCODE = 'YOUR_SHORTCODE';
const PASSKEY = 'YOUR_PASSKEY';

app.post('/mpesa', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  try {
    // Step 1: Generate OAuth token
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
    const { data: { access_token } } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: { Authorization: `Basic ${auth}` }
    });

    // Step 2: Make the payment request
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
    const password = Buffer.from(`${SHORTCODE}${PASSKEY}${timestamp}`).toString('base64');
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: 'YOUR_CALLBACK_URL',
        AccountReference: 'TestPayment',
        TransactionDesc: 'Payment for goods'
      },
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(3001, () => console.log('Server started on port 3001'));
