let popup = document.getElementById("popup");
let cover = document.getElementById("over");
function results() {
  setTimeout(document.getElementById("reverse").style.display="block", 50);
    var collapse = document.getElementsByClassName("collapsible");
        if (document.getElementsByClassName("collapsible").active) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    //var check = document.getElementsByClassName("correct1 correct2");
    var selection = document.getElementById("status");
    const name = document.getElementById("name");
    const out = document.getElementById("moti");
    var score = 0;
    var later = document.getElementById("reverse").style.display="block";
    document.getElementById("fixedTest").style.display="none";
    document.getElementById("timer").style.display="none";
    var cover = document.getElementsByClassName("cover");
    document.getElementById("over").style.display="block";
    document.getElementById("name").style.color="white";
    document.getElementById("btn").style.display="none";
    var correct = [document.getElementById('correct1').checked, document.getElementById('correct2').checked]

        if (document.getElementById('correct1').checked) {
          document.getElementById('status1').innerHTML="&#10004;";
          document.getElementById('status1').style.color="#17e45a";
          score++;
        }
        else {
          document.getElementById('status1').innerHTML="&#x2716;" + " " + "Check: D";
          document.getElementById('status1').style.color="#fc4135";        }
   //     if (document.getElementById('1').checked) {
     //     document.getElementById('status').innerHTML="&#x2716;";
       //   document.getElementById('status').style.color="#fc4135";
       // }
        if (document.getElementById('correct2').checked) {
          document.getElementById('status2').innerHTML="&#10004;";
          document.getElementById('status2').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status2').innerHTML="&#x2716;" + " " + "Check: C";
          document.getElementById('status2').style.color="#fc4135";
        }

        if (document.getElementById('correct3').checked) {
          document.getElementById('status3').innerHTML="&#10004;";
          document.getElementById('status3').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status3').innerHTML="&#x2716;" + " " + "Check: B";
          document.getElementById('status3').style.color="#fc4135";
        }     
      
        if (document.getElementById('correct4').checked) {
          document.getElementById('status4').innerHTML="&#10004;";
          document.getElementById('status4').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status4').innerHTML="&#x2716;" + " " + "Check: C";
          document.getElementById('status4').style.color="#fc4135";
        }    
        
        if (document.getElementById('correct5').checked) {
          document.getElementById('status5').innerHTML="&#10004;";
          document.getElementById('status5').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status5').innerHTML="&#x2716;" + " " + "Check: B";
          document.getElementById('status5').style.color="#fc4135";
        }        
        
        if (document.getElementById('correct6').checked) {
          document.getElementById('status6').innerHTML="&#10004;";
          document.getElementById('status6').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status6').innerHTML="&#x2716;" + " " + "Check: A";
          document.getElementById('status6').style.color="#fc4135";
        }

        if (document.getElementById('correct7').checked) {
          document.getElementById('status7').innerHTML="&#10004;";
          document.getElementById('status7').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status7').innerHTML="&#x2716;" + " " + "Check: B";
          document.getElementById('status7').style.color="#fc4135";
        }

        if (document.getElementById('correct8').checked) {
          document.getElementById('status8').innerHTML="&#10004;";
          document.getElementById('status8').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status8').innerHTML="&#x2716;" + " " + "Check: B";
          document.getElementById('status8').style.color="#fc4135";
        }

        if (document.getElementById('correct9').checked) {
          document.getElementById('status9').innerHTML="&#10004;";
          document.getElementById('status9').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status9').innerHTML="&#x2716;" + " " + "Check: A";
          document.getElementById('status9').style.color="#fc4135";
        }

        if (document.getElementById('correct10').checked) {
          document.getElementById('status10').innerHTML="&#10004;";
          document.getElementById('status10').style.color="#17e45a";
        score++;
        }
        else {
          document.getElementById('status10').innerHTML="&#x2716;" + " " + "Check: D";
          document.getElementById('status10').style.color="#fc4135";
        }
        /* if (document.getElementById('2').checked) {
          document.getElementById('status1').innerHTML="&#x2716;";
          document.getElementById('status1').style.color="#fc4135";
        } */


        if (score == 10 ) {
          document.getElementById("weeby").src ="eweeby_v4.png";
          document.getElementById("weeby").style.width="400px";
          document.getElementById("canvas").style.display="block";
          document.getElementById('moti').style.color="green";
          document.getElementById('moti').innerHTML="Congratulations!" + "<br>" + "You're Perfect!";
          document.getElementById('moti').style.textAlign="center";
          document.getElementById('score').innerHTML="Your score is" + " " + score + "/10.";
          document.getElementById("nema").innerHTML= name.value;
          popup.classList.add('open');
          cover.classList.add('un');
          document.getElementsByClassName("pop-up").style.visibility="visible";
          popup.classList.add('open');
          function late() {
            document.getElementById("reverse").style.display="block";
          }
          setTimeout (late, 2000);
/*           document.getElementById('score').innerHTML= "Your score is" + " " + score + "/2.";
 */        }
        if (score >= 10*0.80) {
          document.getElementById("weeby").src ="eweeby_v4.png";
          document.getElementById("weeby").style.width="400px";
          document.getElementById("canvas").style.display="block";
          document.getElementById('moti').style.color="green";
          document.getElementById('moti').innerHTML="Congratulations!" + "<br>" + "You Passed!";
         // document.getElementById('moti').style.top="140px";
          document.getElementById('moti').style.lineHeight="1";
          document.getElementById('moti').style.textAlign="center";
          document.getElementById("nema").innerHTML=  name.value;
          
          popup.classList.add('open');
          document.getElementById('score').innerHTML="Your score is" + " " + score + "/10.";
          document.getElementsByClassName("pop-up").style.visibility="visible";

        }
        if (score < 10*0.80) {
          document.getElementById("weeby").src ="weebysad.png";
          document.getElementById("weeby").style.top="-136%";
          document.getElementById("weeby").style.width="370px";
          document.getElementById("over").style.backgroundColor = "grey";
          document.getElementById('moti').style.color="red";
          document.getElementById('moti').innerHTML="Sorry, you failed."+ "<br>" + "Do your best next time.";
         // document.getElementById('moti').style.top="140px";
          document.getElementById('moti').style.lineHeight="1";
          document.getElementById('moti').style.textAlign="center";
          document.getElementById("nema").innerHTML=name.value;
          popup.classList.add('open');
          document.getElementById('score').innerHTML="Your score is" + " " + score + "/10.";
          document.getElementsByClassName("pop-up").style.visibility="visible";
        }
      }
 function late() {
        document.getElementById("reverse").style.display="block";
      } 
      
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight - 30;
canvas.width = W;
canvas.height = H;

