// const tone = {
//   'KeyA': 'audio/A.wav',
//   'KeyS': 'audio/S.wav',
//   'KeyD': 'audio/D.wav',
//   'KeyF': 'audio/F.wav',
//   'KeyG': 'audio/G.wav',
//   'KeyH': 'audio/H.wav',
//   'KeyJ': 'audio/J.wav',
//   'KeyK': 'audio/K.wav',
//   'KeyL': 'audio/L.wav',
// };

let lastKey = null;

const createAudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};

const playSound = (key) => {
  const audioSrc = key.querySelector('audio').src;
  createAudio(audioSrc);
  key.classList.add('play');
  lastKey = key;
};

const removePlayClass = () => {
  if (lastKey !== null) {
    lastKey.classList.remove('play');
    lastKey = null;
  }
};

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('mousedown', function(event) {
    removePlayClass();
    playSound(key);
  });
});

document.addEventListener('keydown', function(event) {
  const code = event.code;
  const key = document.getElementById(code.charCodeAt(3));
  if (key !== null) {
    removePlayClass();
    playSound(key);
  }
});

document.addEventListener('keyup', function(event) {
  const code = event.code;
  const key = document.getElementById(code.charCodeAt(3));
  if (key !== null && key !== lastKey) {
    key.classList.remove('play');
  }
});
