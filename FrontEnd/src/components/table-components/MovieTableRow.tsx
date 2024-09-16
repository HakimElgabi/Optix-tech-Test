import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Movie, MovieCompany } from "../../lib/types";
import { getAverage } from "../../lib/common-functions";

interface Props {
    movie: Movie;
    selectedMovie: Movie | undefined;
    setSelectedMovie: (movie: Movie) => void;
    movieCompanyData: MovieCompany[];
}

export const MovieTableRow = ({ 
    movie, 
    selectedMovie,
    setSelectedMovie,
    movieCompanyData
 }: Props) => {

    return (
        <TableRow
            key={movie.id}
            sx={{
                "&:last-child td, &:last-child th": { border: 0 },
            }}
            selected={selectedMovie === movie}
            onClick={() => {
                setSelectedMovie(movie);
            }}
        >
            <TableCell component="th" scope="row">
                {movie.title}
            </TableCell>
            <TableCell align="right">
                {getAverage(movie.reviews).toFixed(1)}
            </TableCell>
            <TableCell align="right">
                {movieCompanyData.find((f: MovieCompany) => f.id === movie.filmCompanyId)?.name}
            </TableCell>
        </TableRow>
    );
}
