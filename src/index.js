import './index.css';
import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody += `<tr>
      <td><a href="#" data-id = "${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>
    </tr>`
  });

  document.getElementById('users').innerHTML = userBody;
});

//import numeral from 'numeral';

//const courseValue = numeral(1000).format('$0,0.00');
//debugger; eslint-disable-line no-debugger
//console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console
