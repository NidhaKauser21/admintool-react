import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Card_data from '../../Data/Project_data.json'


export default function MediaCard() {
  return (
    <div className='card' style={{display:'flex',flexWrap:'wrap',gap:'40px',justifyContent:'center'}}>
      {Card_data.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}> 
          <CardMedia sx={{ height: 140 }} image={item.Image} title={item.Project_title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.Project_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.Project_description}
            </Typography>
            {item.Start_date}-{item.End_date}
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/product_detail/${item.id}`} variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
