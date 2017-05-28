function getQuote() {
  fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {
      cache: "reload"
    })
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      var post = json.shift();
      document.getElementById('quote-text').innerHTML = post.content;
      document.getElementById('quote-author').innerHTML = post.title;
      console.log(post.content);
    });
}

function tweetQuote() {
  var phrase = document.getElementById('quote-text').innerText + document.getElementById("quote-author").innerText;
  var tweetUrl = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(phrase);
  window.open(tweetUrl);
}

document.addEventListener('DOMContentLoaded', function () {
  getQuote();
  newQuote.addEventListener('click', getQuote);
  newTweet.addEventListener('click', tweetQuote);
});