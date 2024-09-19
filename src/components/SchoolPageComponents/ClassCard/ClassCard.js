import { Button, Card, CardTitle, CardBody, CardHeader, CardSubtitle } from 'reactstrap';

export default function ClassCard(props) {
  return (
  <Card style={{
    width: '18rem'
  }}>
    <CardBody>
      <CardHeader>
        <CardTitle>{props.data.name}</CardTitle>
      </CardHeader>
      <CardSubtitle>{props.data.address}</CardSubtitle>
      <Button href={'/ClassDashboard/' + props.data._id}>Visualizar</Button>
    </CardBody>
  </Card>
  );
}