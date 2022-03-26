// Write your solution in this file!
const employee = {
    name: "Andrew",
    streetAddress: "149 Ross Avenue",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const secondEmployee = {...employee};
    delete secondEmployee[key];

    return secondEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}