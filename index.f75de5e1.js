"use strict";
const list = document.querySelector("ul");
const employees = document.querySelectorAll("li");
function sortList() {
    const sortedEmployees = [
        ...employees
    ].sort((eA, eB)=>{
        const salary1 = salaryToN(eA.dataset.salary);
        const salary2 = salaryToN(eB.dataset.salary);
        return salary2 - salary1;
    });
    sortedEmployees.forEach((employee)=>list.append(employee));
}
function getEmployees() {
    return [
        ...employees
    ].map((employee)=>({
            name: employee.innerText,
            position: employee.dataset.position,
            salary: employee.dataset.salary,
            age: +employee.dataset.age
        }));
}
function salaryToN(salary) {
    return +salary.replace(/[$,]/g, "");
}
sortList();
getEmployees();

//# sourceMappingURL=index.f75de5e1.js.map
