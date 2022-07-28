import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';

import api from '../services/api';

const useStyles = makeStyles({
    buttonArea: {
        width: '100vw',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    button: {
      color: '#fff',
      display: 'block',
      width: '260px',
      height: '45px',
      outline: 'none',
      fontSize: '18px',
      fontWeight: '400',
      borderRadius: '6px',
      cursor: 'pointer',
      flexWrap: 'wrap',
      backgroundColor: '#1f80e0',
      border: '2px solid #1f80e0',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#1f80e0',
        backgroundColor: 'transparent',
      },
    },      

    filtros: {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '200px',
        marginTop: '100px',
        backgroundColor: '#fff',        
    },
      
    input: {
        height: '100px',
        width: '30px',
        borderRadius: '6px',
        outline: 'none',
        padding: '15px',
        fontFamily: 'Poppins',
        transition: 'all 0.3s ease',
    },

});

function ImpFicha() {
    const classes = useStyles();
    const [user, setUser] = useState([]);

    const params = useParams();  

    const [datInicial, setDatInicial] = useState();
    const [datFinal, setDatFinal] = useState();

    const [nomeUsr, setNomeUsr] = useState('');
    const [emailUsr, setEmailUsr] = useState('');
    const [salarioUsr, setSalarioUsr] = useState('');

    const soma = 0;

    const arrayUsr = [];

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: `FICHA CADASTRAL DO SERVIDOR`,
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45],
        }       
    ];

    const dadosUsr = [ 
        {text: 'Nome do Servidor(a):' + nomeUsr, fontSize: 8, border: true, margin: [0, 2, 0, 2]},
        {text: emailUsr, fontSize: 8, margin: [0, 2, 0, 2]},
        {text: Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salarioUsr), fontSize: 8, alignment: 'right', margin: [0, 2, 0, 2]}
    ];

    const details = [
        {
            text: 'This is a header, using header style', fontSize: 15, bold: true, margin: [15, 20, 0, 45],
            fontSize: 15,
            bold: true,
            border: 1,
            margin: [15, 20, 0, 45],
        }, ...dadosUsr       
    ];

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content:[details],
    };

    useEffect(() => {
        let idUsr = params.usrId;    
        api.get(`searchUser/${idUsr}`).then(response => {
            setUser(response.data);
            setNomeUsr(response.data[0].usrNome);
            setEmailUsr(response.data[0].usrEmail);
            setSalarioUsr(response.data[0].usrSalBruto);         
        }) 
    },[]);
       
    function emitePdf() { 

        for (let i = 0; i < user.length; i++) {
            
        }
        pdfMake.createPdf(docDefinition).open(); 
    };

    return (
        <>
            <button className={classes.button} type="button" onClick={() => emitePdf()}>
                <DeleteIcon />
            </button>         
        </>
    );
}

export default ImpFicha;