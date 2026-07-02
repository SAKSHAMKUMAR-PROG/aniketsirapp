"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaPlay, FaSearch, FaStar } from "react-icons/fa";

const movies = [
  {
    title: "DANGAL",
    genre: "Action",
    year: "2018",
    rating: "3.2",
    time: "Live now",
    isLive: true,
    image: "/DANGAL.jpg",
  },
  {
    title: "BANGAL IN THE JUNGLE",
    genre: "Adventure",
    year: "2013",
    rating: "4.0",
    time: "2:30 PM",
    isLive: false,
    image: "/BANGAL IN THE JUNGLE.jpg",
  },
  {
    title: "KIS KIS KO PYAR KARU",
    genre: "LOVE",
    year: "2021",
    rating: "4.5",
    time: "Live now",
    isLive: true,
    image: "/KIS KIS KO PYAR KARU.avif",
  },
  {
    title: "CID",
    genre: "Crime",
    year: "2008",
    rating: "4.7",
    time: "9:00 PM",
    isLive: false,
    image: "/CID.jpg",
  },
  {
    title: "MISSON MANGAL",
    genre: "Sci-Fi",
    year: "2024",
    rating: "4.9",
    time: "Live now",
    isLive: true,
    image: "/MISSION MANGAL.jpg",
  },
  {
    title: "DHURANDER",
    genre: "Thriller",
    year: "2025",
    rating: "5.0",
    time: "8:00 PM",
    isLive: false,
    image: "/DHURANDHAR.jpg",
  },
  {
    title: "KAPIL SHARMA",
    genre: "Drama",
    year: "2004",
    rating: "3.8",
    time: "7:45 PM",
    isLive: false,
    image: "/KAPIL SHARMA.webp",
  },
  {
    title: "MS DHONI",
    genre: "Sports",
    year: "2022",
    rating: "4.7",
    time: "Live now",
    isLive: true,
    image: "/MS DHONI.jpg",
  },
  {
    title: "KGF",
    genre: "Mystery",
    year: "2023",
    rating: "4.4",
    time: "10:30 AM",
    isLive: false,
    image: "/KGF.jpg",
  },
];

function Movies() {
  const [search, setSearch] = useState("");

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return movies;
    }

    return movies.filter((movie) =>
      `${movie.title} ${movie.genre} ${movie.year}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  const liveMovies = movies.filter((movie) => movie.isLive).length;

  return (
    <main className="min-h-screen w-full bg-gray-50 p-6 text-black md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">
              {liveMovies} live movies
            </p>
            <h1 className="mt-2 text-4xl font-bold">Movies</h1>
            <p className="mt-2 text-gray-600">
              Search action, drama, sports, fantasy and more.
            </p>
          </div>

          <label className="relative block w-full md:w-96">
            <span className="sr-only">Search movies</span>
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movie..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-black shadow-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <article
              key={movie.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 w-full bg-gray-200">
                <Image
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                {movie.isLive && (
                  <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white shadow">
                    Live
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{movie.title}</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {movie.genre} | {movie.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm font-bold text-yellow-700">
                    <FaStar className="text-xs" />
                    {movie.rating}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    {movie.time}
                  </span>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    <FaPlay className="text-xs" />
                    Watch
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
            No movies found for "{search}".
          </div>
        )}
      </div>
    </main>
  );
}

export default Movies;
