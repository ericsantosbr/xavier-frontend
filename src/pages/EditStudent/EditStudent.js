import { useParams } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { searchStudent } from "../../helpers/studentHelpers/getStudentInfo";
import { useEffect, useState } from "react";
import './EditStudent.css';
import { extractFormData } from "../../helpers/formHelpers/formHelpers";

function submitStudentData(e) {
    e.preventDefault();

    let formBody = extractFormData(e.target);
    console.debug(formBody);

    let requestObject = {
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        redirect: 'follow',
        body: JSON.stringify(formBody),
        mode: 'cors'
    }

    fetch('/students/modifyStudent/' + e.target[0].value, requestObject);
}

export default function EditStudent () {
    const params = useParams();

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        searchStudent(params.id).then((studentSearchReturnObject) => {
            setStudentData(studentSearchReturnObject);
        });
    }, [params.id]);

    
    return (
        <Form style={{width: '80%'}} onSubmit={submitStudentData} method="update">
            <FormGroup>
                <Input hidden name="studentID" value={studentData._id}></Input>
                <Label>Nome</Label>
                <Input name="name" defaultValue={studentData.name}></Input>
                <Label>Email</Label>
                <Input name="email" type="email" defaultValue={studentData.email}></Input>
                <Label>Data de Nascimento</Label>
                <Input name="birthDate" type="date" defaultValue={studentData.birthDate}></Input>
                <Label>Contato do Aluno</Label>
                <Input name="contact" defaultValue={studentData.contact}></Input>
                <Label>Contato do Pai</Label>
                <Input name="parentContact" defaultValue={studentData.parentContact}></Input>
                <Label>Endereço</Label>
                <Input name="address" defaultValue={studentData.address}></Input>
            </FormGroup>
            <Button className="submit" type="submit">Salvar</Button>
        </Form>
    );
}