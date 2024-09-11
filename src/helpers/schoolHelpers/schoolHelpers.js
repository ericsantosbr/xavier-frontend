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
