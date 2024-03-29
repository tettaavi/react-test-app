import { useGetCharacterQuery } from "../../services/character"

import Grid from '@mui/material/Unstable_Grid2';
import { CharacterCard } from "./CharacterCard";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useLocation, useNavigate } from 'react-router-dom';
import { CharactersFilter } from "./CharactersFilter";

export const Character = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const name = query.get('name') || undefined;

    console.log(page, name, query)

    const { data, error, isLoading } = useGetCharacterQuery({ page, name });

    const listItems = data?.results.map((character) =>
        <Grid xs={3} key={character.id}>
            <CharacterCard {...character} />
        </Grid>
    );

    function handlePaginationChange(_: React.ChangeEvent<unknown>, value: number) {
        navigate(`?page=${value}${name ? `&name=${name}` : ''}`);
    }

    return <div>
        <CharactersFilter></CharactersFilter>

        <Grid container spacing={5}>{listItems}</Grid>
        {
            data?.info.pages ?
                <Stack spacing={2}>
                    <Pagination page={page} count={data?.info.pages} color="secondary" onChange={handlePaginationChange} />
                </Stack>
                : null
        }

    </div>;
}