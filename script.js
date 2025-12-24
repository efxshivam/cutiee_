let page=1;
const messages=[
 "You always make me laugh 😂",
 "Besties like you are rare 🌟",
 "Hanging out with you is the best 🫶",
 "You bring so much happiness around 💖",
 "Can’t wait for more adventures together ✨",
 "You’re simply awesome 😎"
];
let msgIndex=0;

// Page transitions
function showNextPage(){
  document.getElementById(`page${page}`).classList.remove("active");
  page++;
  if(page<=5){
    document.getElementById(`page${page}`).classList.add("active");
    if(page===2) startMessages();
  }
  if(page===5){
    setTimeout(()=>document.getElementById("popup").style.display="flex",2000);
    document.getElementById("replayBtn").style.display="inline-block";
  }
}

// Messages on page 2
function startMessages(){
  setInterval(()=>{
    msgIndex=(msgIndex+1)%messages.length;
    document.getElementById("msg").innerText=messages[msgIndex];
  },2000);
  setTimeout(showNextPage,8000);
}

// Start page flow
setTimeout(showNextPage,2500);

// Floating hearts
function createHeart(){
 const heart=document.createElement("div");
 heart.className="heart";
 heart.innerText=Math.random()>0.5?"💖":"💕";
 heart.style.left=Math.random()*100+"vw";
 heart.style.fontSize=(16+Math.random()*24)+"px";
 heart.style.animationDuration=(6+Math.random()*4)+"s";
 document.body.appendChild(heart);
 setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,400);

// Cuteness Checker
document.getElementById("checkBtn").onclick = ()=>{
  let cuteValue = Math.floor(Math.random()*20)+101; 
  document.getElementById("cuteResult").innerText = `Cuteness: ${cuteValue}% 😍\nYou are very much cute 💕`;
  setTimeout(showNextPage,2500);
}

// Replay
document.getElementById("replayBtn").onclick = ()=>{
  location.reload();
}

// Music toggle
const music = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioControl");
audioBtn.onclick = ()=>{
  if(music.paused){music.play();audioBtn.innerText="🔇 Music Off";}
  else{music.pause();audioBtn.innerText="🎵 Music On";}
}
