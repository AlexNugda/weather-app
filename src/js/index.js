import 'normalize.css';
import '../scss/main';

// import imageUrl from "./../img/main-bg.jpg";
// option 1
// const image = new Image();
// image.src = imageUrl;
// document.getElementById("weather-app-root").append(image);
// option 2
// document.getElementById(
//   "weather-app-root"
// ).innerHTML = `<img src="${imageUrl}" />`;

import { App } from './Components/App/';
new App(document.getElementById('weather-app-root'));
