document.getElementById('submitbtn').addEventListener('click', e => {
  let file = document.getElementById('file').files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  reader.addEventListener('load', () => {
    const { result } = reader;
    const resultArr = result.split('\n');

    for (let i = 1; i < 20; i++) {
      const user = resultArr[i];
      const userArr = user.split(',');
      let userName = userArr[0] + ' ' + userArr[1];
      userName = userName.replaceAll('""', '');
      console.log(userName);
      const gender = document.createTextNode(userArr[2]);
      const age = document.createTextNode(userArr[3]);
      const occupation = userArr[4];
      const div = document.createElement('div');
      div.className = 'card';

      const h2 = document.createElement('h2');
      h2.textContent = userName;
      div.appendChild(h2);

      const workTitle = document.createElement('div');
      workTitle.classList = 'title title--epic';
      const actualOccupation = document.createTextNode(occupation);
      workTitle.appendChild(actualOccupation);
      div.appendChild(workTitle);

      const svg = document.getElementById('svg');
      const avatar = svg.cloneNode(true);
      avatar.style.display = 'block';
      div.appendChild(avatar);

      const desc = document.createElement('div');
      desc.className = 'desc';

      const container = document.getElementsByClassName('container')[0];
      container.appendChild(div);
    }
  });
});
