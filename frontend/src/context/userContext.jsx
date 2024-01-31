import React, { createContext, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hook/useLocalStorage";

// Étape 1 : créer un context "React" basique
const userContext = createContext();

// Étape 2 : créer le provider de mon context
export function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", "");

  const login = (userData) => {
    setUser(userData.user);
    setToken(userData.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    console.info("les infos du user dans le LS sont :", user); // ------------------  TO REMOVE !!
    console.info("le token est :", token); // ------------------  TO REMOVE !!
  }, [user]);

  const contextValue = useMemo(() => {
    return { user, setUser, login, logout, token, setToken };
  }, [user, token]);

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}

// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
export const useUserContext = () => useContext(userContext);

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
