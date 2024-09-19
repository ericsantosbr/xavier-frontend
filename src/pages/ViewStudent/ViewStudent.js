import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentInfo from "../../components/StudentPageComponents/StudentInfo/StudentInfo";
import { searchStudent } from "../../helpers/studentHelpers/getStudentInfo";

export default function ViewStudent () {
    const params = useParams();
    const studentID = params.id;

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        searchStudent(studentID).then((data) => {
            setStudentData(data);
        });
    }, [studentID])

    return (
        <>
            <StudentInfo studentData={studentData}></StudentInfo>
        </>
    );
}