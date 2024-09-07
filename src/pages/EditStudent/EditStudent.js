import { useParams } from "react-router-dom"
import { Form, FormGroup, Input, Label } from "reactstrap";
import { searchStudent } from "../../helpers/studentHelpers/getStudentInfo";
import { useEffect, useState } from "react";
import './EditStudent.css';


export default function EditStudent () {
    const params = useParams();

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        searchStudent(params.id).then((studentSearchReturnObject) => {
            setStudentData(studentSearchReturnObject);
        });
    }, [params.id]);

    
    return (
        <Form style={{width: '80%'}}>
            <FormGroup>
                <Label>Nome</Label>
                <Input defaultValue={studentData.name}></Input>
                <Label>Email</Label>
                <Input type="email" defaultValue={studentData.email}></Input>
                <Label>Data de Nascimento</Label>
                <Input type="date" defaultValue={studentData.birthDate}></Input>
                <Label>Contato do Aluno</Label>
                <Input defaultValue={studentData.contact}></Input>
                <Label>Contato do Pai</Label>
                <Input defaultValue={studentData.parentContact}></Input>
                <Label>Endereço</Label>
                <Input defaultValue={studentData.address}></Input>
                
            </FormGroup>
        </Form>
    );
}