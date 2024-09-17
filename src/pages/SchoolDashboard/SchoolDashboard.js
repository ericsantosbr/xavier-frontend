import { useParams } from "react-router-dom";
import { getSchoolData, getSchoolClasses } from "../../helpers/schoolHelpers/schoolHelpers";
import { useState, useEffect } from "react";
import SchoolInfo from "../../components/SchoolPageComponents/SchoolInfo/SchoolInfo"
import ClassesListContainer from "../../components/SchoolPageComponents/ClassesListContainer/ClassesListContainer";

export default function SchoolDashboard () {
    const params = useParams();
    const [schoolInfo, setSchoolData] = useState([]);

    const [schoolClasses, setSchoolClasses] = useState([]);

    const schoolID = params.id;
    useEffect(() => {
        getSchoolData(schoolID).then((data) => {
            setSchoolData(data);
        });
        getSchoolClasses(schoolID).then((data) => {
            setSchoolClasses(data);
        })
    }, [schoolID]);
    return (
        <>
            <SchoolInfo schoolData={schoolInfo} ></SchoolInfo>
            <ClassesListContainer classesData={schoolClasses} ></ClassesListContainer>
        </>
    )
}