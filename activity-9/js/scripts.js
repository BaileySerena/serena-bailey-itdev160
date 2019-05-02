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

var $nav = $('#nav-container')
var $intro = $('$intro')
var $posts = $('$post-container')

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section>'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>')
    ;($author = $('<span class="author"></span>')), ($navItem = $('<li></li>'))

    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)

    $posts.append($post)
    $nav.append($navItem)

    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()
    })

    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}

initPosts()
