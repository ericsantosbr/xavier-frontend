import { Button, Card, CardTitle, CardImg, CardBody, CardHeader, CardSubtitle } from 'reactstrap';

export default function SchoolCard(props) {
  return (
  <Card style={{
    width: '18rem'
  }}>
    <CardBody>
      <CardHeader>
        <CardImg src="https://picsum.photos/300/200" />
      </CardHeader>
      <CardTitle>{props.data.name}</CardTitle>
      <CardSubtitle>{props.data.address}</CardSubtitle>
      <Button href={'/SchoolDashboard/' + props.data._id}>Visualizar</Button>
    </CardBody>
  </Card>
  );
}