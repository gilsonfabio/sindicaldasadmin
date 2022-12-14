import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useParams } from 'react-router-dom';

import api from '../services/api';
import MenBarra from "../components/MenBarra/MenBarra";

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles({
    buttonArea: {
        width: '100vw',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imprimir: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '200px',
    },

    button: {
      marginTop: '300px',
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

function PdfCnvContrato() {
    const [servidores, setServidores] = useState([]);
    const [nomServidor, setNomServidor] = useState('');
    const [identidade, setIdentidade] = useState('');
    const [orgEmissor, setOrgEmissor] = useState('');
    const [cpfServidor, setCpfServidor] = useState('');
    const [matricula, setMatricula] = useState('');
    const [cargo, setCargo] = useState('');
    const [lotacao, setLotacao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');

    //const srvId = localStorage.getItem('usuarioId');
    const params = useParams(); 
    const classes = useStyles();

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const dateNow = moment(); 
    const dia = moment().format('DD');
    const mes = moment().format('MMMM');
    const ano = moment().format('YYYY');

    const reportTitle = [
        {
            text: `Contrato Conv??nio`,
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45],
        }       
    ];

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        content: [
            {
                text: 'CONTRATO DE CONV??NIO/AUTORIZA????O DE DESCONTO EM FOLHA DE PAGAMENTO.\n\n',
                style: 'header',
                alignment: 'center',
                fontSize: 15, bold: true,
            },
            {
                text: [
                    'CONTRATO DE CONV??NIO para utiliza????o do Cart??o CALDASCARD que entre si fazem A Associa????o Cultural, Esportiva e Social',
                    'dos Servidores P??blicos Municipais de Caldas Novas e o Servidor P??blico est??vel, Comissionado/Contratado adiante qualificado.\n\n',
                    'Por este instrumento que fazem de um lado, como CONTRATADO a Associa????o Cultural, Esportiva e Social dos Servidores P??blicos',
                    ' Municipais de Caldas Novas, do Estado de Goi??s, com sede nesta cidade, a Avenida E, Quadra AI 04, Lote 01, Est??ncia Itanhang?? I, ',
                    'inscrita no CNPJ sob o n??.: 33458971000139, neste ato representada por sua diretora Financeira ', 
                    {text: 'ROSIMEIRE PEREIRA MARTINS', fontSize: 12, bold: true},
                    ', brasileiro, solteira, servidor p??blico, portador no RG n??.: 3254870, CPF n??.:624.087.801-44 ; ao qual gerenciar?? a consigna????o dos filiados do a  ',
                    {text: 'SINDICATO DOS SERVIDORES P??BLICOS MUNICIPAIS DE CALDAS NOVAS - SINDICALDAS ', fontSize: 12},
                    ', entidade sindical sem fins lucrativos, inscrita no CNPJ sob o n??mero 00.619.564/0001-07, com sede na Av.E, Qd AI 04 LT 01 Estancia Itanhanga I,',
                    ' Cep 75680-368 - Caldas Novas- Goi??s, por meio de seu Presidente, nos termos do Estatuto Social e ata de elei????o e posse que possam fazer parte ',
                    'integrante do presente instrumento, representado, pelo presidente, senhor ',
                    {text: 'EUR??PEDES ISRAEL DE MORAIS ', fontSize: 12, bold: true},
                    ', brasileiro, casado, servidor p??blico, inscrito no CPF: 228.434.691.04, portador da c??dula de identidade n?? 1145789 SSP/GO, e de outro lado, ',
                    'como CONTRATANTE, o servidor p??blico municipal, efetivo/n??o efetivo, e em exerc??cio de cargo comissionado/contratado a seguir qualificado:\n\n',
                ]
            },
            {text: `Nome do Servidor: ${nomServidor}\n\n`, fontsize: 10},
            {text: `N?? Identidade:${identidade} / Org??o Emissor: ${orgEmissor} / N?? CPF: ${cpfServidor} \n\n`, fontsize: 10},
            {text: `Matricula: ${matricula} / Cargo: ${cargo} / Lota????o: ${lotacao} \n\n`, fontsize: 10},
            {text: `Endere??o: ${endereco} / Bairro: ${bairro} / Cep: ${cep} \n\n`, fontsize: 10},
            {text: `Telefones: ${telefone} \n\n`, fontsize: 10},
            {text: 'Com base nas normas legais vigentes, ajustam e celebram entre si o presente contrato, regendo-se o mesmo pelas cl??usulas e condi????es seguintes:\n\n'},
            {text: [
                    {text: 'Cl??usula primeira ??? ', fontSize: 10, bold: true},
                    'A Associa????o por meio deste, se obriga a fornecer o Cart??o CALDASCARD para opera????es de cr??dito nos estabelecimentos conveniados com a Associa????o Cultural,',
                    'Esportiva e Social dos Servidores P??blicos Municipais de Caldas Novas.\n\n',
                    {text: 'Par??grafo 1??', fontSize: 10, bold: true},
                    ': A Associa????o poder?? conferir ao CONTRATANTE um cr??dito de at?? 30% (trinta por cento) do sal??rio-bruto, aferido pelo ??ltimo demonstrativo de pagamento salarial,',
                    'no sistema parcelado e em caso de comprometimento deste percentual, poder?? por analise da administradora, conceder mais 15% (quinze por cento) no sistema rotativo',
                    '(uma vez) para compra exclusiva de alimentos, rem??dios e itens de primeira necessidade, conforme regras do estatuto sindical.\n\n',
                    {text: 'Par??grafo 2??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico) autoriza o desconto em folha de pagamento, dos valores gastos mensalmente com o Cart??o, a serem realizados no m??s imediatamente',
                    'posterior ??s compras e em caso de exonera????o, aposentadoria ou desligamento por qualquer motivo, autoriza at?? 100% (cem por cento) o valor em sua rescis??o ',
                    'contratual para a garantia dos valores restantes. \n\n',
                    {text: 'Assinatura: ____________________________________________________________________________________________________\n\n', fontSize: 10, bold: true},
                    {text: 'Par??grafo 3??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico), n??o poder?? emprestar seu cart??o a terceiros, simular compras sob pena de exclus??o do uso do cart??o.\n\n',
                    {text: 'Par??grafo 4??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico), n??o poder?? emprestar seu cart??o a terceiros, simular compras sob pena de exclus??o do uso do cart??o.\n\n',
                    {text: 'Par??grafo 5??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico), caso n??o reconhe??a qualquer compra, dever?? se diligenciar at?? o estabelecimento com o intuito de ',
                    'identifica????o, entregando contesta????o ao comercio/servi??o e a administradora do cart??o. \n\n',  
                    {text: 'Par??grafo 6??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico) pagar?? R$ 10,00(dez reais) por cada via do cart??o e em caso de extravio a despesas com bloqueios e ',
                    'a confec????o de novos cart??es ficar?? a cargo deste. \n\n',
                    {text: 'Par??grafo 7??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico) em caso de mudan??a de matr??cula funcional, por qualquer motivo, j?? autoriza a transfer??ncia autom??tica dos d??bitos em sua folha de pagamento.\n\n', 
                    {text: 'Par??grafo 8??', fontSize: 10, bold: true},
                    ': O CONTRATANTE (servidor p??blico) em caso de n??o realiza????o de d??bito em folha por qualquer motivo, faculta-se a dirigir junto a administradora e realizar o pagamento,',
                    'ou autoriza a cobran??a em duplicidade para compensa????o dos valores.\n\n',   
                    {text: 'Assinatura: ____________________________________________________________________________________________________\n\n', fontSize: 10, bold: true},
                    {text: 'Cl??usula segunda ??? ', fontSize: 10, bold: true},
                    'O presente contrato tem seu termo inicial de vig??ncia a partir de sua assinatura por tempo indeterminado ou at?? a data do ??ltimo dia do m??s de trabalho, ',
                    'em caso de exonera????o do cargo exercido pelo servidor e ou descumprimento contratual.\n\n',
                    {text: 'Cl??usula terceira ??? ', fontSize: 10, bold: true},
                    'O presente contrato pode ser rescindido por interesse de qualquer das partes, mediante comunica????o escrita, devidamente fundamentada, realizada em per??odo n??o ',
                    'inferior a 30 (trinta) dias, mantendo os descontos em folha at?? sua quita????o. \n\n',
                    {text: 'Par??grafo ??nico ', fontSize: 10, bold: true},
                    'Sem preju??zo do caput dessa cl??usula, o presente instrumento pode ser ainda rescindido de imediato, mediante simples comunica????o do CONTRATADO, entregue com comprova????o ',
                    'de recebimento, em caso de inadimpl??ncia no cumprimento das obriga????es pecuni??rias assumidas pelo CONTRATANTE, caso em que constatando-se culpa do mesmo, responder?? ele, ',
                    'CONTRATANTE, pelas perdas e danos decorrentes da rescis??o.\n\n',   
                    {text: 'Cl??usula quarta ??? ', fontSize: 10, bold: true},
                    'A responsabilidade tanto do CONTRATADO como do CONTRATANTE ?? limitada ao descrito nas cl??usulas deste contrato. \n\n',
                    {text: 'Cl??usula quinta ??? ', fontSize: 10, bold: true},
                    'O CONTRATADO n??o pode transferir todo ou parcialmente o presente instrumento, sem pr??vio e expresso consentimento da CONTRATANTE. \n\n',
                    {text: 'Cl??usula sexta ??? ', fontSize: 10, bold: true},
                    'As partes acordam que facultar?? ao CONTRATADO, o direito de realizar a cobran??a dos valores devidos e n??o pass??veis de desconto por advento da rescis??o do contrato de ',
                    'trabalho em at?? 100%, atrav??s de todos os meios admitidos em direito, obrigando a CONTRATANTE, seus herdeiros e sucessores em caso de saldo insuficiente em sua rescis??o.\n\n',
                    {text: 'Par??grafo ??nico', fontSize: 10, bold: true},
                    'Caso haja morte ou incapacidade civil do CONTRATADO, seus sucessores ou representante legal arcar??o com os valores devidos na propor????o do esp??lio deixado pelo de cujus.\n\n',
                    {text: 'Cl??usula s??tima ??? ', fontSize: 10, bold: true},
                    'O CONTRATANTE reconhece que o cargo em comiss??o/contrato em que ocupa ?? de exonera????o ad nutum, e que pode ser dispensado a qualquer tempo, por ato pr??prio do Chefe do ',
                    'Poder Executivo, bem como, em caso de contrato de prestador de servi??os, reconhece que o mesmo tamb??m pode ser rescindido a qualquer tempo por conveni??ncia e oportunidade da ',
                    'Administra????o, raz??o pela qual se compromete, em caso de exonera????o ou rescis??o contratual, a efetuar os pagamentos de todos os valores devidos a  ASSOCIA????O por advento do',
                    ' uso do CART??O CALDASCAR, que por qualquer motivo n??o puderem ser descontados do instrumento de rescis??o, sendo que estes casos a concess??o de cr??dito e parcelas ficara exclusivamente ',
                    'a crit??rio da administradora.\n\n',
                    {text: 'Par??grafo ??nico ', fontSize: 10, bold: true},
                    'O CONTRATANTE reconhece e concorda que fica facultado a administradora, em caso do n??o pagamento previsto neste contrato, fazer inscrever os dados cadastrais do CONTRATANTE em ??rg??os ',
                    'de prote????o ao cr??dito, especialmente SPC e SERASA e cart??rio, independente de qualquer a????o judicial ou administrativa.\n\n',
                    {text: 'Cl??usula oitava ??? ', fontSize: 10, bold: true},
                    'Fica estipulada uma multa de 10% (dez por cento), apurada sobre o valor efetivamente devido ap??s a aplica????o de atualiza????o monet??ria (??ndice INPC/IBGE) juros de 2% ao m??s, no caso do ',
                    'n??o pagamento dos valores devidos ap??s a celebra????o da rescis??o de contrato, sem preju??zo da responsabilidade por perdas e danos, ressalvando-se os casos fortuitos e eventos de for??a ',
                    'maior, al??m de honor??rios advocat??cios de 10%.\n\n',
                    {text: 'Cl??usula nona ??? ', fontSize: 10, bold: true},
                    'As partes d??o ao presente instrumento o car??ter de t??tulo executivo extrajudicial, nos termos do art. 585, inciso II, do C??digo de Processo Civil.\n\n',
                    {text: 'Cl??usula d??cima ??? ', fontSize: 10, bold: true},
                    'Fica eleito o foro da Comarca de Caldas Novas/GO, para dirimirem as d??vidas provenientes da execu????o e cumprimento do mesmo, renunciando a qualquer outro',
                    ', por mais especial que se apresente, sendo regido ainda pelo C??digo Civil e regras estatut??rias, tendo em vista que o car??ter ?? de associatividade sem fins lucrativos.\n\n',
                    'E por estarem certos, justos e contratos, firmam o presente em duas vias de igual teor e forma, na presen??a de duas testemunhas que tamb??m assinam.\n\n',
                    `Caldas Novas/GO, ${dia}   de ${mes}     de ${ano}          \n\n\n`,
                    '______________________________________________________________________________\n\n\n',
                    'Rosimeire Pereira Martins ??? Diretora Financeira da Associa????o Cultural, Esportiva e Social dos Servidores P??blicos Municipais de Caldas Novas.\n\n',
                    '______________________________________________________________________________\n\n\n', 
                    'Contratante-servidor.\n\n',
                    '______________________________________________________________________________\n\n\n', 
                    'Eur??pedes Israel de Morais - Presidente do Sindicato dos Servidores P??blicos Municipais de Caldas Novas-Sindicaldas.\n\n\n\n\n',
                    'Testemunha 1: _______________________________________ CPF\n\n\n',
                    'Testemunha 2: _______________________________________ CPF\n\n\n',
                    {text: 'Vencimento: _________de ______________de ___________ \n\n\n', fontSize: 12, bold: true, alignment: 'right'},
                    {text: 'N?? _________________                                                                                                   R$:________________________ \n\n\n\n\n\n', fontSize: 12, bold: true},
                    'No dia _    _______ __________________________________________de____________________________________de\n\n\n',
                    '_____________________________ pagar ________ por esta ??nica via de NOTA PROMISS??RIA a Associa????o\n\n',
                    {text:'Cultural,   Esportiva   e   Social   dos   Servidores   P??blicos   Municipais  de  Caldas  Novas  CPF/CNPJ\n\n', alignment: 'justify'},
                    '33.458.971/0001-39 ou ?? sua ordem, a quantia de _____________________________________________________\n\n',
                    'em moeda corrente deste pa??s, pag??vel em ____________________________________________________________\n\n',
                    'Emitente:__________________________________________                       Data de Emiss??o: ______/______/_______\n\n',
                    'CPF/CNPJ:__________________________________Endere??o:________________________________________________\n\n',
                    '_______________________________________________________________________________________________________\n\n\n\n',
                    {text: 'Ass.do emitente__________________________________________\n\n', alignment: 'center'},
                ]
            },                        
        ],
    };
    
    function emitePdf() {
            
        pdfMake.createPdf(docDefinition).open(); 
    };

    useEffect(() => {
        let srvId = params.usrId;  
        api.get(`pdfSrvContrato/${srvId}`).then(resp => {
            setServidores(resp.data);
            setNomServidor(resp.data.usrNome); 
            setIdentidade(resp.data.usrIdentidade);
            setOrgEmissor(resp.data.usrOrgEmissor);
            setCpfServidor(resp.data.usrCpf); 
            setMatricula(resp.data.usrMatricula);
            setCargo(resp.data.usrCargo);
            setLotacao(resp.data.usrTrabalho); 
            setEndereco(resp.data.usrEndereco);  
            setBairro(resp.data.usrBairro);  
            setCep(resp.data.usrCep);  
            setTelefone(resp.data.usrCelular);  
        })
    },[]);

    return (
        <div>
            <MenBarra />
            <div className={classes.imprimir}>
                <button className={classes.button} type="button" onClick={() => emitePdf()}>
                    <PictureAsPdfIcon /> Abrir PDF
                </button>
            </div>             
        </div>
    );
}

export default PdfCnvContrato;