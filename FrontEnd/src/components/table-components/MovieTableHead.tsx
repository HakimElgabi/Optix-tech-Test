import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Props {
    sortOrder: string;
    setSortOrder: () => void;
}

export const MovieTableHead = ({ sortOrder, setSortOrder }: Props) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell
                    sx={{ fontWeight: "bold" }}
                    align="right"
                    onClick={() => setSortOrder()}
                    style={{ cursor: "pointer" }}
                >
                    Reviews
                    {sortOrder === "asc" ? " ↓" : " ↑"}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Film Company
                </TableCell>
            </TableRow>
        </TableHead>
    );
}
