class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {
        let doc = new Document(this.name)
        for (let i = 0; i < 10; i++) {
            office.addDocument(doc)
        }
    }
}

class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }

    hireEmployee(name) {
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee);
    }

    askEmployeesToWork(office) {
        for (let employee of this.employees) {
            employee.work(office);
        }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log("Clean");
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }
    addDocument(doc) {
        this.documents.push(doc);
    }
    hireCleaner(name) {
        const cleaner = new Cleaner(name);
        this.cleaners.push(cleaner);
    }
    hireManager(name) {
        const manager = new Manager(name);
        this.managers.push(manager);
    }
    startWorkDay() {
        for (let manager of this.managers) {
            manager.askEmployeesToWork(this);
        }
        for (let cleaner of this.cleaners) {
            cleaner.clean();
        }
    }
}