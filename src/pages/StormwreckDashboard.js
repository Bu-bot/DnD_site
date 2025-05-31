import { Link } from 'react-router-dom';

function StormwreckDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">🐉 Dragons of Stormwreck Isle</h1>
      <p>Welcome to the completed campaign archive for Stormwreck Isle.</p>

      <div className="space-x-4 mt-4">
        <Link to="/adventures/stormwreck/overview" className="text-blue-600 underline">🧭 Overview</Link>
        <Link to="/adventures/stormwreck/chapters" className="text-blue-600 underline">📖 Chapters</Link>
        <Link to="/adventures/stormwreck/characters" className="text-blue-600 underline">🧙 Characters</Link>
      </div>
    </div>
  );
}

export default StormwreckDashboard;
