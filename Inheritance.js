const BaseClass = class{
    data1 = "SomeValue";
    data2 = 2000;

    constructor(){
        console.log("Base class is one that extends to another");
    }

    toString() {
        return `${this.data1} and ${this.data2}`;
    }

    display = () => console.log("Base class Function");
}

class DerivedClass extends BaseClass{
    data3 = true;
    
    displayAnother = () => console.log(this);

    //reimplement the base method: method overriding....
    toString(){
        let data = super.toString();
        data += this.data3; 
        return data;
    }
}

const data = new DerivedClass();
data.display();//From the base class
data.displayAnother();//From the derived class. 
console.log(data.toString()); 
