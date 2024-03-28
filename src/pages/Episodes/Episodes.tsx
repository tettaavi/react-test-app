import { useGetEpisodesQuery } from "../../services/episodes"

import Grid from '@mui/material/Unstable_Grid2';
import { EpisodeCard } from "./EpisodeCard";

export const Episodes = () => {
    const { data, error, isLoading } = useGetEpisodesQuery('');

    const listItems = data?.results.map((episode) =>
        <Grid xs={3} key={episode.id}>
            <EpisodeCard {...episode} />
        </Grid>
    );

    return <Grid container spacing={2}>{listItems}</Grid>;
}