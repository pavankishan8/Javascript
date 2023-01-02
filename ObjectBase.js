let obj = {};

obj.id = 153;
obj.name = "testName";
obj.address = "testAddress";
obj.salary = 75000;

for(const key in obj) console.log(obj[key]);

console.log(JSON.stringify(obj));

//////////////////////////Using Class Keyword///////////////////////////
//prototype //objects of that prototypes

class Employee{
    constructor(id, name, address, salary){
        
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    
    }
}


const empObj = new Employee(163, "Pavan", "Bangalore", 75000);
