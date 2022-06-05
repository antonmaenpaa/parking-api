import { Container, makeStyles } from '@material-ui/core';
import ParkingSpotsGrid from './components/parkingSpotsGrid';

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.conatiner}>
      <h1>Parking overview</h1>
      <ParkingSpotsGrid />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'relative',
  }
}));

export default App;
