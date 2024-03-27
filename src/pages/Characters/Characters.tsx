import { useGetcharacterQuery } from "../../services/character"
// import { Character as CharacterInterface } from "../../services/types";

import Grid from '@mui/material/Unstable_Grid2';
import { CharacterCard } from "./CharacterCard";

export const Character = ({ title }: { title: string }) => {
    const { data, error, isLoading } = useGetcharacterQuery('');

    const listItems = data?.results.map((character) =>
        <Grid xs={3} key={character.id}>
            <CharacterCard {...character} />
        </Grid>
    );

    return <div>
        {title}

        <Grid container spacing={5}>{listItems}</Grid>
    </div>;
}