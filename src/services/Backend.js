export const postPhoto = (data) => {
  return fetch('http://localhost:7890/api/v1', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not post photo';

      return json;
    })
    .then(res => res.json())
    .then(res => console.log('Success', JSON.stringify(res)))
    .catch(error => console.error('Error', error));
};

export const getPhoto = (data) => {
  return fetch('http://localhost:7890/api/v1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not get posted photos';

      return json;
    })
    .then(json => json.results.map(photo => ({
      photo: photo.imageUrl,
      caption: photo.caption
    })));
};
