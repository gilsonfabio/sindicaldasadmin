import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import api from '../services/api';
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
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
 
export default function NewAtividade() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [cnvNomFantasia, setNomFantasia] = useState('');
  const [cnvRazSocial, setRazSocial] = useState('');
  const [cnvTelefone, setTelefone] = useState('');
  const [cnvEmail, setEmail] = useState('');
  const [cnvCpfCnpj, setCpfCnpj] = useState('');
  const [cnvContato, setContato] = useState('');
  const [cnvPassword, setPassword] = useState('');
  const [cnvCanPassword, setCanPassword] = useState('');
  const [cnvAtividade, setAtividade] = useState('');
  const [cnvEndereco, setEndereco] = useState('');
  const [cnvBairro, setBairro] = useState('');
  const [cnvCidade, setCidade] = useState('');
  const [cnvEstado, setEstado] = useState('');
  const [cnvCep, setCep] = useState('');
  
  function handleCreateConvenio(e) {
    e.preventDefault();
    
    api.post('newconvenio', {
      cnvRazSocial, 
      cnvNomFantasia,
      cnvCpfCnpj,            
      cnvEmail,
      cnvTelefone,
      cnvContato,
      cnvAtividade,
      cnvPassword,
      cnvCanPassword,
      cnvEndereco,
      cnvBairro,
      cnvCidade,
      cnvEstado,
      cnvCep   
    }).then(() => {
        alert('Convênio cadastrado com sucesso!')
    }).catch(() => {
        alert('Erro no cadastro!');
    })  
    navigate(-1);  
  }

  return (
    <div>
      <MenBarra />
      <main className={classes.main}>
        <div className={classes.paper}> 
        <Typography variant="h6" noWrap>
            Informe a novo Convênio
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
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha do Convênio"
                name="password"
                autoFocus                
                value={cnvPassword} 
                onChange={(e) => {setPassword(e.target.value)}} 
            />
            <TextField 
                className={classes.input}
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="snhcancelamento"
                label="Senha de Cancelamento"
                name="snhcancelamento"
                autoFocus                
                value={cnvCanPassword} 
                onChange={(e) => {setCanPassword(e.target.value)}} 
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
               Salvar Cadastro
           </Button>
        </form>
        </div>
      </main>
    </div>
  );
}