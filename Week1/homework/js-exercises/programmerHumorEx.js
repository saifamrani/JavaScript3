"use strict";
function getImgWithXhr() {
  const xhr = new XMLHttpRequest();
  const url = "https://xkcd.now.sh/?comic=latest";
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log(xhr.response);
      const img = document.getElementById('humorWithXhr');
      img.src = xhr.response.img;
      img.alt = xhr.response.alt;
      img.title = xhr.response.title;
    } else {
      console.log("http error", xhr.status);
    }
  }
  xhr.onerror = function (error) {
    console.log('NetWork error ; ', error)
  }
  xhr.open("GET", url);
  xhr.send();
}

// second function using axios method 
function getImgWithAxios() {
  const secondUrl = "https://xkcd.now.sh/?comic=latest";

  axios.get(secondUrl)

    .then(function (response) {
      //with success 
      const img = document.getElementById('humorWithAxios');
      console.log(response.data);
      img.src = response.data.img;
      img.alt = response.data.alt;
      img.title = response.data.title;
    })
    .catch(function (error) {
      //error handling
      console.log(error);
    });
}

document.getElementById('programmerHumor').addEventListener('click', function () {
  document.getElementById('programmerHumor2').style.display = 'block';
  document.getElementById('dogPhotoGallery2').style.display = 'none';
  getImgWithXhr();
  getImgWithAxios();
});