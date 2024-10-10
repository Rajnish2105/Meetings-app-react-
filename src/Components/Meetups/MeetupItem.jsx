import "./MeetupItem.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavoriteContext from "../../Context/FavoriteContext";

export default function MeetupItem({ title, address, description, id, image }) {
  const favoritesCTX = useContext(FavoriteContext);

  const itemIsFavorite = favoritesCTX.itemIsFavorite(id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoritesCTX.removeFavoriteHandler(id);
    } else {
      favoritesCTX.addFavoriteHandler({
        id,
        title,
        address,
        description,
        image,
      });
    }
  }

  return (
    <li className="MeetupItem">
      <Card>
        <div className="MeetupItem-image">
          <img src={image} alt={title} />
        </div>
        <div className="MeetupItem-content">
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className="MeetupItem-actions">
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
