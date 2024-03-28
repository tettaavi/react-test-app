import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import { useNavigation, useNavigate } from "react-router-dom";

export const Header = () => {
    const nav = useNavigation();
    const navigate = useNavigate();

    console.log(nav)

    return (
        <BottomNavigation
            showLabels
            onChange={(event, newValue) => {
                const url = `/${newValue}/`;

                navigate(url);
            }}
        >
            <BottomNavigationAction label="Characters" value="characters" />
            <BottomNavigationAction label="Episodes" value="episodes" />
            <BottomNavigationAction label="Locations" value="locations" />
        </BottomNavigation>
    )
}