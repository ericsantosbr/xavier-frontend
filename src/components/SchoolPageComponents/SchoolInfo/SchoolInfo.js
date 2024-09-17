import { Col, Container, Row } from 'reactstrap';

export default function SchoolInfo (Data) {
    let schoolInfo = Data.schoolData;
    
    return (
        <>
            <Container>
                <Row>
                    <Col xs="3"><img src="https://picsum.photos/300/200" alt="Imagem da Escola"/></Col>
                    <Col xs="9">
                        {schoolInfo.name ? <h1>{schoolInfo.name}</h1> : <></>}
                        <ul>
                            {schoolInfo.phone ? <li>{schoolInfo.phone}</li> : <></>}
                            {schoolInfo.address ? <li>{schoolInfo.address}</li> : <></>}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}