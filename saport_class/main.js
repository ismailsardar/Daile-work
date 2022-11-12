
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {weight:employeeWeight}=employee.specification;
// const {brand}=employee.specification.watch
// console.log(weight)
// console.log(brand)

// console.log(employeeWeight)

// const employeeMachine=employee.machine;
const employeeLanguage=employee.languages[employee.languages.length-1]
// console.log(employeeMachine)
// console.log(employeeLanguage)
// const {machine,ide,languages,specification}=employee

// console.log("=======>",machine,languages,specification)
// swapping

// let first=15;
// let second=20;
//  [first,second]=[second,first]

// wrong approach
// second=first;
// first =second;
// let temp=first;
// first=second;
// second=temp;

// console.log(first,second);

// Destructuring
const numbers=[25,35,89]
const[,,z]=numbers
// const [,,third]=numbers
// console.log(z)

const nayokes=(nayak1,nayak2)=>{
    return [nayak1,nayak2]
}
const nayokes1=(nayak1,nayak2)=>{
    return {nayak1,nayak2}
}
const names1=nayokes1("ahmad","kalam")
// console.log(names1)
const {nayak1,nayak2}=names1
console.log(nayak1)

// const [chacha]=nayokes("abul","kabul");
// const names=nayokes("abul","kabul");
// console.log(chacha)
// console.log(names)