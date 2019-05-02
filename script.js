/* global $ */
//"http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + input + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json"
//https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=coda&api_key=8c1cf0cd4c49af664412691c079d2341&format=json

var score = 0;
$("#submit").click(function(){
    // var input = $("input").val();
    // var url = "https://ws.audioscrobbler.com/2.0/?method=track.search&track=" + input + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json";
    // $.ajax({
    //     url: url,
    //     method: "GET",
    //     success: function(response) {
    //         console.log(response);
    //     }
    // });
    
    if($("input[name='cardiovascularbronchitis']:checked").val() === "No"){
        score+=1;
    }
    console.log(score);
});