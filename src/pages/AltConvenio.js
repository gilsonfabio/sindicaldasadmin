import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../services/api';
import { TextField } from '@material-ui/core';
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
}));
 
export default function AltConvenio() {
  const classes = useStyles();
  //const theme = useStyles();
  const navigate = useNavigate();
  
  const params = useParams();

  const [cnvNomFantasia, setNomFantasia] = useState('');
  const [cnvRazSocial, setRazSocial] = useState('');
  const [cnvTelefone, setTelefone] = useState('');
  const [cnvEmail, setEmail] = useState('');
  const [cnvCpfCnpj, setCpfCnpj] = useState('');
  const [cnvContato, setContato] = useState('');
  const [cnvAtividade, setAtividade] = useState('');
  const [cnvEndereco, setEndereco] = useState('');
  const [cnvBairro, setBairro] = useState('');
  const [cnvCidade, setCidade] = useState('');
  const [cnvEstado, setEstado] = useState('');
  const [cnvCep, setCep] = useState('');
  
  const [convenios, setConvenios] = useState([]);

  function handleCreateConvenio(e) {
    e.preventDefault();
    
    let idCnv = params.cnvId;
    api.put(`altconvenio/${idCnv}`, {
      cnvRazSocial, 
      cnvNomFantasia,
      cnvCpfCnpj,            
      cnvEmail,
      cnvTelefone,
      cnvContato,
      cnvAtividade,
      cnvEndereco,
      cnvBairro,
      cnvCidade,
      cnvEstado,
      cnvCep      
      }).then(() => {
        alert('Convênio alterado com sucesso!')
      }).catch(() => {
        alert('Erro na alteração!');
    })   
    navigate(-1); 
  }
   
  useEffect(() => {
    let idCnv = params.cnvId;    
    api.get(`searchConv/${idCnv}`).then(response => {
        setNomFantasia(response.data[0].cnvNomFantasia);
        setRazSocial(response.data[0].cnvRazSocial);
        setTelefone(response.data[0].cnvTelefone);
        setEmail(response.data[0].cnvEmail);
        setCpfCnpj(response.data[0].cnvCpfCnpj);
        setContato(response.data[0].cnvContato);
        setAtividade(response.data[0].cnvAtividade);
        setEndereco(response.data[0].cnvEndereco);
        setBairro(response.data[0].cnvBairro);
        setCidade(response.data[0].cnvCidade);
        setEstado(response.data[0].cnvEstado);
        setCep(response.data[0].cnvCep);

        console.log(response.data);
    })    
  },[]);
     
  return (  
    <div>
      <MenBarra />
      <main className={classes.main}>
        <div className={classes.paper}> 
        <Typography variant="h6" noWrap>
            Altere os dados do Convênio 
        </Typography>         
        <form onSubmit={handleCreateConvenio} >
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nomFantasia"
                label="Nome Fantasia"
                name="nomFantasia"
                autoFocus                
                value={cnvNomFantasia} 
                onChange={(e) => {setNomFantasia(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="razSocial"
                label="Razão Social"
                name="razSocial"
                autoFocus                
                value={cnvRazSocial} 
                onChange={(e) => {setRazSocial(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="telefone"
                label="Telefone"
                name="telefone"
                autoFocus                
                value={cnvTelefone} 
                onChange={(e) => {setTelefone(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoFocus                
                value={cnvEmail} 
                onChange={(e) => {setEmail(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cnpjcpf"
                label="Cnpj/Cpf"
                name="cnpjcpf"
                autoFocus                
                value={cnvCpfCnpj} 
                onChange={(e) => {setCpfCnpj(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contato"
                label="Contato"
                name="contato"
                autoFocus                
                value={cnvContato} 
                onChange={(e) => {setContato(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="atividade"
                label="Atividade"
                name="atividade"
                autoFocus                
                value={cnvAtividade} 
                onChange={(e) => {setAtividade(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="endereco"
                label="Endereço Convênio"
                name="endereco"
                autoFocus                
                value={cnvEndereco} 
                onChange={(e) => {setEndereco(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="bairro"
                label="Bairro do convenio"
                name="bairro"
                autoFocus                
                value={cnvBairro} 
                onChange={(e) => {setBairro(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cidade"
                label="Cidade do convenio"
                name="cidade"
                autoFocus                
                value={cnvCidade} 
                onChange={(e) => {setCidade(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="estado"
                label="Estado do convenio"
                name="estado"
                autoFocus                
                value={cnvEstado} 
                onChange={(e) => {setEstado(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Cep"
                label="Cep do convenio"
                name="Cep"
                autoFocus                
                value={cnvCep} 
                onChange={(e) => {setCep(e.target.value)}} 
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