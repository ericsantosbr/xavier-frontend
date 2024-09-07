import React, { useState, useEffect } from 'react';
import { Button, Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap';

// function getStudentData(studentID) {
//     let data = fetch('localhost:8050/students/getStudent/66c64ef3cca363b8da3e33e0')
// }

export default function StudentCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        fetch('/students/getStudent/66c64ef3cca363b8da3e33e0')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      }, []);

    return (
    <Card style={{
      width: '18rem'
    }}>
      <CardBody>
        <CardImg src="https://picsum.photos/300/200" />
        <CardTitle>{data.name}</CardTitle>
        <CardSubtitle>{data.class}</CardSubtitle>
        <Button href={'/EditStudent/' + data._id}>Editar</Button>
      </CardBody>
    </Card>
    );
}