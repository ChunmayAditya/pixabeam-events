"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RSVPForm() {
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");
  const [status, setStatus] = useState("Yes");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("rsvps").insert([
      {
        user_id: parseInt(userId), // must be number
        event_id: parseInt(eventId), // must be number
        status,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ Error saving RSVP");
    } else {
      setMessage("✅ RSVP saved!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Event ID"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save RSVP
      </button>
      <p>{message}</p>
    </form>
  );
}
