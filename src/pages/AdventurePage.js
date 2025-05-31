import { Link } from 'react-router-dom';

function AdventuresPage() {
  const adventures = [
    { id: 'stormwreck', name: 'Dragons of Stormwreck Isle' },
    { id: 'icewind', name: 'Icewind Dale' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🧭 Adventures</h1>
      <ul className="space-y-4">
        {adventures.map((adv) => (
          <li key={adv.id} className="border p-4 rounded shadow bg-white">
            <Link to={`/adventures/${adv.id}`} className="text-xl text-blue-600 underline">
              {adv.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdventuresPage;