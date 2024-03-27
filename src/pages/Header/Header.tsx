import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import { Character } from '../Characters/Characters';
import { Container } from '@mui/system';
import { redirect, useNavigation, useNavigate } from "react-router-dom";

export const Header = () => {
    // const navigation = useNavigation();
    const navigate = useNavigate();

    // console.log(navigation)

    return (
        <Container maxWidth="lg">
            <BottomNavigation
                showLabels
                // value={value}
                onChange={(event, newValue) => {
                    const url = `/${newValue}/`
                    console.log(url)
                    // history.pushState(`/${newValue}/`)
                    navigate(url)
                }}
            >
                <BottomNavigationAction label="Characters" value="characters" />
                <BottomNavigationAction label="Episodes" value="episodes" />
                <BottomNavigationAction label="Locations" value="locations" />
            </BottomNavigation>
        </Container>
    )
}