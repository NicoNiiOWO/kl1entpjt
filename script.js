/* global $ */
//"http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + input + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json"
//https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=coda&api_key=8c1cf0cd4c49af664412691c079d2341&format=json
const tags = ["A Cruel Angel's Thesis"];


function plswork(score){
    if (0 <= score < 2){
        return tags[0];
    }
}

function value(name){
    return $("input[name="+name+"]:checked").val()
}

var score;
function score(){
    score = 0;
    
    if(value("cardiovascularbronchitis") === "No"){
        score+=1;
    }
    
    if(value("kpop") === "Yes"){
        score+=1;
    }
    
    if(value("mumblerap") === "No"){
        score+=1;
        if(value("aaaa") === "Yes"){
            score+=1;
        }
    }
    
    if(value("reggaeton") === "No"){
        score+=1;
    }
    
    if(value("eee") === "Yes"){
        score+=1;
    }
    
    
    console.log(score);

    console.log(plswork(score));
    
}

var track;
$("#submit").click(function(){
    score();
    var tag = plswork(score);
    var url = "https://ws.audioscrobbler.com/2.0/?method=track.search&track=" + tag + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            track = response.results.trackmatches.track[0];
            console.log(response.results.trackmatches.track[0]);
        }
    }).then(function(){
        var body = $("body")
        body.empty();
        body.append("<p>Name: " + track.name + "</p>");
        body.append("<p>Artist: " + track.artist + "</p>");
        body.append("<img src=" + track.image[0]["#text"] +"/>");
    });
    
    
});