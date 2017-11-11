// Number of posts
var postNumber = 20;
// Val for number of likes
var numLikes = 0;
// Number of page Loads
var numLoads = Math.ceil(postNumber/12);
// Time for wait in ms
var waitTime = 5000;

// Timeout for scrolldown function
for (var i = 1; i < numLoads; i++) {
  setTimeout(function() {
    window.scrollTo(0,document.body.scrollHeight);
    console.log('Wait until load for 10 sec... '+i);
  }, waitTime*i);
}

// Reserved Timeout
setTimeout(function() {
  console.log('Wait until load for 10 sec... ');
}, waitTime*(numLoads+1));

// Timeout after downloading all pages
setTimeout(function() {
  console.log('Wait until load for 10 sec...');

  // Select all like objects
  var posts = document.querySelectorAll('a[class="_eszkz _l9yih"]');

  if (postNumber < 1) {
    console.log('Number of Posts is less than 1');
  }

  // If Total number of loaded posts is lesser than requested number of post than use post.length
  if (posts.length < postNumber) {
    postNumber = posts.length;
  }

  for (var i = 0; i < postNumber; i++) {
    // if post is already has like (EN)
    if (posts[i].innerHTML == '<span class="_8scx2 coreSpriteHeartFull">Unlike</span>') {
    }
    // if post is already has like (RU)
    if (posts[i].innerHTML == '<span class="_8scx2 coreSpriteHeartFull">Не нравится</span>') {
    }
    else {
      // Click Like on Post
      posts[i].click();
      numLikes = numLikes + 1;
    }
  }

  console.log('Number of loaded posts: '+posts.length);
  console.log('Total number of post in cycle: '+postNumber);
  console.log('You made '+numLikes+' likes!');

}, waitTime*(numLoads+2));
