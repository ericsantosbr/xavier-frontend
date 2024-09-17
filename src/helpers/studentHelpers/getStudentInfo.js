export async function searchStudent (studentID) {
    // Fetch data from the backend
    return fetch('/students/getStudent/' + studentID)
        .then((response) => response.json())
        .then((data) => {
            return data;
    });
}