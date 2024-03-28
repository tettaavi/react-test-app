import { useGetLocationsQuery } from "../../services/locations"
// import { Character as CharacterInterface } from "../../services/types";

import Grid from '@mui/material/Unstable_Grid2';
import { LocationCard } from "./LocationCard";

export const Locations = () => {
    const { data, error, isLoading } = useGetLocationsQuery('');

    const listItems = data?.results.map((location) =>
        <Grid xs={3} key={location.id}>
            <LocationCard {...location} />
        </Grid>
    );

    return <div>

        <Grid container spacing={2}>{listItems}</Grid>
    </div>;
}