import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdventurePage from './pages/AdventurePage';
import CalendarPage from './pages/CalendarPage';
import AdventureLogPage from './pages/AdventureLogPage';
import StormwreckDashboard from './pages/StormwreckDashboard';
import StormwreckOverview from './pages/StormwreckOverview';
import StormwreckChapters from './pages/StormwreckChapters';
import StormwreckCharacters from './pages/StormwreckCharacters';

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🧙 Welcome to Our D&D Group</h1>
      <p className="mb-2">Explore your past and current campaigns.</p>
      <nav className="space-x-4">
        <Link to="/adventures" className="text-blue-600 underline text-xl">
          View Adventures
        </Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adventures" element={<AdventurePage />} />
        <Route path="/adventures/stormwreck" element={<StormwreckDashboard />} />
        {/* These pages are kept for now, can be moved under adventures later */}
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/log" element={<AdventureLogPage />} />
        <Route path="/adventures/stormwreck/overview" element={<StormwreckOverview />} />
        <Route path="/adventures/stormwreck/chapters" element={<StormwreckChapters />} />
        <Route path="/adventures/stormwreck/characters" element={<StormwreckCharacters />} /> 
      </Routes>
    </Router>
  );
}

export default App;
