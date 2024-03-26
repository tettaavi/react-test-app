import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import { Games } from '../Games/Games';

export const Home = () => {

    return (
        <div>
            <BottomNavigation
                showLabels
                // value={value}
                onChange={(event, newValue) => {
                    // setValue(newValue);
                    console.log(newValue)
                }}
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
            <Games></Games>
        </div>
    )
}