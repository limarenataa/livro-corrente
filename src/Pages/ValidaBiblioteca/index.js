import React from 'react'
import {Link} from 'react-router-dom'
import FormularioCadastro  from '../../Components/Forms/CadastroBiblioteca/FormularioCadastro'
import  Login  from '../../Components/Forms/Login'
import { Container } from '@material-ui/core';
import { Tabs, Tab } from 'react-bootstrap';

import './validaBiblioteca.css'

import { validarCpf, validarNome, validarSenha, validarCelular, validarQtde} from '../../Components/Forms/models/cadastro'

export default function ValidaBiblioteca() {
  
    return(
        <Container className="container-form"
            component="aticle"
            maxWidth="sm" >

            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                    <Login  />
                </Tab>
                <Tab eventKey="cadastro" title="Cadastre-se">
                    <FormularioCadastro 
                        aoEnviar={aoEnviarForm} 
                        validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarNome, celular:validarCelular, qtde:validarQtde}}
                    />
                </Tab>
            </Tabs>
        <br></br><br></br>
        </Container>
    )
}

export async function aoEnviarForm(dados){
    const answer = await fetch("https://back-livro-corrente.herokuapp.com/cadastro/funcionario",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({dados})})

    const data = await answer.json()
} 
  
