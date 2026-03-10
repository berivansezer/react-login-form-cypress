import React from "react";
import { Container, Card, CardBody } from "reactstrap";

function Success() {
  return (
    <Container style={{ marginTop: "100px", maxWidth: "500px" }}>
      <Card>
        <CardBody className="text-center">
          <h1>Success</h1>
          <p>Form başarıyla gönderildi.</p>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Success;