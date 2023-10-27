import { useCallback, useEffect, useMemo, useState } from "react";
import context from ".";
import { fetchSprites } from "../services/SpritesService";

export default function AppProvider({ children }) {
  const [loginSprites, setLoginSprites] = useState([]);
  const [loggedUser, setLoggedUser] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const populateLoginSprites = async () => {
      setLoginSprites(await fetchSprites());
    }

    populateLoginSprites();
  }, []);

  const clearLoggedUser = useCallback(
    () => setLoggedUser(''),
    [setLoggedUser],
  );

  const clearAuthError = useCallback(
    () => setAuthError(''),
    [setAuthError],
  );

  return (
    <context.Provider value={useMemo(() => ({
      loginSprites,
      loggedUser,
      authError,
      setLoggedUser,
      setAuthError,
      clearLoggedUser,
      clearAuthError,
    }), [
      loginSprites,
      loggedUser,
      authError,
      setLoggedUser,
      setAuthError,
    ])}>
      {children}
    </context.Provider>
  )
};
