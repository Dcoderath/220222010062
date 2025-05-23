const axios = require('axios');

const requestBody = {
  email: "divakarkumartrivedisk_cse22@its.edu.in",
  name: "divakar trivedi",
  mobileNo: "9999999999", // use any valid 10-digit number or your real one
  githubUsername: "Dcoderath", // your GitHub username from earlier
  rollNo: "220222010062",
  collegeName: "ITS University", // update as per your college name
  accessCode: "gdCUHf"
};

axios.post('http://20.244.56.144/evaluation-service/register', requestBody)
  .then(response => {
    console.log('✅ Registration Successful');
    console.log('Email:', response.data.email);
    console.log('Name:', response.data.name);
    console.log('Roll No:', response.data.rollNo);
    console.log('Access Code:', response.data.accessCode);
    console.log('Client ID:', response.data.clientID);
    console.log('Client Secret:', response.data.clientSecret);
  })
  .catch(error => {
    console.error('❌ Registration Failed:', error.response?.data || error.message);
  });
