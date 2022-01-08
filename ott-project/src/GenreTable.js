import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Genre, Award, Global, Popularity, Score, Total) {
  return { Genre, Award, Global, Popularity, Score, Total };
}

export default function GenreTable({genreTableData}) {

    // 더미 데이터
    // const dummyData = [
    //     {
    //       "Drama": {
    //         "award": "2.7250",
    //         "global": "1.2125",
    //         "popularity": "1.7625",
    //         "score": "3.51687500",
    //         "total_score": "2.30421875"
    //       }
    //     },
    //     {
    //       "ets": {
    //         "award": "1.7600",
    //         "global": "1.7200",
    //         "popularity": "1.4000",
    //         "score": "3.50400000",
    //         "total_score": "2.09600000"
    //       }
    //     },
    //     {
    //       "Comedy": {
    //         "award": "2.0870",
    //         "global": "1.1522",
    //         "popularity": "1.6739",
    //         "score": "3.46847826",
    //         "total_score": "2.09538043"
    //       }
    //     },
    //     {
    //       "Action": {
    //         "award": "2.5761",
    //         "global": "1.5543",
    //         "popularity": "2.1739",
    //         "score": "3.43913043",
    //         "total_score": "2.43586957"
    //       }
    //     },
    //     {
    //       "Crime": {
    //         "award": "2.5625",
    //         "global": "1.4375",
    //         "popularity": "2.3750",
    //         "score": "3.47187500",
    //         "total_score": "2.46171875"
    //       }
    //     }
    //   ]
    
    const genreTable = 
        genreTableData.map((item) => {
          if (item?.Crime) {
            return (
              createData(
                "Crime", 
                item.Crime.score, 
                item.Crime.award, 
                item.Crime.global, 
                item.Crime.popularity, 
                item.Crime.total_score
              )
            )
          }
          else if (item?.Action) {
            return (
              createData(
                "Action", 
                item.Action.score, 
                item.Action.award, 
                item.Action.global, 
                item.Action.popularity, 
                item.Action.total_score
              )
            )
          }
          else if (item?.Drama) {
            return (
              createData(
                "Drama", 
                item.Drama.score, 
                item.Drama.award, 
                item.Drama.global, 
                item.Drama.popularity, 
                item.Drama.total_score
              )
            )
          }
          else if (item?.Comedy) {
            return (
              createData(
                "Comedy", 
                item.Comedy.score, 
                item.Comedy.award, 
                item.Comedy.global, 
                item.Comedy.popularity, 
                item.Comedy.total_score
              )
            )
          }
          else if (item?.Fantasy) {
            return (
              createData(
                "Fantasy", 
                item.Fantasy.score, 
                item.Fantasy.award, 
                item.Fantasy.global, 
                item.Fantasy.popularity, 
                item.Fantasy.total_score
              )
            )
          }
          else if (item?.ets) {
            return (
              createData(
                "etc", 
                item.ets.score, 
                item.ets.award, 
                item.ets.global, 
                item.ets.popularity, 
                item.ets.total_score
              )
            )
          }
        })

  return (
    <GenreTableDiv>
      <TableContainer component={Paper} sx={{ height: 300 }}>
        <Table sx={{ minWidth: 600, rowHeight: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>장르별 자체 평가 점수</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Award</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Global</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Popularity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">Score</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }} align="center">Total</TableCell>
            </TableRow>
          </TableHead >
          <TableBody>
            {genreTable.map((row) => (
              <TableRow
                key={row.Genre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Genre}
                </TableCell>
                <TableCell align="center">{Number(row.Award).toFixed(1)}</TableCell>
                <TableCell align="center">{Number(row.Global).toFixed(1)}</TableCell>
                <TableCell align="center">{Number(row.Popularity).toFixed(1)}</TableCell>
                <TableCell align="center">{Number(row.Score).toFixed(1)}</TableCell>
                <TableCell align="center">{Number(row.Total).toFixed(1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenreTableDiv>
  );
}

const GenreTableDiv = styled.div`
  width: 52vw;

  padding: 1.4vh 0.7vw;
  border-radius: 1%;
  margin: 2.7vh 0;

  background-color: #363636;
`;