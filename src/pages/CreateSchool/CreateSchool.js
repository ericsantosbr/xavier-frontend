import { Button, Form, Input } from "reactstrap";

import { submitNewSchool } from "../../helpers/schoolHelpers/schoolHelpers";

export default function CreateSchool() {
    return (
    <>
        <Form onSubmit={submitNewSchool}>
            <b>Nome: </b> <Input name="name" />
            <b>Endereço: </b> <Input name="address" />
            <b>Fundação: </b> <Input name="established" type="date" />
            <b>Telefone: </b> <Input name="phone" />
            <Button type="submit">Criar</Button>
        </Form>
    </>);
}