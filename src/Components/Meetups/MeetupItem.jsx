import "./MeetupItem.css";
import Card from "@/Components/UI/Card";
import { useContext } from "react";
import FavoriteContext from "@/Context/FavoriteContext";
import { useNavigate } from "react-router-dom";

export default function MeetupItem({ title, address, description, id, image }) {
  const favoritesCTX = useContext(FavoriteContext);
  const navigate = useNavigate();
  const itemIsFavorite = favoritesCTX.itemIsFavorite(id);

  const handleNavigate = () => {
    navigate(`/MeetupDetails/${id}`);
  };

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
          <p>
            {description.length > 12
              ? description.substring(0, 20) + "..."
              : description}
          </p>
        </div>
        <div className="MeetupItem-actions">
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
          <button onClick={handleNavigate}>Details</button>
        </div>
      </Card>
    </li>
  );
}
