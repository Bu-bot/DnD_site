import React from 'react';

const banner = 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731081/11435eff-4c19-414a-be62-694e81599daa.png'; // Icewind Dale banner
const party = [
  {
    name: 'Grog G.',
    raceClass: 'Orc Barbarian',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731345/5fb165f2-539d-4ef7-8094-01523c3fcc98.png',
    summary: 'A fierce warrior with a greataxe and a soldier’s past.',
  },
  {
    name: 'Issac',
    raceClass: 'Blue Dragonborn Wizard',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731287/0312b4bc-178e-47b2-aaa3-846497a956fa.png',
    summary: 'Cold intellect and crackling arcane power.',
  },
  {
    name: 'Silas',
    raceClass: 'Goliath Paladin',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731281/ef42b6bb-97ea-42f3-b903-8c66fd6ae471.png',
    summary: 'Shield of the party and beacon of justice.',
  },
  {
    name: 'Parker',
    raceClass: 'Aasimar Druid',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731275/a452d8ef-5d35-43d6-9912-7f1a9b686427.png',
    summary: 'Nature’s avatar cloaked in cold leathers.',
  },
  {
    name: 'Graysen',
    raceClass: 'Tiefling Sorcerer',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748731271/ca0081fc-5ec3-4fb8-9fd2-8b4390ba19b0.png',
    summary: 'Mystical flame dances in her infernal blood.',
  }
];

const chapters = [
  {
    number: 1,
    title: 'Meeting in Bryn Shander',
    summary: 'Our five adventurers meet at the gates of Bryn Shander...',
    image: 'URL_TO_CHAPTER1_IMAGE',
    npcs: ['Sheriff Southwell', 'Hlin Trollbane'],
  },
  // Add more chapters as the adventure progresses
];

export default function IcewindDale() {
  return (
 <div className="min-h-screen bg-[#e6f0fa]">
    <div className="p-6">
      <img src={banner} alt="Icewind Dale Banner" className="rounded-2xl shadow-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">Icewind Dale: Rime of the Frostmaiden</h1>
      <p className="text-gray-700 mb-8">Status: <span className="text-blue-600 font-semibold">In Progress</span></p>

      <h2 className="text-2xl font-semibold mb-4">Party Members</h2>

        <div className="overflow-x-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
    {party.map((char, index) => (
      <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden mx-auto w-[300px]">
        <div className="aspect-[3/4] bg-white flex items-center justify-center">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold text-lg">{char.name}</h3>
          <p className="text-sm text-gray-600">{char.raceClass}</p>
          <p className="text-xs text-gray-500 mt-1">{char.summary}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>


  

      <h2 className="text-2xl font-semibold mb-4">Adventure Log</h2>
      {chapters.map((ch, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-bold mb-1">Chapter {ch.number}: {ch.title}</h3>
          <img src={ch.image} alt={ch.title} className="w-full rounded-lg mb-2" />
          <p className="text-gray-700">{ch.summary}</p>
          <p className="text-sm text-gray-500 mt-1">NPCs: {ch.npcs.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
