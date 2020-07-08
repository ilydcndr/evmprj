import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const FormList = (props) => {
  return (
    <Row className="mt-5">
      <Col sm="4">
        <Card body>
          <CardTitle>İlayda Cundar</CardTitle>
          <CardTitle>27</CardTitle>
          <CardText>text....</CardText>
          <Button color="success">Düzenle</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default FormList;