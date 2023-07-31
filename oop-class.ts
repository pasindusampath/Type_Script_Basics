//We have to use export keyword to access this class in another file
//without using export we cannot access this class in another file
//this concept calls modules
//see demo.ts for understand how to import this class from there
export class Student{
    //We can use access modifiers in Type Script so we can change the direct accessibility
    //private , public , protected
    //If we use older way of declaring constructor we need to add fields like this
    /*private _name:string;
    private _age:number;
    private _address:string;
    private _contact:string;*/

    //->    We cannot create more than one constructor here as java
    //->    Only we can do is declare parameters with ? and the meaning of it is the parameters
    //      Not mandatory
    //->    We can also add access modifier to the Constructor
    //->    Older Way of declaring constructor
    //->    More code need to be written

   /* public constructor(name?:string,age?:number,address?:string,contact?:string) {
        this._name = name;
        this._age = age;
        this._address = address;
        this._contact = contact;
    }*/
    constructor(private _name?:string,private _age?:number,private _address?:string,private _contact?:string) {
    }

    //->    The getters and setters for inject data and access data
    //->
    set name(value:string){
        this._name = value;
    }
    get name():string{
        return this._name;
    }
    set age(value:number){
        this._age = value;
    }
    get age():number{
        return this._age;
    }
    set address(value:string){
        this._address = value;
    }
    get address():string{
        return this._address;
    }
    set contact(value:string){
        this._contact = value;
    }
    get contact():string{
        return this._contact;
    }



    //We Have To Create these methods to set and get data if we use modern way to declare constructor without _
    /*getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(value: string) {
        this.address = value;
    }

    getContact(): string {
        return this.contact;
    }

    setContact(value: string) {
        this.contact = value;
    }*/

    public isEqual(student:Student) : boolean{
       return  student.name === this.name
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
    student.age=20

    console.log(student.age)
    console.log(student2.isEqual(student))

}

test();