var today = new Data();
var year = today.getFUllYear();
var hourNow = today.getHours();
var greeting = '<h3>' + greeting + '</h3>';

if (hourNow > 18) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
var el = document.getElementById('greeting');
el.innerHTML = 'greeting';

var data = [
{
name: Sailor Moon,
description: A Bishoujo Anime/Manga,
author: Naoko Takeuchi,
stars: 5/5,
selector: 'p1'
},
{
  name: Madoka Magika,
  description: A Bishoujo Anime/Manga,
  author: Gen Urobuchi,
  stars: 5/5,
  selector: 'p2'
},
{
  name: chobits,
  description: PG-13 Anime/Manga,
  author: Clamp,
  stars: 4/5,
  selector: 'p3'
}
];

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.stars = data.stars;
}

function writePackageInfo(package) {
  var selector = package.selector,
  nameEl = document.getElementById(selector + '-name'),
  descEl = document.getElementById(selector + '-description');
}

function init() {
  for (let i = 0; i < data.length; i++){
    const package = data[i];
    writePackageInfo(package);
  }
}

init();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
