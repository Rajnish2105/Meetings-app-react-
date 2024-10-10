import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavoriteHandler: (favoritesMeetup) => {},
  removeFavoriteHandler: (idx) => {},
  itemIsFavorite: (idx) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritesMeetup) {
    setUserFavorites((prev) => [...prev, favoritesMeetup]);
  }

  function removeFavoriteHandler(idx) {
    setUserFavorites((prev) => prev.filter((data) => data.id !== idx));
  }

  function itemIsFavorite(idx) {
    return userFavorites.some((data) => data.id === idx);
  }

  const context = {
    favorites: userFavorites,
    totalfavorites: userFavorites.length,
    itemIsFavorite: itemIsFavorite,
    addFavoriteHandler: addFavoriteHandler,
    removeFavoriteHandler: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
