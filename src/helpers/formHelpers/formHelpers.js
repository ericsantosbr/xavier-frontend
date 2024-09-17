export function extractFormData(formElements) {
    let outputObject = {};
    for (let formElement of formElements) {
        outputObject[formElement.name] = formElement.value;
    }

    return outputObject;
}