"use strict";

const buttonWithXhr = document.getElementById('xhr');
const buttonWithAxios = document.getElementById('axios');
const ul = document.querySelector('ul');
ul.style.listStyleType = "none";

buttonWithAxios.onclick = getImgWithAxios;
buttonWithXhr.onclick = getImgWithXhr;

function getImgWithXhr() {
  const xhr = new XMLHttpRequest();
  const url = "https://dog.ceo/api/breeds/image/random"
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      const li = document.createElement('li');
      li.innerHTML = ` 
      <img src="${xhr.response.message}" width ="300 height ="300>
      `;
      ul.appendChild(li);
    } else {
      console.log("Error", xhr.status)
    }
  }
  xhr.onerror = function (error) {
    console.log('Network error', error)
  }
  xhr.open("GET", url);
  xhr.send();
}

// using AXIOS//
function getImgWithAxios() {
  const secondUrl = "https://dog.ceo/api/breeds/image/random";

  axios.get(secondUrl)
    .then(function (response) {
      //with success 
      const li = document.createElement('li');
      li.innerHTML = `
      <img src="${response.data.message}" width="300" height="300">
      `;
      ul.appendChild(li);

    })
    // in case of error 
    .catch(function (error) {
      console.log(error);
    });
}

document.getElementById('dogPhotoGallery').addEventListener('click', function () {
  ul.innerHTML = "";
  document.getElementById('dogPhotoGallery2').style.display = "block";
  document.getElementById('programmerHumor2').style.display = 'none';
});

