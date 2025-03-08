import { useState } from "react";

export function useGameState() {
  const [state, setState] = useState<{ score: number }>({ score: 0 });

  return { state, setState };
}
