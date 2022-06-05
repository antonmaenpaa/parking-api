import {  makeStyles } from '@material-ui/core/styles';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EvStationIcon from '@mui/icons-material/EvStation';
import AccessibleIcon from '@mui/icons-material/Accessible';

function Card({
    number, 
    floor,
    type,
    isAvalable,
    charging,
    disabled }) {
    const classes = useStyles();
    return(
        <div className={`${classes.card} ${isAvalable ? classes.bgGreen : classes.bgRed}`  }>
            <div className={classes.cardContent}>   
                <div className={classes.floorSpot}>
                    <p className={classes.pStyle}>Floor {floor}</p>
                    <p className={classes.pStyle}>Spot {number}</p>
                </div>
                <div className={classes.logos}>
                    {disabled ?  <AccessibleIcon sx={{ fontSize: 30 }} />  : <span className={classes.span}></span>}
                    {charging ?  <EvStationIcon sx={{ fontSize: 30 }} />  : <span className={classes.span}></span>}
                    {type === 'car' && <DirectionsCarIcon sx={{ fontSize: 30 }} />}
                    {type === 'mc' && <TwoWheelerIcon sx={{ fontSize: 30 }} />}

                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    card: {
        display: 'flex',
        justifyContent: 'center',   
        padding: '.5rem 1rem',
        fontSize: '1.5rem',
        width: '9rem',
        height: '5rem',
        borderRadius: '10px',
    },
    bgGreen: {
        backgroundColor: '#bedebf',
    },
    bgRed: {
        backgroundColor: '#ffa1a1',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-around',
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
        fontSize: '.8rem',
    },
    span: {
        width: '1.5rem',
    }
}));

export default Card;