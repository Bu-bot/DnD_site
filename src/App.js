import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import AdventureLogPage from './pages/AdventureLogPage';

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🧙 Welcome to Our D&D Group</h1>
      <p className="mb-2">Track your adventures, vote on quests, and schedule games.</p>
      <nav className="space-x-4">
        <Link to="/calendar" className="text-blue-600 underline">Calendar</Link>
        <Link to="/log" className="text-blue-600 underline">Adventure Log</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/log" element={<AdventureLogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
