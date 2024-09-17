import { useEffect, useState } from 'react';

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


    return(<>{schoolsList}</>);
}
