"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) console.error(error);
      else setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> – {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
