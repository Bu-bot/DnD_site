import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdventurePage from './pages/AdventurePage';
import CalendarPage from './pages/CalendarPage';
import AdventureLogPage from './pages/AdventureLogPage';
import StormwreckDashboard from './pages/StormwreckDashboard';
import StormwreckOverview from './pages/StormwreckOverview';
import StormwreckChapters from './pages/StormwreckChapters';
import StormwreckCharacters from './pages/StormwreckCharacters';
import HomePage from './pages/HomePage';
import IcewindDale from './pages/adventures/IcewindDale';


console.log("HomePage is:", HomePage);



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
        <Route path="/adventures/icewinddale" element={<IcewindDale />} />
      </Routes>
    </Router>
  );
}

export default App;
