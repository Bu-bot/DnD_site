import React from 'react';

const banner = 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748714088/bb...'; // Icewind Dale banner
const party = [
  {
    name: 'Grog G.',
    raceClass: 'Orc Barbarian',
    image: 'URL_TO_GROG_IMAGE',
    summary: 'A fierce warrior with a greataxe and a soldier’s past.',
  },
  {
    name: 'Issac',
    raceClass: 'Blue Dragonborn Wizard',
    image: 'URL_TO_ISSAC_IMAGE',
    summary: 'Cold intellect and crackling arcane power.',
  },
  {
    name: 'Silas',
    raceClass: 'Goliath Paladin',
    image: 'URL_TO_SILAS_IMAGE',
    summary: 'Shield of the party and beacon of justice.',
  },
  {
    name: 'Parker',
    raceClass: 'Aasimar Druid',
    image: 'URL_TO_PARKER_IMAGE',
    summary: 'Nature’s avatar cloaked in cold leathers.',
  },
  {
    name: 'Graysen',
    raceClass: 'Tiefling Sorcerer',
    image: 'URL_TO_GRAYSEN_IMAGE',
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
    <div className="p-6">
      <img src={banner} alt="Icewind Dale Banner" className="rounded-2xl shadow-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">Icewind Dale: Rime of the Frostmaiden</h1>
      <p className="text-gray-700 mb-8">Status: <span className="text-blue-600 font-semibold">In Progress</span></p>

      <h2 className="text-2xl font-semibold mb-4">Party Members</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {party.map((char, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-xl text-center">
            <img src={char.image} alt={char.name} className="mx-auto h-32 object-contain rounded" />
            <h3 className="mt-2 font-bold">{char.name}</h3>
            <p className="text-sm text-gray-600">{char.raceClass}</p>
            <p className="mt-1 text-gray-500 text-xs">{char.summary}</p>
          </div>
        ))}
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
