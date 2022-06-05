import { useState, useEffect } from 'react';
import Card from './components/card';
import { Container, makeStyles } from '@material-ui/core';
import './App.css';
import useParkingSpots from './hooks/useParkingSpots';

function App() {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const { parkingSpots } = useParkingSpots();
  const [pfloor , setPfloor] = useState('');

  useEffect(() => {
    if(!parkingSpots) return;
    console.log(parkingSpots.parking_spots);
  }, [parkingSpots, pfloor]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <Container className={classes.conatiner}>
      <h1>Parking overview</h1>
        <div className={classes.selectContainer}>
        <h5 className={classes.h5}>Sort</h5>
          <select className={classes.select} value={pfloor} onChange={(e) => setPfloor(e.currentTarget.value)  }>
            <option value="">Floor</option>
            {parkingSpots && parkingSpots.map((floor, index) => (
              <option key={index} value={floor.floor}>
                {floor.floor}
              </option>
            ))}
          </select>
          <select className={classes.select} value={age} onChange={handleChange}>
            <option value="">Type</option>
            <option value="1">All</option>
            <option value="1">Charging</option>
            <option value="2">Disabled</option>
          </select>
          <select className={classes.select} value={age} onChange={handleChange}>
            <option value="">Vechile</option>
            <option value="1">Car</option>
            <option value="2">MC</option>
          </select>
        </div>
      <div className={classes.availableInfo}>
        <div className={classes.flexContainer}>
          <div className={`${classes.miniCard} ${classes.colorGreen}`}></div>
          <h5 className={classes.h5}>Available</h5>
        </div>
        <div className={classes.flexContainer}>
          <div className={`${classes.miniCard} ${classes.colorRed}`}></div>
          <h5 className={classes.h5}>Occupied</h5>
        </div>
      </div>
      <div className={classes.cardContainer}>
              {parkingSpots && parkingSpots.map((item, index) => (
                item.parking_spots.map((spot, index) => (

                <Card 
                  key={index} 
                  floor={item.floor}
                  number={spot.number} 
                  type={spot.type} 
                  isAvalable={spot.is_available} 
                  charging={spot.is_charging_station} 
                  disabled={spot.is_disabled_parking}
                />
                ))
              ))}
                

      {/* // {data
  //   .filter(({ birthdate, first_name, last_name }) =>
  //     selectMonthFilter || nameFilter
  //       ? getMonthValue(birthdate) === selectMonthFilter ||
  //         first_name
  //           .concat(last_name)
  //           .toLowerCase()
  //           .includes(nameFilter.toLowerCase())
  //       : true
  //   )
  //   .map((el) => (
  //     <li key={el.id}>{JSON.stringify(el)}</li>
  //   ))} */}

      </div>

    </Container>
  );
}

// #ffa1a1 Röd

const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  selectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
      position: 'sticky',
      top: 0,
      background: 'white',
    },
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  h5: {
    padding: '0 1rem',
    margin: '0',
    fontWeight: 100,
    fontSize: '1.4rem',
  },
  select: {
    margin: theme.spacing(1),
    padding: '1rem',
    // width: '9rem',
    border: 'none',
    fontSize: '1.4rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '0rem',

    },

  },

  availableInfo: {
    display: 'flex',
    margin: '1rem',
    alignItems: 'center',
    marginBottom: '2rem',

  },

  flexContainer: {
    display: 'flex',
    alignItems: 'center',

  },
  miniCard: {
    width: '2rem',
    height: '1rem',
    background: '#ffa1a1',
    borderRadius: '5px',
  },
  colorRed: {
    background: '#ffa1a1',
  },
  colorGreen: {
    background: '#bedebf',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    justifyItems: 'center',
    gap: '1rem',
    height: '100%',
    width: '100%',
    margin: '0 0 2rem 0',
  }
}));

export default App;
