import Card from './components/card';
import { Container, Grid, makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './App.css';

function App() {
  const classes = useStyles();

  const handleChange = () => {
    console.log('changed');
  };
  return (
    <Container className={classes.conatiner}>
      <h1>Parking</h1>
      <div className={classes.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  }
}));

export default App;
