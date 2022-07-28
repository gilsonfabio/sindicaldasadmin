import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../services/api';
import MenBarra from '../components/MenBarra/MenBarra';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    input: {
      marginTop: '20px',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function UploadPoster() {
  const classes = useStyles();
  const navigate = useNavigate();
   
  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
   
  const handleUpload = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    } 

    await api.post('uploadImage', formData, headers)
    .then((response) => {
      setStatus({
        type: 'success',
        mensagem: response.data.mensagem
      });
    }).catch((err) => {
      if(err.response) {
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem
        });
      }else{  
        setStatus({
          type: 'error',
          mensagem: 'Erro ao fazer upload. Tente novamente.'
        });
      }  
    });

  }  

  return (
    <div>
      <MenBarra />
      <main className={classes.main}>
        <div className={classes.paper}> 
          <Typography variant="h6" noWrap>
            Faça o upload do poster do filme 
          </Typography>         
          {status.type === 'success'? <p style={{color:"green"}}>{status.mensagem}</p> : ""}
          {status.type === 'error'? <p style={{color:"#ff0000"}}>{status.mensagem}</p> : ""}
          <form onSubmit={handleUpload}>
            <Typography variant="h6" noWrap>
              Imagem:  
            </Typography>         
            <input type="file" name="image" onChange={e => setImage(e.target.files[0])} className={classes.input}/> <br /><br />
            <Button variant="contained" color="primary" type="submit">Salvar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}