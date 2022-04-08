class Factory {
    createEmployee(name, type, grade, salary) {
        let employee;

        if(type == "programmer"){
            employee = new Programmer(name, type, grade, salary);
        }
        else if (type == "clerk") {
            employee = new Clerk(name, type, grade, salary);
        }
        else {
            employee = new Employee(name, type, grade, salary);
        }

        return employee;
    }
}

class Employee {
    constructor(name, type, grade, salary) {
        this.name = name;
        this.type = type;
        this.grade = grade;
        this.salary = salary;
    }

    SayCustom() {
        console.log(`${this.name} Hi`);
    }

    SayGradeName() {
        console.log(`My Grade ${this.grade}`);
    }
}

class Programmer extends Employee {
    constructor(...args) {
        super(...args);
    }

    SayCustom() {
        console.log(`${this.name} Fucking I Need Sleep...`);
    }

    SayGradeName() {
        super.SayGradeName();
    }
}

class Clerk extends Employee {
    constructor(...args) {
        super(...args);
    }

    SayCustom() {
        console.log(`${this.name} I Love You ${this.salary}`);
    }

    SayGradeName() {
        super.SayGradeName();
    }
}


function run() {
    const factory = new Factory();

    const EmployeeNormal = factory.createEmployee("Test","normal","normal",5);
    const EmployeeA = factory.createEmployee("Hamid","programmer","Boss",241);
    const EmployeeB = factory.createEmployee("Reza","clerk","ReBoss",32);

    EmployeeNormal.SayCustom();
    EmployeeA.SayCustom();
    EmployeeB.SayCustom();

    EmployeeNormal.SayGradeName();
    EmployeeA.SayGradeName();
    EmployeeB.SayGradeName();
}
run();