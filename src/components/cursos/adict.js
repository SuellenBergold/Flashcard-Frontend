// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

const Adicionar = () => (
  <Row>
    <Col m={12} s={12}>
        <h5>Cursos</h5>
        <Card>
          <Row>
              <Input placeholder="Digite aqui..." 
              label="Nome" s={12} />

              <Input placeholder="Digite aqui..." 
              label="Descrição" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">Adicionar</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Adicionar