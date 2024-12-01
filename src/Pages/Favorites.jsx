import { useContext } from "react";
import FavoritesContext from "@/Context/FavoriteContext";
import MeetupList from "@/Components/Meetups/MeetupList";

export default function Favorites() {
  const favoritesCTX = useContext(FavoritesContext);

  if (favoritesCTX.favorites.length === 0)
    return (
      <div style={{ textAlign: "center" }}>
        <h2>You have no Favorites</h2>
        <p>
          <b>Try adding one</b>
        </p>
      </div>
    );

  return (
    <div>
      <MeetupList DUMMY_DATA={favoritesCTX.favorites} />
    </div>
  );
}
