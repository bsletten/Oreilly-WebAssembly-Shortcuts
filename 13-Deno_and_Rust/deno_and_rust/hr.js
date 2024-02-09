export class Employee {
    constructor() {
	this._name = "John Q. Employee";
    }
    
    get name() {
	return this._name;
    }

    set name(empname) {
	return (this._name = empname);
    }

    introduce() {
	return `Hello, I am ${this.name}`;
    }
}
