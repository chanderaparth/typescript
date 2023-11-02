// let a = 100;
// console.log(a);

// var a = 10;
// console.log(a);

// -- tostring -- //
// let x = 123;
// x.toString(); 
// (123).toString();
// (100 + 23).toString(); 
// console.log(x);
// let a;
 
// a = "hello";
// console.log(typeof(a));     // hello
// console.log((a));     // hello

// function addition(n1:number, n2:number) : number
// {
//     return n1 + n2;
// }

// let result = addition(10, 20);
// let result = addition(10, "20");

// console.log(result);



// let arr: string[] | number[] = [10,20,3.5,"hello", "skill", true]


// let arr: [number,  string, boolean?] = [10,20,"hello", "skill"]

// arr.push(true);
// console.log(arr);

// type obj = {
//     name? : string | number,
//     age?: number,
//     email?: string
// }


// let person: obj = {
//     name: 123,
//     age: 15
// }
// let person:{name?:string, age: number} = {
//     name: 'Hello',
//     age: 15
// }

// person.email = "hello@test.in";
// person.password = 
// console.log(person);


// enum color {
//     red, green, blue
// }

// // let x = color.yellow
// let x = color.blue
// console.log(x);


// interface Person {
//     name: string;
//     age: number;
//   }
  
//   function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
//   }
  
//   let person = {
//     name: "Max",
//     age: 27
//   };
  
//   printPersonProperty(person, "name"); 
//   printPersonProperty(person, "age");

// function getTime(): number {
//     return new Date().getTime();
//   }
  
//   console.log(getTime());

// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// };

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };

// console.log(car);

// interface House {
//     sqft: number;
//     yard?: {
//       sqft: number;
//     };
//   }
              
//   function printYardSize(house: House) {
//     const yardSize = house.yard?.sqft;
  
//     if (yardSize === undefined) {
//       console.log('No yard');
//     } else {
//       console.log(`Yard is ${yardSize} sqft`);
//     }
//   }
              
//   let home: House = {
//     sqft: 500
//   };
              
//   printYardSize(home);

// class NamedValue<T> {
//     private _value: T | undefined;
  
//     constructor(private name: string) {}
  
//     public setValue(value: T) {
//       this._value = value;
//     }
  
//     public getValue(): T | undefined {
//       return this._value;
//     }
  
//     public toString(): string {
//       return `${this.name}: ${this._value}`;
//     }
//   }
        
//   const value = new NamedValue<number>('myNumber');
  
//   value.setValue(10);
  
//   console.log(value.toString());

// let x: unknown = 'chandera parth';

// console.log((<string>x).length);








