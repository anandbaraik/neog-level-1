const moviesWatchlist = [
  { id: 1, title: "The Shawshank Redemption", director: "Frank Darabont" },
  { id: 2, title: "3 Idiots", director: "Rajkumar Hirani" },
  { id: 3, title: "Lagaan", director: "Ashutosh Gowariker" },
  { id: 4, title: "Wolf of Wall Street", director: "Martin Scorsese" },
  { id: 5, title: "Dangal", director: "Nitesh Tiwari" },
  { id: 6, title: "The Pursuit of Happyness", director: "Gabriele Muccino" }
];

export default function myMovieWatchList() {
  return (
    <div>
      <h1>1) My Movies Watchlist</h1>
      <ul>
        {moviesWatchlist.map((item) => (
          <li key={item.id}>
            Title: {item.title}, Director: {item.director}
          </li>
        ))}
      </ul>
    </div>
  );
}
