import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/parsed_agenda_combined.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading agenda data:", err));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">AFUHSD Board Agenda Dashboard</h1>
      <Dashboard agendaItems={data} />
    </main>
  );
}

export default App;
