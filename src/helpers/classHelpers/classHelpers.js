export function getClassInfo (classID) {
    return fetch('/classes/getClass/' + classID)
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}

export function getStudentsInClass (classID) {
    return fetch('/classes/getSchoolClasses/' + classID)
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}
