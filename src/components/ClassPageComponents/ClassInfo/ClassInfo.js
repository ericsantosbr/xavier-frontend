import { Col, Container, Row } from "reactstrap"

export default function ClassInfo(data) {
    console.debug(data);
    return(
        <Container>
            <h1>{data.ClassInfo ? data.ClassInfo.name : ''}</h1>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    )
}