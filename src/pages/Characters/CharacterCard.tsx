import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Character } from '../../services/types';

export const CharacterCard = (character: Character) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={character.image}
                title={character.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}