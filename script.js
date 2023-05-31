//Silent Buttons
$(document).on('click', '#silentMoveTo2', function(){
  fullpage_api.silentMoveTo('section2', 2);
});


//////Section 1 Script

$(document).ready(function () {
$('#fullpage').fullpage({ //initialize
//set options
  navigation: true,
  navigationPosition: 'right',
  anchors: ['section1', 'section2', 'section3'], //name the anchors for each section
  afterLoad: function (origin, destination, direction) {
      if (destination.index == 1) { //section 2
          logo.play(); //anime.js play method
       

      }
      else if (destination.index == 2) {
          yoga.play(); 
      }


      


  }
});
});


//Logo Script
var logo = anime({
targets: '.logo',  
scale: 1,
rotate: '1turn',
duration: 4000
});

//Exercise Regime Script
tippy('#info', {
      content: 'Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.',
  });

///////End of Section 1 Script

///////Section 2 Script

//Nav Script
tippy('#display', {
  content: 'Change Username',

});

tippy('#display', {
  placement: 'right', //place tippy to the right
  trigger: 'click', //trigger tippy on click
  interactive: true, //allow interaction in tippy (e.g. click and select text)

  allowHTL: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)
  followCursor: true //get tippy to follow mouse cursor
});

function getname(){
var name=document.getElementById("name").value;
document.getElementById("display").innerHTML = name;
name.update();

}

///////End of Section 2 Script

///////Section 3 Script

//image animation
var yoga = anime({
  targets: '#lvl1img',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0%', '50%', '0%',],
  easing: 'easeInOutQuad'
});

//chart
var ctx = document.getElementById("myChart").getContext('2d');

function adddata() {
  let mon = parseInt(document.getElementById("mon").value);
  let tues = parseInt(document.getElementById("tues").value);
  let wed = parseInt(document.getElementById("wed").value);
  let thurs = parseInt(document.getElementById("thurs").value);
  let fri = parseInt(document.getElementById("fri").value);
  let sat = parseInt(document.getElementById("sat").value);
  let sun = parseInt(document.getElementById("sun").value);



  myChart.data.datasets[0].data[0] = mon;
  myChart.data.datasets[0].data[1] = tues;
  myChart.data.datasets[0].data[2] = wed;
  myChart.data.datasets[0].data[3] = thurs;
  myChart.data.datasets[0].data[4] = fri;
  myChart.data.datasets[0].data[5] = sat;
  myChart.data.datasets[0].data[6] = sun;
  myChart.update();







let total = mon + tues + wed + thurs + fri + sat + sun;
let remark;

if (total < 75) {

remark = "You can do better, Try Again";
}else{
remark = "Proceed to next Level!";
}

document.getElementById("remark").innerHTML = remark;
document.getElementById("minutes").innerHTML = minutes;
}

//chart animation
var chart = anime({
  targets: '#myChart',
  translateY: '1.0vh',
  duration: 300,
  loop: false,
  direction: 'alternate',
  easing: 'easeInCubic',
  scaleX: {
  value: 1.05,
  duration: 150,
  delay: 268
}
});




const labels = [
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday'
];

var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: labels,
datasets: [{
label: 'Minutes',
data: [mon,tues,wed,thurs,fri,sat,sun],
backgroundColor: [
  'rgba(255, 99, 132, 0.2)',
],
borderColor: [
  'rgba(255,99,132,1)',
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
  ticks: {
    beginAtZero: true
  }
}]
}
}
});

//End of Section3 Script





