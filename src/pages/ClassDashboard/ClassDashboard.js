import { useEffect, useState } from "react";
import ClassInfo from "../../components/ClassPageComponents/ClassInfo/ClassInfo";
import ClassStudentsContainer from "../../components/ClassPageComponents/ClassStudentsContainer/ClassStudentsContainer";
import { getClassInfo, getStudentsInClass } from "../../helpers/classHelpers/classHelpers";
import { useParams } from "react-router-dom";

export default function ClassDashboard () {
    const params = useParams();
    const classID = params.id;
    const [classData, setClassData] = useState([]);
    const [studentsInClass, setStudentsInClass] = useState([]);

    useEffect(() => {
        setClassData();
        getClassInfo(classID).then((data) => {
            setClassData(data);
        });
        getStudentsInClass(classID).then((data) => {
            setStudentsInClass(data);
        });
    }, [classID]);

    return (
        <>
            <ClassInfo ClassInfo={classData}/>
            <ClassStudentsContainer StudentsInfo={studentsInClass} />
        </>
    );
}