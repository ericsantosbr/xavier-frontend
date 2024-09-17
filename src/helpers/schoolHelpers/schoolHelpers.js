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