import { useState } from 'react';

function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState('');

  const addEvent = () => {
    if (input.trim()) {
      setEvents([...events, { id: Date.now(), name: input }]);
      setInput('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📅 Upcoming Events</h2>
      <div className="mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border px-2 py-1 mr-2"
          placeholder="Add new event..."
        />
        <button onClick={addEvent} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarPage;
