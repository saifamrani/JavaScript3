" use strict";

//first function that make an API Call using XMLHttp Request 

function makeAPIUsingXhr() {
  const xhr = new XMLHttpRequest();
  const url = "https://www.randomuser.me/api";

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.log('HTTP ERROR', xhr.status)
    }
  }
  xhr.onerror = function (error) {
    console.log('Network Eroor', error)
  }
  xhr.open("GET", url);
  xhr.send();
}
// second function using Axios 

function makeAPIUsingAxios() {
  const secondUrl = "https://www.randomuser.me/api";
  axios.get(secondUrl)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
window.onload = function () {
  this.makeAPIUsingXhr();
  this.makeAPIUsingAxios();
}

