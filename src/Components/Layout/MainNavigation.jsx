import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { useContext } from "react";
import FavoritesContext from "../../Context/FavoriteContext";

export default function MainNavigation() {
  const favoritesCTX = useContext(FavoritesContext);

  return (
    <>
      <header className="MainNavigation">
        <div className="MainNavigation-logo">React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new">New Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className="MainNavigation-badge">
                  {favoritesCTX.totalfavorites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
