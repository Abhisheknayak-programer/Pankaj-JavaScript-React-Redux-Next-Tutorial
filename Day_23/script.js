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
    homeBtn();
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