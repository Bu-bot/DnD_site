import { useState } from 'react';

function AdventureLogPage() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

  const addEntry = () => {
    if (text.trim()) {
      setEntries([{ id: Date.now(), content: text }, ...entries]);
      setText('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📖 Adventure Log</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 mb-2"
        rows="4"
        placeholder="Write about your latest session..."
      />
      <button
        onClick={addEntry}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Post Entry
      </button>
      <div className="mt-4 space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="border p-3 bg-gray-50 rounded shadow"
          >
            {entry.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdventureLogPage;
