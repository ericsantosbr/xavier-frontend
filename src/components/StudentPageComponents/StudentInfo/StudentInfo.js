import { Button, Col, Container, Row } from "reactstrap";

export default function StudentInfo (data) {
    return (
        <Container>
            <Col xs="3">
                <img src="https://picsum.photos/300/200" alt="Foto do Aluno"/>
            </Col>
            <Col xs="9">
                <h1>{data.studentData.name}</h1>
                <Col>
                    <b>Email:</b> {data.studentData.email ? <Row>{data.studentData.email}</Row> : ''}
                    <b>Endereço:</b>  {data.studentData.address ? <Row>{data.studentData.address}</Row> : ''}
                    <b>Telefone:</b>  {data.studentData.contact ? <Row>{data.studentData.contact}</Row> : ''}
                    <b>Telefone do Responsável:</b>  {data.studentData.parentContact ? <Row>{data.studentData.parentContact}</Row> : ''}
                    <b>Escola:</b> {data.studentData.school && data.studentData.school.name ? <Row>{data.studentData.school.name}</Row> : ''}
                    <Row></Row>
                    <Row></Row>
                </Col>
                <Button href={'/EditStudent/' + data.studentData._id}>Editar</Button>
            </Col>
        </Container>
    );
}