let cardList = [];

$.ajax({
    url: "https://api.scryfall.com/catalog/card-names",

    type: "GET",

    dataType: "json"
}).done(function( cardNames ) {
    cardList = cardNames.data;
})


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

$('#button1').click(function() {
    $(this).toggleClass('btn-danger').toggleClass('btn-primary');
    let randomNum = getRandomInt(0, cardList.length);
    let magicCardName = cardList[randomNum];
    $.ajax({
    
        url: "https://api.scryfall.com/cards/named",

        data:  { exact: magicCardName }, 

        type: "GET",
    
        dataType: "json"

    })
    .done(function( cardData ) {
        // handles sucessful response
        $("#cardImg").attr( "src", cardData.image_uris.normal )
    }) 
    .fail(function(xhr, status, errorThrown) {
        // handles failed response
        alert("Sorry, there was an error!");
        console.log("Error:" + errorThrown);
        console.log("Status:" + status);
        console.dir(xhr); // logs the xhr object for inspection
    }) 
    .always(function(xhr, status) {
        // this runs regardless of the request's sucess or failure
        console.log("The request is complete!");
        console.log("Status:" + status);
        console.dir(xhr); // logs the xhr object for inspection
    });
})


// TODO: add search funcation using the scryfall search api https://scryfall.com/docs/api/lists 
// add ability to display multiple cards at a time

// $(document).ready(function() {
//     $
// })


