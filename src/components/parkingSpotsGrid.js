import { useEffect, useState } from "react";
import useParkingSpots from "../hooks/useParkingSpots";
import Card from "./card";
import { makeStyles } from "@material-ui/core";

function ParkingSpotsGrid() {
    const classes = useStyles();
    const { parkingSpots } = useParkingSpots();
    const [pfloor , setPfloor] = useState('');
    const [ptype , setPtype] = useState('');
    const [vechile, setVechile] = useState('');

    useEffect(() => {
        if(!parkingSpots) return;
    }, [parkingSpots]);

    return (
    <>
        <div className={classes.selectContainer}>
          <h5 className={classes.h5}>Sort</h5>
          <select
              className={classes.select}
              value={pfloor}
              onChange={(e) => setPfloor(e.currentTarget.value)}
          >
              <option value="">Floor</option>
              <option value="">All</option>
              {parkingSpots &&
              parkingSpots.map((floor, index) => (
                  <option key={index} value={floor.floor}>
                  {floor.floor}
                  </option>
              ))}
          </select>
          <select
              className={classes.select}
              value={vechile}
              onChange={(e) => setVechile(e.currentTarget.value)}
          >
              <option value="">Vechile</option>
              <option value="">All</option>
              <option value="car">Car</option>
              <option value="mc">MC</option>
          </select>
          <select
              className={classes.select}
              value={ptype}
              onChange={(e) => setPtype(e.currentTarget.value)}
          >
              <option value="">Type</option>
              <option value="">All</option>
              <option value="charging">Charging</option>
              <option value="disabled">Disabled</option>
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
          {parkingSpots &&
              parkingSpots
              ?.filter((floor) =>
                  pfloor ? floor.floor === Number(pfloor) : true
              )
              .map((item) =>
                  item.parking_spots
                  .filter((spot) =>
                      vechile && ptype
                      ? (spot.type === vechile &&
                          spot.is_charging_station &&
                          ptype === "charging") ||
                          (spot.type === vechile &&
                          spot.is_disabled_parking &&
                          ptype === "disabled")
                      : vechile || ptype
                      ? spot.type === vechile ||
                          (spot.is_charging_station && ptype === "charging") ||
                          (spot.is_disabled_parking && ptype === "disabled")
                      : true
                  )
                  .map((spot, index) => (
                      <Card
                          key={index}
                          floor={item.floor}
                          number={spot.number}
                          type={spot.type}
                          isAvalable={spot.is_available}
                          charging={spot.is_charging_station}
                          disabled={spot.is_disabled_parking}
                          price={spot.price}
                      />
                  ))
              )}
        </div>
    </>
    );
}

const useStyles = makeStyles((theme) => ({
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
        padding: '2rem 0',
        zIndex: 1,
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
      border: 'none',
      fontSize: '1.4rem',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: '0rem',
      },
    },
    checkboxes: {
      display: 'flex',
      flexDirection: 'column',
    },
  
    availableInfo: {
      display: 'flex',
      margin: '1rem',
      alignItems: 'center',
      marginBottom: '2rem',
      [theme.breakpoints.down('xs')]: {
        margin: '2rem 0',
      },
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

export default ParkingSpotsGrid;
