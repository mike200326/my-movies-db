
'use client';
import React, { useState, useEffect } from 'react';

interface FavoriteButtonProps {
  movieId: number;
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // Cargar favoritos desde sessionStorage
    const saved = sessionStorage.getItem('favorites');
    const favs = saved ? JSON.parse(saved) as number[] : [];
    setIsFav(favs.includes(movieId));
  }, [movieId]);

  const toggleFav = () => {
    const saved = sessionStorage.getItem('favorites');
    const favs = saved ? JSON.parse(saved) as number[] : [];
    const updated = favs.includes(movieId)
      ? favs.filter(id => id !== movieId)
      : [...favs, movieId];
    sessionStorage.setItem('favorites', JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <button
      onClick={toggleFav}
      className={
        `mt-3 px-4 py-2 rounded-lg transition-colors duration-200 ` +
        (isFav
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800')
      }
    >
      {isFav ? '❤️ Favorito' : '🤍 Agregar a favoritos'}
    </button>
  );
}
