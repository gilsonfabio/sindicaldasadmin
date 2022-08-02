import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField } from '@material-ui/core';

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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    select: {
      width: 300,
    },
}));
 
export default function AltUser() {
  const classes = useStyles();
  const navigate = useNavigate();

  const params = useParams();

  const [usrNome, setUsrNome] = useState('');
  const [usrEmail,  setUsrEmail] = useState('');
  const [usrSenha,  setUsrSenha] = useState('');
  const [usrNivAcesso, setUsrNivAcesso] = useState('');
  
  function handleCreateUser(e) {
    e.preventDefault();
    let idUsr = params.usrId;
    
    api.put(`altuser/${idUsr}`, {
        usrNome, 
        usrEmail,  
        usrSenha,  
        usrNivAcesso  
    }).then(() => {
        alert('Usuário alterado com sucesso!')
    }).catch(() => {
        alert('Erro no cadastro!');
    })    
    navigate(-1);
  }

  useEffect(() => {
    let idUsr = params.usrId;

    api.get(`searchUser/${idUsr}`).then(response => {
        setUsrNome(response.data[0].usrNome);
        setUsrEmail(response.data[0].usrEmail);
        setUsrSenha(response.data[0].usrSenha);
        setUsrNivAcesso(response.data[0].usrNivAcesso);
    })
  },[]);

  return (
    <div>
      <MenBarra />
      <main className={classes.main}>
        <div className={classes.paper}> 
        <Typography variant="h6" noWrap>
            Altere os dados do Usuário
        </Typography> 
        <form onSubmit={handleCreateUser} >
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome do Usuário"
                name="nome"
                autoFocus                
                value={usrNome} 
                onChange={(e) => {setUsrNome(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email do Usuário"
                name="email"
                autoFocus                
                value={usrEmail} 
                onChange={(e) => {setUsrEmail(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="senha"
                label="Senha do Usuário"
                name="senha"
                autoFocus                
                value={usrSenha} 
                onChange={(e) => {setUsrSenha(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                type="number"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nivAcesso"
                label="Nivel de Acesso"
                name="nivAcesso"
                autoFocus                
                value={usrNivAcesso} 
                onChange={(e) => {setUsrNivAcesso(e.target.value)}} 
            />            
           <Button variant="contained" color="primary" type="submit" className={classes.submit}>
               Salvar Alteração
           </Button>
        </form>
        </div>
      </main>
    </div>
  );
}