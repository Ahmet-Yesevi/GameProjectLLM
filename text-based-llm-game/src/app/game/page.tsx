"use client";
import { useGame } from "@/context/GameContext";
import { useState } from "react";

export default function GamePage() {
  const { playerName, setPlayerName } = useGame();
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Text-Based Adventure</h1>
      <p>Welcome, {playerName || "Traveler"}!</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setPlayerName(input)}>Start Adventure</button>
    </div>
  );
}
