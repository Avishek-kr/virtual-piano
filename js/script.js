const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']; //11
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']; //12

const keys = document.querySelectorAll(".key"); //1
const whiteKeys = document.querySelectorAll(".key.white"); //13
const blackKeys = document.querySelectorAll(".key.black"); //14
keys.forEach(key => { //2
  key.addEventListener('click', () => playNote(key));  //3
})

document.addEventListener('keydown', e => { //15
  if(e.repeat) return //21
  const key = e.key; //16
  const whiteKeyIndex = WHITE_KEYS.indexOf(key) //17
  const blackKeyIndex = BLACK_KEYS.indexOf(key) //18
  
  if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) //19
  if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]) //20
})

function playNote(key){ //4
  const noteAudio = document.getElementById(key.dataset.note); //5
  noteAudio.currentTime = 0; //7
  noteAudio.play() //6
  key.classList.add('active'); //8
  noteAudio.addEventListener('ended', () => { //9
    key.classList.remove('active'); //10
  })
}