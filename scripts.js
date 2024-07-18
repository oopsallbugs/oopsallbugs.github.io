let chessProfile = null;

$.ajax({
    url: "https://api.chess.com/pub/player/ages_taker",

    type: "GET",

    dataType: "json"
}).done(function( json ) {
    chessProfile = json.data;
}) 
console.log(chessProfile)
