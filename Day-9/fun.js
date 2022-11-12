function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const rakib = new Person ('Rakib', 'Islam', 23);
  const dash = new Person ('Dash', 'Thoger', 34);
  
  // rakib.natib = 'Bangla';
  
  // console.log(rakib);
  // console.log(dash);
  
  Person.prototype.nasleti = 'Bangla';
  
  console.dir(Person);
//   console.log(rakib.nasleti)
//   console.log(dash.nasleti)

const strin = new String('ismail');

console.log(strin);

// String.prototype.fun = 'This is fun...';

// let x = 'Rikeb';

// console.dir(x);

