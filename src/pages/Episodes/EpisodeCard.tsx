import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Episode as EpisodeInterface } from '../../services/types';
import Link from '@mui/material/Link';

export const EpisodeCard = (episode: EpisodeInterface) => {
    return (
        <Card sx={{ maxWidth: 300, height: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {episode.name}
                </Typography>
                <Link href={episode.url}>
                    {episode.episode}
                </Link>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {episode.air_date}
                </Typography>
            </CardContent>
        </Card>
    )
}