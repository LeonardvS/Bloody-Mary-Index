import axios from 'axios';

const url = 'http://192.168.1:80';

function getBloodyMarys () {
  return fetchRequest('/bloodyMarys');
}

function postBloodyMary (body) {
  console.log('body')
  axios.get('http://dummy.restapiexample.com/api/v1/employees')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function deleteBloodyMary () {

}

const fetchRequest = (path, options) => {
  return fetch(`${url}${path}`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} fetching ${path}`)
    });
}

module.exports = {getBloodyMarys, postBloodyMary, deleteBloodyMary};