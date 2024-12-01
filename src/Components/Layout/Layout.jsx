import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import "./Layout.css";

import { FavoritesContextProvider } from "@/Context/FavoriteContext";

export default function Layout() {
  return (
    <FavoritesContextProvider>
      <div>
        <MainNavigation />
        <main className="Layout-main">
          <Outlet />
        </main>
      </div>
    </FavoritesContextProvider>
  );
}
