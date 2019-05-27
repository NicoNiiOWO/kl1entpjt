/* global $ */
/* global tags */
const body = $("body");

function plswork(score){
    return tags[score];
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

    
    
    body.empty();
    body.append("<p>Name: " + name + "</p>")
    body.append("<p>Artist: " + artist + "</p>")
        
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