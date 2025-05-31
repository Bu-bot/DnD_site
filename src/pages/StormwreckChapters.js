import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function StormwreckChapters() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const chapters = [
    {
      id: 1,
      title: "Chapter 1: Dragon's Rest",
      summary:
        "After their ship wrecks near Stormwreck Isle, the party arrives at Dragon's Rest and meets Elder Runara and the kobold people. Upon arrival, they assist in resolving a kobold dispute at the docks and begin earning the trust of the island’s residents.",
      images: [
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664625/f9322fc9-ac6a-47bf-a6bb-7efc7bde8401.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664658/25983366-571e-4a4d-b39a-67ad061e51e6.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664670/968f65fe-c0fa-4580-bcac-490417adfd80.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664690/90b464c6-d6e7-4e5f-b58d-b95918768301.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664700/1b4f9dfe-6f3e-46f6-90a0-6e0fe5a72db4.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664705/ffbf7e6c-ccec-4271-8531-903329a75645.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748664715/db9fb60b-13f7-4252-9006-d9f7cd974cb7.png'
      ],
      npcs: ["Elder Runara (Bronze Dragon)", "Tarak (kobold dockmaster)"],
    },
    {
      id: 2,
      title: 'Chapter 2: Sea Grove Caves',
      summary:
        "Elder Runara senses something wrong with the nearby myconid colony and sends the party to investigate Sea Grove Caves. There, they discover that the magic of Sinensa, the myconid sovereign, has been mysteriously weakened.",
      images: [
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702897/c63f0f0b-3915-4d66-9724-cfdc5975d0ce.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702904/11f7dec0-7736-4ebd-ace0-3c0b0831c79f.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702907/f9d19525-d752-4c51-a668-3bd31d973ab3.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702907/f9d19525-d752-4c51-a668-3bd31d973ab3.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702917/798590a4-4653-40ce-8416-e0bd78ead38e.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702923/e0e96f6b-bb33-47fd-bfb2-de232d893d59.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702928/2ccf84ce-feaa-4452-94f8-c2746dee6099.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748702947/2e550317-b666-4cba-935a-ee441f693d59.png'
      ],
      npcs: ["Sinensa (Myconid Sovereign)"],
    },
    {
      id: 3,
      title: 'Chapter 3: The Shipwreck',
      summary:
        "The party investigates a rise in shipwrecks and undead. They uncover that a cursed amulet has been transforming dead sailors into zombies, and that a group of harpies has been luring ships to crash along the coast.",
      images: [
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703149/21f2d06f-0222-4f57-b686-c2af11a5f5c8.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703153/48ab5646-ae10-481b-a5ef-cc6cf16838b5.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703158/e3d2b015-a281-4b22-a3cb-f1abeb617b6f.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703169/bc7043fc-5c80-4393-a8a4-1403196e7fa6.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703175/0fa47651-d94c-4787-8e24-c0967e613601.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703183/85efd9f8-7083-48e5-91fc-08e52697debd.png'
      ],
      npcs: ["Undead Sailors", "Harpies", "Cursed Amulet (sentient?)"],
    },
    {
      id: 4,
      title: 'Chapter 4: The Clifftop Observatory',
      summary:
        "In the final quest, the party travels to the clifftop observatory to confront a blue wyrmling who has captured one of Elder Runara's bronze wyrmling students. The confrontation marks the climax of their Stormwreck adventure.",
      images: [
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703444/eb9aca0a-a405-4412-9ad3-90fdfd3ecd4d.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703449/e5e550a3-fa85-46d3-95b5-587c0ba9710b.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703452/401c4dbb-8762-434b-bcf3-63a2ad4ddec2.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703456/532fc8f0-0dd1-432b-b103-1df670dfe3ff.png',
        'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748703459/ef2e6eba-fe87-4fce-afc8-f5cf68341aeb.png'

      ],
      npcs: ["Blue Wyrmling", "Bronze Wyrmling (student)"],
    },
  ];

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📖 Stormwreck Isle Chapters</h2>
      {chapters.map((ch) => (
        <div key={ch.id} className="p-4 rounded shadow border bg-white">
          <h3 className="text-xl font-semibold mb-2">{ch.title}</h3>
          <p className="mb-4">{ch.summary}</p>

          {ch.npcs.length > 0 && (
            <div className="mt-2">
              <h4 className="font-semibold mb-1">🧍 Key NPCs:</h4>
              <ul className="list-disc pl-5">
                {ch.npcs.map((npc, i) => (
                  <li key={i}>{npc}</li>
                ))}
              </ul>
            </div>
          )}  


          {ch.images && ch.images.length > 0 && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 mb-4">
              {ch.images.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`${ch.title} image ${i + 1}`}
                  className="rounded w-full h-auto max-h-36 sm:max-h-48 lg:max-h-64 object-cover cursor-pointer"
                  onClick={() => openLightbox(ch.images, i)}
                />
              ))}
            </div>
          )}

          {ch.npcs.length > 0 && (
            <div className="mt-2">
              <h4 className="font-semibold mb-1">🧍 Key NPCs:</h4>
              <ul className="list-disc pl-5">
                {ch.npcs.map((npc, i) => (
                  <li key={i}>{npc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages.map((src) => ({ src }))}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}
    </div>
  );
}

export default StormwreckChapters;
