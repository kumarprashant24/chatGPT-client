export let API_URL;

if (process.env.REACT_APP_STAGE === 'prod') {
  API_URL = 'https://chatgpt-8uek.onrender.com';
}
if (process.env.REACT_APP_STAGE === 'dev') {
  API_URL = 'http://localhost:5000';
}
