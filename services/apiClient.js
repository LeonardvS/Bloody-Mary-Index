const url = 'http://10.0.2.2:3001';

function getBloodyMarys () {
  return fetchRequest('/bloodyMarys');
}

function postBloodyMary (body) {
  return fetchRequest('/bloodyMarys', {
    method: 'POST',
    headers: {
    'content-type': 'application/json',
    },
    body: JSON.stringify(body)
  });
}

function deleteBloodyMary () {

}

const fetchRequest = (path, options) => {
  return fetch(`${url}${path}`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err} fetching ${path}`)
    });
}

module.exports = { getBloodyMarys, postBloodyMary, deleteBloodyMary };