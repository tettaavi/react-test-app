import { FormControl, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const CharactersFilter = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string>('');

    function handleNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function handleForm() {
        navigate(`?name=${value}`);
    }

    return (
        <FormControl>
            <TextField id="name" type="text" value={value} label="Name" variant="standard" onChange={handleNameInput} />
            <Button variant="outlined" onClick={handleForm}>Search</Button>
        </FormControl>
    )
}