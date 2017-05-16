function getQuote() {
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", success: function (json) {
            //console.log(json);
            var post = json.shift();
            $("#quote-text").html(post.content);
            $("#quote-author").html("- " + post.title);
        },
        cache: false
    });
}

function tweetQuote() {
    var phrase = document.getElementById('quote-text').innerText + document.getElementById("quote-author").innerText;
    var tweetUrl = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(phrase);
    window.open(tweetUrl);
}

$(document).ready(function () {
    getQuote();
    $("#newQuote").on("click", getQuote);
    $("#newTweet").on("click", tweetQuote);
    //document.getElementById("quote-text").style.color = "blue";
});
