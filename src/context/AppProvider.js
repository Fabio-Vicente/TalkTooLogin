import { useEffect, useMemo, useState } from "react";
import context from ".";
import { fetchSprites } from "../services/SpritesService";

export default function AppProvider({ children }) {
  const [loginSprites, setLoginSprites] = useState([]);

  useEffect(() => {
    const populateLoginSprites = async () => {
      setLoginSprites(await fetchSprites());
    }

    populateLoginSprites();
  }, [])

  return (
    <context.Provider value={useMemo(() => ({
      loginSprites,
    }))}>
      {children}
    </context.Provider>
  )
};
