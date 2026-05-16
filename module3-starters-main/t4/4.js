'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  target.innerHTML += `
    <option value="${students[i].id}">
      ${students[i].name}
    </option>
  `;
}
