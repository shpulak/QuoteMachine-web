function changeBackground() {
    document.body.style.transition = "background 0.3s linear 0s";
    var color = getRandomColor();
    document.body.style.backgroundColor = color; 
    $(".fa").css("color",color); 
    $(".btn").css("background-color",color);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (json) {
        //alert(JSON.stringify(json));
        $("#quote-placeholder").html(json.quoteText);
        json.quoteAuthor ? $("#quote-author").html('- ' +json.quoteAuthor): $("#quote-author").html(json.quoteAuthor) ;
        changeBackground();
    });
}

$(document).ready(function (){
    getQuote();
});