import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../CSS/zgjedhjet.css';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material'; 
import CardMedia from '@mui/material/CardMedia';
import { BsTypeH6 } from 'react-icons/bs';
import { yellow } from '@mui/material/colors';

function CandidateCard({candidate}) {
  
  return (
    <Card sx={{ maxWidth: 300 }} className='candidatewrapper'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${candidate.name} ${candidate.surname}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Display other candidate information */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='card-actions'>
          <Typography size="small" color="primary">
            Voto 1
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}

function Zgjedhjetqendrorecand() {
  const [candidate, setCandidates] = useState([]);

  const fetchKandidatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/crud/getAllCandidatesbyElection?city=Skenderaj");
      const kandidatdata = await response.json();
      setCandidates(kandidatdata.data);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchKandidatData();
  }, []);
  return (
    <Grid container spacing={1} style={{ marginLeft: 100, marginTop: 100, marginBottom: 100, backgroundColor:'#fff176' }}>
      {candidate.map((candidate) => (
        <CandidateCard key={candidate._id} candidate={candidate} />
      ))}
    </Grid>
  );
}

export default Zgjedhjetqendrorecand;