const csv = require('csvtojson');
const fs = require('fs');
// const { parser } = require('json2csv');

const readCsv = async () => {
  const resultArr = await csv().fromFile('users.csv');
  console.log(resultArr);
};

readCsv();

// document.getElementById('submitbtn').addEventListener('click', async () => {
//   const resultArr = await csv().fromFile('users.csv');

//   for (let i = 1; i < 20; i++) {
//     const user = resultArr[i];
//     let userName = user['First Name'] + user['Last Name'];
//     const gender = document.createTextNode(user['Gender']);
//     const age = document.createTextNode(user['Age']);
//     const occupation = user['Occupation'];
//     const div = document.createElement('div');
//     div.className = 'card';

//     const h2 = document.createElement('h2');
//     h2.textContent = userName;
//     div.appendChild(h2);

//     const workTitle = document.createElement('div');
//     workTitle.classList = 'title title--epic';
//     const actualOccupation = document.createTextNode(occupation);
//     workTitle.appendChild(actualOccupation);
//     div.appendChild(workTitle);

//     const svg = document.getElementById('svg');
//     const avatar = svg.cloneNode(true);
//     avatar.style.display = 'block';
//     div.appendChild(avatar);

//     const desc = document.createElement('div');
//     desc.className = 'desc';

//     const container = document.getElementsByClassName('container')[0];
//     container.appendChild(div);
//   }
// });
