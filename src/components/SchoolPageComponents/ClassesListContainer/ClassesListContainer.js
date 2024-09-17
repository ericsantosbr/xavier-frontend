import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ClassCard from "../ClassCard/ClassCard";

export default function ClassesListContainer (data) {
    const [classItems, setClassItems] = useState([]);

    useEffect(() => {
        setClassItems([]);
        if (data.classesData && data.classesData.length > 0) {
            for (let currentClass of data.classesData) {
                setClassItems(classItems => [...classItems, <ClassCard data = { currentClass } />]);
            }
        }
    }, [data]);


    return (
        <Container>
            {classItems}
        </Container>
    );
}