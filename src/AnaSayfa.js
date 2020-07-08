import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const AnaSayfa = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <CardTitle>İlayda Cundar</CardTitle>
          <CardTitle>27</CardTitle>
          <CardText>hayvanları çok sever,sakin neşeli bir kızdır.</CardText>
          <Button>Düzenle</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default AnaSayfa;