import { createContext, useContext, useState } from 'react';

const GameContext = createContext(null);
const initialData = { name: '', age: '', avatar: '', difficulty: 'normal', sound: true, newsletter: false };

export function GameProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [completedStep, setCompletedStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  function updateData(values) {
    setData(current => ({ ...current, ...values }));
    setConfirmed(false);
  }

  function reset() {
    setData(initialData);
    setCompletedStep(0);
    setConfirmed(false);
  }

  return <GameContext.Provider value={{ data, updateData, completedStep, setCompletedStep, confirmed, setConfirmed, reset }}>{children}</GameContext.Provider>;
}

export function useGame() {
  return useContext(GameContext);
}
