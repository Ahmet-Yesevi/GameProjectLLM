"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface GameState {
  playerName: string;
  setPlayerName: (name: string) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [playerName, setPlayerName] = useState("");

  return (
    <GameContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
