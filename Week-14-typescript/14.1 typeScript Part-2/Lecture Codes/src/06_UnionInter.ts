
type Employee3 = {
    name: string;
    startDate: string;
};

type Manager1 = {
    name: string;
    department: string;
};

type TeamLead = Employee3 | Manager1; // Union(|) of Employee and Manager

let emp1: Employee3 = {
    name: "Bharat",
    startDate: "09-09-2022"
};

let manager: Manager1 = {
    name: "Raj",
    department: "IT"
};

let teamLead: TeamLead = {
    name: "Harkirat",
    startDate: "01-01-2019",
    department: "HR"
};