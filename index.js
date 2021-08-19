// Write your solution in this file!
const employee = {
    name: "Marcia",
    streetAddress: "3556 Apple Way",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key) {
    const newb = { ...obj }
        delete newb[key];
    return newb;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}