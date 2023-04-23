const luma1 = document.getElementById("hg1");
const luma2 = document.getElementById("hg2");
var audio = document.getElementById("lumasound");


let played = false;
function change()
{
    luma1.style.display="none";
    luma2.style.display="block";
    if(!played)
    {
        audio.play();
        played=true;
    }
}

function reverse()
{
    luma1.style.display="block";
    luma2.style.display="none";
    played=false;
}