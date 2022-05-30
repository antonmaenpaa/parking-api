import {  makeStyles } from '@material-ui/core/styles';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EvStationIcon from '@mui/icons-material/EvStation';
import AccessibleIcon from '@mui/icons-material/Accessible';

function Card() {
    const classes = useStyles();
    return(
        <div className={classes.card}>
            <div className={classes.cardContent}>   
                <div className={classes.floorSpot}>
                    <p className={classes.pStyle}>Floor 1</p>
                    <p className={classes.pStyle}>Spot 1</p>
                </div>
                <div className={classes.logos}>
                    <AccessibleIcon sx={{ fontSize: 40 }} />
                    <EvStationIcon  sx={{ fontSize: 40 }}/>
                    <DirectionsCarIcon sx={{ fontSize: 40 }} />
                    {/* <TwoWheelerIcon sx={{ fontSize: 40 }} /> */}

          
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    card: {
        display: 'flex',
        justifyContent: 'center',
     
        padding: '.5rem 2rem',
        fontSize: '1.5rem',
        width: '9rem',
        height: '7rem',
        backgroundColor: '#bedebf',
        borderRadius: '10px',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 0',
        flexDirection: 'column',
        width: '100%',
    },

    floorSpot: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    logos: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    pStyle: {
        margin: 0,
    }
}));

export default Card;