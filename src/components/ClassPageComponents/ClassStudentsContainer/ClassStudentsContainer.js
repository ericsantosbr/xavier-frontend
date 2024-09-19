import { useEffect, useState } from "react";
import StudentCard from "../../studentComponents/StudentCard/StudentCard";

export default function ClassStudentsContainer(data) {
    const [studentsRenderComponent, setStudentsRenderComponent] = useState([]);

    useEffect(() => {
        for (let student of data.StudentsInfo) {
            setStudentsRenderComponent(studentsRenderComponent => [...studentsRenderComponent, <StudentCard StudentData={student} />])
        }
    }, [data]);

    return (
        <>{studentsRenderComponent}</>
    )
}