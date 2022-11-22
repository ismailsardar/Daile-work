//javascript class

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
    static mycar(pra){
        console.log('BMW is my Fevrit...'+ pra);
    }
}

// Car.mycar('ismail');

class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
 
const manyCar = [
    new Model('Volvo', 2015),
    new Model('Tesla', 2019)

];
// console.log(typeof manyCar);
function anaterCars(manyCar) {

    for(let defrentMan of manyCar){
        // console.log(defrentMan);
        let clg = defrentMan.show();
        console.log(clg);
    }

}
anaterCars(manyCar);
// let myCar = new Model("Ford", "Mustang");

// console.log(myCar.show());





// class Person{
//     constructor(first, last){
//         this.firstName = first;
//         this.lastName = last;
//         // console.log('this is constructor');
//     }
//     app(city, dash){
//         return this.firstName + ' ' + this.lastName +' '+city+' '+dash;
//     }
//     display(){
//         console.log('This is Preants Class');
//     }
// } 

// const person1 = new Person('Ismail','Sardar');
// // const fullName = person1.app('Khulna','Bangladesh');
// // console.log(fullName);
// // console.log(typeof Person);

// class child extends Person{
//     demo(){
//         super.display()
//     }
// }

// const childoj = new child();
// childoj.demo();
// childoj.display();




// function ageCo() {
//     let age = 100;

//     return function() {
//         age--;
//         console.log(age);
//     };
// }

// let ageLas = ageCo();
// ageLas();
// ageLas();
// ageLas();
// ageLas();
// ageLas();
// ageLas();
// console.dir(ageLas)


// function X() {
//      let a = 10;
//      return function Y() {
//          let b = 25;
//          b = 65;
//          return function Z() {

//              let c = 31;
//              return (c + b + a);

//           };
          
//         };
//       }

// let fanY = X();
// // console.log(fanY);
// let fanZ = fanY();

// console.dir(fanZ)

// function init(){
//     let fname = 'Closer';

//     function invok() {
//         console.log(fname);
//     }
//     return invok;

// }

// let c = init();
// console.dir(c)