import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function BasicCard({exp}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography> */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" component="div">
            {exp.company}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{exp.started} - {exp.ended}</Typography>    
        </Stack>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{exp.jobTitle}</Typography>
        {/* <Typography variant="body2"> */}
            {exp.body.map((statement) => (
                <Typography variant="body2">{statement}</Typography>
            ))}     
            <br />     
        {/* </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