var particles = [];
for (var i = 0; i < 100; i++) {
  addParticle();
}
setInterval(addParticle(), 10);

/* Add a single particle */
function addParticle() {
  if (particles.length > 1000) {
    return false;
  }

  particles.push({
    x: Math.random() * W, //x-coordinate
    y: H, //y-coordinate
    r: Math.random() * 18 + 1, //radius
    d: Math.random() * particles.length, //density
    color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
    tilt: Math.floor(Math.random() * 5) - 5
  });
}

/* Draw the particles */
function draw() {
  ctx.clearRect(0, 0, W, H);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.fillStyle = p.color;
    ctx.moveTo(p.x, p.y);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + 10, p.y);
    ctx.lineTo(p.x + 5, p.y + (Math.random() * 7));
    ctx.fill();
  }

  update();
}

var angle = 0.02;

function update() {
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.y += Math.cos(angle) + 1 + p.r / 10;
    p.x += Math.sin(angle) * 2;
    if (p.x > W + 5 || p.x < -5 || p.y > H) {
      if (i % 3 > 0) //66.67% of the flakes
      {
        particles[i] = {
          x: Math.random() * W,
          y: -10,
          r: p.r,
          d: p.d,
          color: p.color,
          tilt: p.tilt
        };
      }
    }
  }
}
setInterval(draw, 20);