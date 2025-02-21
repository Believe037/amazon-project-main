// create a new http message or request
const xhr = new XMLHttpRequest();
let res;
xhr.addEventListener('load', () =>{
  console.log(xhr.response)
  res = xhr.response
});
// setup the request
xhr.open('GET', 'https://supersimplebackend.dev');
// send the message
xhr.send();
// console.log(res)