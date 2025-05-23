const axios = require('axios');

const requestBody = {
  email: "divakarkumartrivedisk_cse22@its.edu.in",
  name: "divakar trivedi",
  rollNo: "220222010062",
  accessCode: "gdCUHf",
  clientID: "20e58eda-5621-47bf-a42e-24aebab45c30",
  clientSecret: "CqxFZafFCRyaXPnx"
};

axios.post('http://20.244.56.144/evaluation-service/auth', requestBody)
  .then(response => {
    console.log('✅ Authorization Successful');
    console.log('Token Type:', response.data.token_type);
    console.log('Access Token:', response.data.access_token);
  })
  .catch(error => {
    console.error('❌ Authorization Failed:', error.response?.data || error.message);
  });
