import { createContext } from "react";

const FavortiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
    
  return <FavoriteContextProvider>{children}</FavoriteContextProvider>;
}
