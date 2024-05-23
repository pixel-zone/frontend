import {
  TextField,
  Link,
  Button as Btn,
  Table,
  TableBody,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { styled } from '@mui/system';

export const Leaderboard: React.FC = () => {
  const Title = styled('h1')`
    color: #fdfe02;
    text-align: center;
  `;

  const LeaderboardTable = styled(Table)`
    background-color: #292909;
  `;

  const LeaderboardTableRow = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #292909;
    }
  `;

  const LeaderboardTableCell = styled(TableCell)`
    color: #ffffff;
  `;

  return (
    <Grid container>
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '3rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title style={{ margin: '1rem 0' }}>Leaderboard </Title>
        </div>{' '}
        <TableContainer
          style={{
            maxWidth: '600px',
            border: '2px solid #fdfe02',
            borderRadius: '0.5rem',
          }}
        >
          <LeaderboardTable
            style={{
              background: '#292909',
            }}
          >
            <TableHead>
              <TableRow>
                <LeaderboardTableCell style={{ fontWeight: 'Bold' }}>
                  Posição
                </LeaderboardTableCell>
                <LeaderboardTableCell style={{ fontWeight: 'Bold' }}>
                  Username
                </LeaderboardTableCell>
                <LeaderboardTableCell style={{ fontWeight: 'Bold' }}>
                  Pixel Points
                </LeaderboardTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <LeaderboardTableRow>
                <LeaderboardTableCell>1</LeaderboardTableCell>
                <LeaderboardTableCell>joaozinho_gamer</LeaderboardTableCell>
                <LeaderboardTableCell>2000</LeaderboardTableCell>
              </LeaderboardTableRow>
              <LeaderboardTableRow>
                <LeaderboardTableCell>2</LeaderboardTableCell>
                <LeaderboardTableCell>pedrinho_mata_porco</LeaderboardTableCell>
                <LeaderboardTableCell>1750</LeaderboardTableCell>
              </LeaderboardTableRow>
              <LeaderboardTableRow>
                <LeaderboardTableCell>4</LeaderboardTableCell>
                <LeaderboardTableCell>luan_gameplays</LeaderboardTableCell>
                <LeaderboardTableCell>1500</LeaderboardTableCell>
              </LeaderboardTableRow>
              <LeaderboardTableRow>
                <LeaderboardTableCell>4</LeaderboardTableCell>
                <LeaderboardTableCell>shaolin123</LeaderboardTableCell>
                <LeaderboardTableCell>1100</LeaderboardTableCell>
              </LeaderboardTableRow>
            </TableBody>
          </LeaderboardTable>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
