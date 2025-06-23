import React, { useState } from "react";

function Dashboard({ agendaItems }) {
  const [filter, setFilter] = useState("");

  const filtered = agendaItems.filter((item) => {
    return (
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <input
        className="border p-2 w-full max-w-md mb-4"
        type="text"
        placeholder="Search by keyword or tag..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="grid gap-4">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded shadow bg-white hover:shadow-md"
          >
            <div className="text-sm text-gray-600">{item.meetingDate}</div>
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm italic text-gray-700">
              {item.category} — {item.type}
            </div>
            <div className="mt-1 text-sm text-gray-500">
              Submitted by: {item.submitted_by || "N/A"}
            </div>
            <div className="mt-1 text-sm">
              Tags: {item.tags.join(", ") || "None"}
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium">Votes:</span>
              <ul className="list-disc ml-6 text-sm">
                <li>Yes: {item.vote_yes || ""}</li>
                <li>No: {item.vote_no || ""}</li>
                <li>Abstain: {item.vote_abstain || ""}</li>
                <li>Not Present: {item.vote_not_present || ""}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
