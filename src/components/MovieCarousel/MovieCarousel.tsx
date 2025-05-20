// components/MovieCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Movie } from '@/lib/types';
import MovieCard from '@/components/MovieCard/MovieCard';

interface Props {
  title: string;
  movies: Movie[];
}

export default function MovieCarousel({ title, movies }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
