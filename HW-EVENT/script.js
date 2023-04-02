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

document.addEventListener('keydown', function(event) {
  let code = event.code;
  let audioSrc = tone[code];
  let audio = new Audio(audioSrc);

  let keyDiv = document.getElementById(code.charCodeAt(3));
  keyDiv.classList.add('play');
  audio.play();

  document.addEventListener('keyup', function(event) {
    let code = event.code;
    let keyDiv = document.getElementById(code.charCodeAt(3));
    keyDiv.classList.remove('play');
  });
});
