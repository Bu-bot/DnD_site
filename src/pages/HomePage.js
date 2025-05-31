import React from 'react';

const logo = 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748711624/98ba9c38-ddc7-40c9-8141-0fc0b6a543df.png';
const banner = 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748713338/ba2852c4-6f57-459e-aec0-039fc3f069f1.png';

const adventures = [
  {
    title: 'Dragons of Stormwreck Isle',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748713964/6575d7e5-22c1-403a-9c30-f99c32760984.png',
    summary: 'Waves crash as dragons clash.',
    link: '/adventures/stormwreck',
    status: 'Completed',
  },
  {
    title: 'Icewind Dale - Rime of the Frostmaiden',
    image: 'https://res.cloudinary.com/dvd8xmfzl/image/upload/v1748714088/bb7af382-16fb-412a-b2bc-8b847aebe1e6.png',
    summary: 'A frozen land filled with terror and mystery.',
    link: '/adventures/icewinddale',
    status: 'Ongoing',
  },
];

const HomePage = () => {
  return (
    <div className="px-4 py-6 text-center bg-gray-900 text-white min-h-screen">
      
      {/* Logo */}
      <div className="mb-6">
        <img src={logo} alt="D&D Group Logo" className="h-36 mx-auto" />
      </div>

      {/* Banner */}
      <div className="mb-10">
        <img
          src={banner}
          alt="D&D Banner"
          className="w-full max-h-[300px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Adventures Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Adventures</h2>
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {adventures.map((adv, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-col justify-between"
            >
              {/* Image + Status Tag */}
              <div className="relative w-full h-72">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover rounded-t-md"
                />
                {adv.status && (
                  <div className="absolute top-2 left-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        adv.status === 'Completed'
                          ? 'bg-green-700 text-green-100'
                          : 'bg-yellow-600 text-yellow-100'
                      }`}
                    >
                      {adv.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{adv.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{adv.summary}</p>
                <a
                  href={adv.link}
                  className="inline-block mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
