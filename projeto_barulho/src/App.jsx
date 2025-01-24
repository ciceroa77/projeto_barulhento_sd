import React from 'react';

const AnimalSounds = () => {
  const animals = [
    { name: 'Cachorro', sound: '/sounds/dog.mp3', emoji: '🐶' },
    { name: 'Gato', sound: '/sounds/cat.mp3', emoji: '🐱' },
    { name: 'Pato', sound: '/sounds/duck.mp3', emoji: '🦆' },
    { name: 'Vaca', sound: '/sounds/cow.mp3', emoji: '🐮' },
  ];

  const playSound = (sound) => {
    const audio = new Audio(sound);  // Carrega o arquivo de som
    audio.play();  // Reproduz o som
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Reproduza Sons de Animais</h1>
      <div>
        {animals.map((animal) => (
          <button
            key={animal.name}
            onClick={() => playSound(animal.sound)}
            style={{
              fontSize: '20px',
              margin: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            {animal.emoji} {animal.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimalSounds;
