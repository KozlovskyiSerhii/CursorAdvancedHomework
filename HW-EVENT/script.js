let tone = {
  'KeyA': 'audio/A.wav',
  'KeyS': 'audio/S.wav',
  'KeyD': 'audio/D.wav',
  'KeyF': 'audio/F.wav',
  'KeyG': 'audio/G.wav',
  'KeyH': 'audio/H.wav',
  'KeyJ': 'audio/J.wav',
  'KeyK': 'audio/K.wav',
  'KeyL': 'audio/L.wav',
};

let lastKey = null;

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('mousedown', function(event) {
    if (lastKey !== null) {
      lastKey.classList.remove('play');
    }
    key.classList.add('play');
    let audioSrc = key.querySelector('audio').src;
    let audio = new Audio(audioSrc);
    audio.play();
    lastKey = key;
  });
});

document.addEventListener('keydown', function(event) {
  let code = event.code;
  let key = document.getElementById(code.charCodeAt(3));
  if (key !== null) {
    if (lastKey !== null && lastKey !== key) {
      lastKey.classList.remove('play');
    }
    key.classList.add('play');
    let audioSrc = key.querySelector('audio').src;
    let audio = new Audio(audioSrc);
    audio.play();
    lastKey = key;
  }
});

document.addEventListener('keyup', function(event) {
  let code = event.code;
  let key = document.getElementById(code.charCodeAt(3));
  if (key !== null && lastKey === key) {
    key.classList.remove('play');
    lastKey = null;
  }
});
