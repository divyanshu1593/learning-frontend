(async function() {
  const response = await (await fetch('http://localhost:3000')).json();

  if (response.isError) {
    throw new Error(response.message);
  }

  const users = response.data;
  const mainDiv = document.getElementById('main');

  for (const user of users) {
    mainDiv.appendChild(generateCard(user));
  }
})();

function generateCard(user) {
  const card = document.createElement('div');

  const image = document.createElement('img');
  image.src = user.photoUrl;
  image.alt = 'user photo';
  image.style.height = '100px';
  image.style.width = '100px';
  image.className = 'skeleton';

  const agePara = document.createElement('p');
  agePara.innerHTML = '<b>Age: </b>';
  agePara.appendChild(document.createTextNode(user.age));

  const namePara = document.createElement('p');
  namePara.innerHTML = '<b>Name: </b>';
  namePara.appendChild(document.createTextNode(user.name));

  const info = document.createElement('div');
  info.appendChild(namePara);
  info.appendChild(agePara);

  card.appendChild(image);
  card.appendChild(info);

  card.className = 'card';

  return card;
}
