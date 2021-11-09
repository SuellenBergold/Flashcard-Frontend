// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
import api from "../../service/api"

const Adicionar = () => {

const [name, setName] = useState('');
    const [description, setDescription] = useState('');

const cad = async () =>{
		await api.post("", {nome: name, descricao: description});

return (
  <Row>
    <Col m={12} s={12}>
        <h5>Cursos</h5>
        <Card>
          <Row>
              <Input placeholder="Digite aqui..." 
              label="Nome" s={12} 
		onChange={event => setName(event.target.value)}/>

              <Input placeholder="Digite aqui..." 
              label="Descrição" s={12} 
		onChange={event => setDescription(event.target.value)}/>

            <Col s={12} m={12}>
              <NavLink to="/cursos" ><Button onClick={cad} waves='light' className="right grey darken-2">Adicionar</Button></NavLink>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);
}

export default Adicionar