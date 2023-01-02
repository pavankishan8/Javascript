class Employee {
    constructor(id, name, address, salary) {

        this.empId = id;
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;

    }
}

//class with functions
class EmpRepo {
    data = [];

    addEmployee = (emp) => this.data.push(emp);

    getAllEmployees = () => this.data;

    getEmployee(id) {
        for (const emp of this.data) {
            if (emp.empId == id)
                return emp;
        }

        throw `Employee by ID ${id} not found`;

    }

    updateEmployee(emp){
        for(const empRec of this.data){
            if(emp.empId == empRec.empId){
                empRec.empName = emp.empName;
                empRec.empAddress = emp.empAddress;
                empRec.empSalary = emp.empSalary;
                return; //exit function
            }
            throw "Employee not found."
        }
    }

}




//////////////////////////////////Testing Part////////////////////////////////////


let instance = new EmpRepo();
instance.addEmployee(new Employee(7081, "Pavan R", "Bangalore", 45000));
instance.addEmployee(new Employee(7094, "Priya B", "Dharwad", 55000));
instance.addEmployee(new Employee(7012, "Harsh Bharath Kumar", "Gujurat", 35000));
instance.addEmployee(new Employee(7043, "Karunya", "Chitoor", 25000));

const data = instance.getAllEmployees()
for (const emp of data) console.log(emp.empName);

    // deleteEmployee =(id) =>{

    //     let emp = data.find((e)=>e.empId == id);
    //     let index = data.indexOf(emp);
    //     this.data.splice(index, 1);

    // }

    // updateEmployee =(emp) =>{

    //     let foundemp = this.data.find((e)=>e.empId == id);
    //     let index = data.indexOf(foundemp);
    //     data.splice(index, 1, emp);

    // }




