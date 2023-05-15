const https = require('https');

const { WEBPAGE_URL, SEARCH_TERM } = process.env;

https.get(WEBPAGE_URL, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data)
    if (data.includes(SEARCH_TERM)) {
      console.log(`Found search term "${SEARCH_TERM}" in webpage content.`);
      // TODO: Add code to trigger a request here
    } else {
      console.log(`Did not find search term "${SEARCH_TERM}" in webpage content.`);
    }
  });
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});