class Student{
    //We can use access modifiers in Type Script so we can change the direct accessibility
    //private , public , protected
    private _name:string;
    private _age:number;
    private _address:string;
    private _contact:string;

    //->    We cannot create more than one constructor here as java
    //->    Only we can do is declare parameters with ? and the meaning of it is the parameters
    //      Not mandatory
    //->    We can also add access modifier to the Constructor
    public constructor(name?:string,age?:number,address?:string,contact?:string) {
        this._name = name;
        this._age = age;
        this._address = address;
        this._contact = contact;
    }
    //->    The getters and setters for inject data and access data

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get contact(): string {
        return this._contact;
    }

    set contact(value: string) {
        this._contact = value;
    }
}


//Test Function for Object Assigning and reference
function test(){
    //This is a reference variable that can hold Student type object
    let student:Student;

    //this is how assign Student type object to Student type variable
    student = new Student('Pasindu',30,'Habarana','+94 78 714 9579')
    let student2:Student = new Student('Pasindu',30,'Habarana','+94 78 714 9579')

    //Calling Setter and setting age
    student.age=20;

    console.log(student.age)
    console.log(student2.age)

}

test();