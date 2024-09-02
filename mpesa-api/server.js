const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Port to listen on

app.use(bodyParser.json());

// M-Pesa API credentials
const BUSINESS_SHORT_CODE = '174379';
const PASSWORD = 'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3';
const TIMESTAMP = new Date().toISOString().replace(/[-:T]/g, '').substring(0, 14);
const API_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const SHORTCODE = '174379'; // Use the actual shortcode here

// Endpoint to handle M-Pesa payment request
app.post('/mpesa', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  if (!phoneNumber || !amount) {
    return res.status(400).json({ message: 'Phone number and amount are required' });
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${await getAccessToken()}`
  };

  const requestBody = {
    BusinessShortCode: SHORTCODE,
    Password: PASSWORD,
    Timestamp: TIMESTAMP,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phoneNumber, // Sender's number
    PartyB: SHORTCODE, // Business shortcode
    PhoneNumber: phoneNumber,
    CallBackURL: 'https://mydomain.com/pat',
    AccountReference: 'Test',
    TransactionDesc: 'Payment for test'
  };

  try {
    const response = await axios.post(API_URL, requestBody, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('M-Pesa API request failed:', error);
    res.status(500).json({ message: 'M-Pesa API request failed', error });
  }
});

// Function to get the access token
const getAccessToken = async () => {
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw new Error('Failed to get access token');
  }
};

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
