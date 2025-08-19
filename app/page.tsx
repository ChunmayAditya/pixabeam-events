"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎉 PixaBeam Events</h1>
      <p className="mb-4">Welcome! Choose what you want to do:</p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/events" className="text-blue-600 underline">
            📅 View Events
          </Link>
        </li>
        <li>
          <Link href="/rsvp" className="text-blue-600 underline">
            ✍️ RSVP to an Event
          </Link>
        </li>
      </ul>
    </main>
  );
}
