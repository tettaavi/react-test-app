import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Location } from '../../services/types';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

export const LocationCard = (location: Location) => {
    return (
        <Card sx={{ maxWidth: 300, height: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {location.name}
                </Typography>
                <Typography variant="inherit">
                    {location.type}
                </Typography>
                <Link href={location.url}>
                    Location
                </Link>
            </CardContent>
        </Card>
    )
}