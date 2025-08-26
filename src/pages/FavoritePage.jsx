import React from "react";
import { useSelector } from "react-redux";
import FavoriteComponent from "../components/FavoriteComponent";
function FavoritePage() {
  const { allFavorites } = useSelector((state) => state.favoriteStore);

  return (
    <div className="flex flex-col gap-[50px] justify-center ">
      <h1 className="text-center text-[40px] font-semibold text-slate-700 py-[30px]">My Favorites</h1>
      <div className="flex justify-center gap-[20px] w-[90%] mx-auto">{allFavorites.length > 0 ? (
        allFavorites.map((favorite) => (
          <FavoriteComponent key={favorite.id} favorite={favorite} />
        ))
      ) : (
        <p className="text-center text-[24px] text-red-600 font-semibold">No favorites yet!</p>
      )}
      </div>
    </div>
  );
}

export default FavoritePage;
