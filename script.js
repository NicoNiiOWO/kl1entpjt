/* global $ */
/* global tags */
//"http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + input + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json"
//https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=coda&api_key=8c1cf0cd4c49af664412691c079d2341&format=json
const body = $("body");

function plswork(score){
    return tags[Math.floor(tags.length/(score+1))-1];
}

function value(name){
    return $("input[name="+name+"]:checked").val();
}

var score;
function getScore(){
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
var videoId;
var thumbnail;
$("#submit").click(function(){
    getScore();
    var tag = plswork(score);
    var name = tag.name;
    var artist = tag.artist;
    var url = "https://ws.audioscrobbler.com/2.0/?method=track.search&track=" + name + "&api_key=8c1cf0cd4c49af664412691c079d2341&format=json";
    if(artist !== ""){
        url += ("&artist="+artist);
    }
    
    
    
    body.empty();
    
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            track = response.results.trackmatches.track[0];
            console.log(response.results.trackmatches.track[0]);
        }
    }).then(function(){
        body.append("<p>Name: " + track.name + "</p>");
        body.append("<p>Artist: " + track.artist + "</p>");
        //body.append("<img src=" + track.image[0]["#text"] +"/>");
        //body.append("<a href=" + track.url + ">URL</a>");
        
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAtTkre4m2Im0_WzgoaU99ROsMzT9zdUkg&part=snippet&q=" + name + " " + artist,
            method: "GET",
            success: function(response) {
                console.log(response);
                videoId = response.items[0].id.videoId;
                thumbnail = response.items[0].snippet.thumbnails.medium.url;
            }
        }).then(function(){
            var embed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            body.append(embed);
        });
    });

    
});