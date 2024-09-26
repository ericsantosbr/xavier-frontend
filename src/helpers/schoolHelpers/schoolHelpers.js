import { extractFormData } from "../formHelpers/formHelpers";

export async function getStudentsInSchool(schoolID) {
    let schoolsSearchResult = await fetch('/schools/getStudentsInSchool/' + schoolID).then((data) => data.json());

    return schoolsSearchResult;
}

export async function getSchoolList() {
    return fetch('/schools/getSchoolList')
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}
    
export async function getSchoolData(schoolID) {
    return fetch('/schools/getSchool/' + schoolID)
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}

export async function getSchoolClasses(schoolID) {
    return fetch('/schools/getSchoolClasses/' + schoolID)
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}

export async function submitNewSchool(e) {
    e.preventDefault();

    let formBody = extractFormData(e.target);

    let requestObject = {
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(formBody),
        mode: 'cors'
    }

    fetch('/schools/createSchool', requestObject).then(response => {
        if (response.status === 200) {
            window.location.href = '/ListSchools'
        }
    });
}