const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) =>  {
  // console.log(error);
  // console.log(response);
  // console.log(body);
  if (error !== null){
    console.log(`Error thrown: unable to complete search for ${args[0]}`);
  }
 
  const data = JSON.parse(body);
  if(!data[0]['description'].includes(args)){
    console.log(`Sorry! ${args} is not a breed that we know of!`);
  } else {
    console.log(data[0]['description']);

  }
    // console.log(typeof data);
    // console.log(data[0]);
});