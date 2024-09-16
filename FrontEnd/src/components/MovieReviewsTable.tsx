import { useState, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { MovieTableHead } from "./table-components/MovieTableHead";
import { MovieTableRow } from "./table-components/MovieTableRow";
import Paper from "@mui/material/Paper";
import { Movie, MovieCompany } from "../lib/types";
import { getAverage } from "../lib/common-functions";

export const MovieReviewsTable = memo(function MovieReviewsTable({
  moviesData,
  selectedMovie,
  setSelectedMovie,
  movieCompanyData,
}: {
  moviesData: Movie[];
  selectedMovie: Movie | undefined;
  setSelectedMovie: (value: Movie) => void;
  movieCompanyData: MovieCompany[];
}) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSetSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const sortedMovies = [...moviesData].sort((a, b) => {
    const meanAverageA = getAverage(a.reviews);
    const meanAverageB = getAverage(b.reviews);
    if (sortOrder === "asc") {
      return meanAverageA - meanAverageB;
    } else {
      return meanAverageB - meanAverageA;
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: {
            sm: 650,
          },
        }}
        aria-label="simple table"
      >
        <MovieTableHead sortOrder={sortOrder} setSortOrder={handleSetSortOrder} />
        <TableBody>
          {sortedMovies.map((movie) => (
            <MovieTableRow
              key={movie.id}
              movie={movie}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              movieCompanyData={movieCompanyData} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
