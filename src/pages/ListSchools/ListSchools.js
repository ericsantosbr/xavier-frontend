import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'reactstrap';

import SchoolCard from '../../components/schoolComponents/SchoolCard/SchoolCard';
import { getSchoolList } from '../../helpers/schoolHelpers/schoolHelpers';

export default function ListSchools (schoolID) {
    const [schoolsList, setSchoolsList] = useState([]);

    useEffect(() => {
        getSchoolList(schoolID).then((data) => {
            setSchoolsList([]);
            for (let school of data) {
                setSchoolsList(schoolsList => [...schoolsList, <SchoolCard data = { school } />]);
            }
        });
    }, [schoolID]);


    return(
    <>
        <h1>Lista de Escolas</h1>
        <Button href="/CreateSchool">Criar Nova</Button>
        <Container>
            <Row>{schoolsList}</Row>
        </Container>
    </>);
}
