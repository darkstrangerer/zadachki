// let num = 0;
// let num2 = 0;
// function factorial (num) {
//     num2 = num;
//     if (num2 < 1) {
//         return 'Error'
//     }
//     else {
//         while (num2 > 1) {
//         num2 -= 1;
//         num *= num2;
//         }
//     }
//     return num;

// }

// console.log(`Factorial is ${factorial(7)}`);


// let a = 4;
// let b = 'youtube';
// console.log(b / a);
// console.log(typeof b);





// console.log(parseInt(0xff));
// console.log(parseInt(0xff, 8));
// console.log(parseInt(0xff, 2));

// console.log(parseInt('12 hello'));
// console.log(parseInt('hello 12'));

// console.log(parseFloat(3.14));
// console.log(parseFloat(314e-2));

// let s = 1 + 'но' + ' яблоко';
// console.log(s);

// console.log (3 - '2');


// let y = [2,7,9,6,0];
// console.log(y.length);

// let j = 12.001;

// console.log(Math.ceil(j));


// let gg = "головкасукажопачленебланпетухмудиларукаблудссанияочкоблядунвагинасукаебланищевлагалищепердундрочила";
// console.log(Array.from(gg));
// console.log(gg.at(-2));

// let sum = (a, b) => a * b;
// console.log(sum(100,2,3,4,5,6));

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  

// console.log( pow(2, 3) );
// console.log('никита гейская штука');



// let stroka = "Я изучаю JavaScript";
// Array.from(stroka);
// console.log(stroka [2]);
// console.log(stroka [0]);
// console.log(stroka [-2]);


// let str = "Я изучаю JavaScript";
// let newstr = str.replace("изучаю", "изучил");
// let mostNewStr = newstr.replace("JavaScript", "Fronted");
// console.log(mostNewStr);


// let arr = ['cat', 'dog', 'parrot', 'horse'];
// console.log(arr.indexOf('dog'));


// let newArr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
// newArr.splice (0,1);
// newArr.splice (4,1);
// console.log(newArr);



// let ray = 0;
// let you = ray;





// let ab = '7.3'
// num = parseInt(ab)
// fl = parseFloat(ab)
// console.log(typeof(fl))




// fio = ['dima', 'samiy', 'luchsiy', 'na','svete']
// console.log(fio[2])
// delete fio[0]
// console.log(fio)





//  toy = [31, '20', 10, 'chicken', 9, 'fish', 10];

//  for (i=0;i<toy.length;i++) {
//   if (typeof toy[i] === 'number') {
    
//     toy.splice (i,1);
//   } 
//  } 
 
// console.log(toy);


let stroka = 'Я изучаю JavaScript'
console.log(stroka[0], stroka[2], stroka[18])


let hm = 'Я изучаю JavaScript'
let hmnew = hm.replace('аю', 'ил')
let prohmnew = hmnew.replace ('JavaScript', 'Frontend')
console.log(prohmnew)


let j = ['cat', 'dog', 'parrot', 'horse'];
console.log(j.indexOf('parrot'));


let mas = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
let k = mas.indexOf('parrot')
mas.splice (0, 1)
mas.splice(mas.length - 2, 2);
mas.splice(k, 1)
console.log(mas)



toy = [31, 20, 10, 'chicken', 9, 'fish', 10];

for (i=0;i<toy.length;i++) {
 if (typeof toy[i] === 'number') {
   
   toy.splice (i,1);
 } 
} 

console.log(toy);