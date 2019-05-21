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
]

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

var data = [
  {
    id: 1,
    title: 'Creamsicle',
    body: 'You really want to know my process? Usually starts with a Holla, and ends with a creamsicle. And if theres time in between, thundercats... hoooo!',
    author: 'Shawn and Gus'
  },
  {
    id: 2,
    title: 'Parent',
    body: 'Okay, so I dont practice what I preach, Im a parent and I can get away with it!',
    author: 'Darkwing Duck'
  },
  {
    id: 3,
    title: 'Madness',
    body: 'Theres always been a method to my madness. If they think youre nuts, you can slip through the gaps.',
    author: 'Barry Weiss'
  },
  {
    id: 4,
    title: 'Autism',
    body: 'The Devil whispered in my ear, youre not strong enough to withstand the storm. Today I whispered in the Devils ear, I am the storm',
    author: 'Unknown'
  },
  {
    id: 5,
    title: 'One More Light',
    body: 'Who cares if one more light goes out in the sky of a million stars, it flickers-flickers, who cares if someone’s time runs out if a moment is all we are, we’re quicker-quicker, who cares if one more light goes out, well I do~!',
    author: 'Linkin Park'
  }
]

var nav = $('#nav-container');
var $intro = #('$intro');
var $posts = #('$post-container');

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    var postId = 'post-' + data[i].id,
    var post = $'<section class="post"></section>',
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>');
    ($author = $('<span class="author"></span>')), ($navItem = $('<li></li>'))

    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author);

    $posts.append($post);
    $nav.append($navItem);

    $navItem.on('click', function() {
      var id = $(this).attr('id');
      $posts.children().hide();
      $posts.find('#post-' + id).fadeIn();
    });

    $posts.children('.post').hide();
    $intro.fadeIn(1000);
  };
}

initPosts();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
