//OOPS : OBJECT ORIENTED PROGRAMMING
// OOPS is based on the concept of objects.
// Class are the buleprint from which we can create new objects. Whereas Instances are the new Objects created from the class. Like a real house is created from blueprint.

// FOUR FUNDAMENTALS OF THE OOPS
// 1. ABSTRACTION
// 2. ENCAPSULATION
// 3. INHERITANCE
// 4. POLYMORPHISM

// 1. ABSTRACTION
// Ignoring or hiding details that does not matters and allowing us to get an overview of the thing we are implementing, instead of messing with details that does not really matters to our implementation.

// EXAMPLE :
class phone1{
    charge;
    volume;
    voltage;
    temprature;
    volumeBtn();
    verifyPassword();
    verifyTemp();
    vibrate();
    frontCameraOpenProcess();
    backCameraOpenProcess();
    soundIncreaseProcess();
} //NOT NECESSARY

class phone2{
    charge;
    volume;
    homeBtn();
    volumeBtn();
    useCamera();
} // NECESSARY


// 2. ENCAPSULATION
// Keeping properties and methods private inside the class, so they are not accessible from outside the class.

class phone3{
    _pincode;
    _location;
    _imeiNumber;
    _GetImEINumber();
    _GetPincode();
    _GetLocationOfTheUser();
}

// 3. POLYMORPHISM
// Poly means "many" and Morphism means "forms". One thing having multiple forms is called Polymorphism.

function add(a,b){
    console.log(a+b);
}

function add(a,b,c){
    console.log(a+b+c);
}

add(8,9);
add(8,9,1);

// 4. INHERITANCE
// Making all the properties and methods of a certain class available to its child class, forming a parent child relationships among classes. This allows us to reuse common logic and to model real world relationship.
class parent{
    name = "Abhishek";
    
    GiveName(){
        console.log(this.name);
    }

    GiveName();
    // dance(); ERROR
}


class parent extends child{
    constructor(){
        super(name);
    }

    dance(){
        console.log("I am dancing");
    }

    GiveName();
    dance();
}
