import { Button, Card, CardTitle, CardImg, CardBody, CardHeader, CardSubtitle } from 'reactstrap';

export default function StudentCard(studentData) {
    return (
    <Card style={{
      width: '18rem'
    }}>
      <CardBody>
        <CardHeader>
          <CardImg src="https://picsum.photos/300/200" />
        </CardHeader>
        <CardTitle>{studentData.StudentData.name}</CardTitle>
        <CardSubtitle>{studentData.StudentData.class}</CardSubtitle>
        <Button href={'/ViewStudent/' + studentData.StudentData._id}>Visualizar</Button>
        <Button href={'/EditStudent/' + studentData.StudentData._id}>Editar</Button>
      </CardBody>
    </Card>
    );
}