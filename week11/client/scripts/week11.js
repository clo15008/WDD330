import {Errors, makeRequest} from "./authHelpers.js";
import Auth from "./auth.js";

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com',
//     });


// create Auth variable holding token
let errors = new Errors('errors');
let Auth = new Auth(errors);

let data = makeRequest('posts', 'GET', null, Auth.token);

console.log('data: ' + data);