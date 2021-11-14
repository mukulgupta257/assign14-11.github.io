//function to show answer 
function answer1(){
    var ans=document.getElementById("answer1");
    ans.innerText="Yes";
    console.log(ans)
}

function answer2(){
    var ans=document.getElementById("answer2");
    ans.innerText="Yes";
    console.log(ans)
}

function answer3(){
    var ans=document.getElementById("answer3");
    ans.innerText="Yes";
}


// adding event listener
var icon=document.getElementById("question1");
icon.addEventListener('click',answer1)

// adding event listener
var icon2=document.getElementById("question2");
icon2.addEventListener('click',answer2)

// adding event listener
var icon3=document.getElementById("question3");
icon3.addEventListener('click',answer3)