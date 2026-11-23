let cl = console.log;

// Array 1 (Numbers)

const numb1 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Sum of all numbers

let result = numb1.reduce((acc,cv)=>{
    acc = acc +cv;
    return acc;
})
cl(result)


// 2. Product of all numbers

let result2 = numb1.reduce((acc,cv)=>{
    acc = acc * cv 
    return acc;
})
cl(result2);

// 3. Find the maximum number
let result3 = numb1.reduce((acc,cv)=>{
    if(cv > acc){
        return cv;
    }else{
        return acc;
    }
    
})
cl(result3);
// 4. Find the minimum number

let result4 = numb1.reduce((acc,cv)=>{
    acc = acc < cv ? acc : cv; 
    return acc;
});
cl(result4);

// 5. Count how many numbers are even
let  result5 = numb1.reduce((acc,cv)=>{
    if(cv % 2 ===0){
        return acc + 1;
    }else{
        return acc;
    }
}, 0);
cl(result5);



// 6. Count how many numbers are odd
let result6 = numb1.reduce((acc,cv)=>{
    if( cv % 2 !==0){
        return acc + 1;
    }else{
        return acc;
    }
},0);
cl(result6);

// 7. Find average of numbers

let result7 = numb1.reduce((acc,cv)=>{
 return acc + cv;
},0) / numb1.length;
cl(result7);


// 8. Find difference between sum of even and odd numbers

// 9. Create object { greaterThan50, lessOrEqual50 }
// 10. Convert array into object { index: value }

let result10 = numb1.reduce((acc,cv,i)=>{
    acc[i] = cv;
    return acc;
},{})
cl(result10);

// Array 2 (Products)
const products1 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Calculate total cart value

let result11 = products1.reduce((acc,cv)=>{
    acc = acc + (cv.price * cv.qty)
    return acc;
},0)
cl(result11);
// 12. Find product with highest price
let result12 = products1.reduce((acc,cv)=>{
     return acc.price > cv.price ? acc: cv
});
cl(result12);
// 13. Find product with lowest qty
let result13 = products1.reduce((acc,cv)=>{
    return acc.price < cv.price ? acc: cv
})
cl(result13);
// 14. Group products into { expensive, cheap }
// 15. Create object { productName: totalValue }

let result15 = products1.reduce((acc,cv)=>{
    acc[cv.name] = cv.price * cv.qty;
    return acc;
},{});
cl(result15);

// Array 3 (Students)
const students1 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Calculate total marks of each student
// 17. Find student with highest total marks
// 18. Find student with lowest average marks
// 19. Create object { studentName: averageMarks }
// 20. Count students scored > 250 total

// Array 1 (Numbers)
const numbers2 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Find first number > 50

let f1 = numbers2.find((cv)=>{
    return cv > 50;
});
cl(f1);

// 2. Find first even number
let f2 = numbers2.find((cv)=>{ 
return cv % 2 === 0;
})
cl(f2);

// 3. Find first odd number
let f3 = numbers2.find((cv)=>{
 return cv % 2!== 0;
})

cl(f3);

// 4. Find first number divisible by 5

let f4 = numbers2.find((cv)=>{
    return cv % 5 === 0;
})
cl(f4);

// 5. Find first number which is prime
// 6. Find first number < 10
let f6 = numbers2.find((cv)=> {
    return cv < 10;
})
cl(f6);

// 7. Find first number which is multiple of 11
// 8. Find first number whose square > 100

let f8 = numbers2.find((cv)=> {
    return cv * cv > 100;
});
cl(f8);

// 9. Find first number between 20 and 50
let f9 = numbers2.find((cv)=>{
    return  cv > 20 && cv < 50
});
cl(f9);

// 10. Find first number not divisible by 2 or 3
let f10 = numbers2.find((cv)=> cv % 2 !== 0 && cv % 3 !== 0)
cl(f10);

// Array 1 (Numbers)
const numbers5 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Check if every number > 0
  let result16 = numbers5.every((ele)=>{
    return ele > 0 ;
  });
  cl(result16);

// 2. Check if every number is even
let result17 = numbers5.every((ele)=>{
  return ( ele%2===0 )
})
cl(result17);

// 3. Check if every number is odd
let result18 = numbers5.every((ele)=>{
    return ( ele%2!== 0)
})
cl(result18);

// 4. Check if every number < 150
let result19 = numbers5.every((ele)=>{
    return (ele < 150 )
})
cl(result19)

// 5. Check if every number divisible by 5
let result20 = numbers5.every((ele)=>{
    return (ele % 5 === 0)
})
cl(result20);

// 6. Check if every number < 200
let result21 = numbers5.every((ele)=>{
    return (ele < 200)
})
cl(result21)

// 7. Check if every number is prime
 
// 8. Check if every number > 10
let result22 = numbers5.every((ele)=>{
    return (ele > 10)
})
cl(result22);

// 9. Check if every number < 100

let result23 = numbers5.every((ele)=>{
    return (ele < 100)
})
cl(result23);

// 10. Check if every number not divisible by 3
let result24 = numbers5.every((ele)=>{
    return (ele % 3 !== 0)
})
cl(result24);

// Array 2 (Products)
const products5 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Check if every product price > 100
 let result25 = products5.every((ele)=>{
    return (ele.price > 100)
 })
 cl(result25);

// 12. Check if every product qty > 0
let result26 = products5.every((ele)=>{
    return (ele.qty > 0)
})
cl(result26);

// 13. Check if every product name length > 3
let result27 = products5.every((ele)=>{
    return (ele.name.length > 3)
})
cl(result27);

// 14. Check if every product total value (price*qty) > 100
let result28 = products5.every((ele)=>{
    return (ele.price.qty > 100)
})
cl(result28);

// 15. Check if every product price < 1500
let result29 = products5.every((ele)=>{
    return (ele.price < 1500)
})
cl(result29);

// Array 3 (Students)
const students5 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Check if every student total marks > 200
// 17. Check if every student average marks > 60

// 18. Check if every student name length > 3
let result31 = students5.every((ele)=>{
    return ele.name.length > 3
}) 
cl(result31);

// 19. Check if every student scored < 100 in all subjects
let result32 = students5.every((ele)=>{
    return ele.marks.every((m)=> m < 100) ;
});
cl(result32);

// 20. Check if every student total marks even

// Array 4 (Words)
const words5 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Check if every word length > 3
let result33 = words5.every((ele)=>{
    return (ele.length > 3);
})
cl(result33);

// 22. Check if every word contains letter "a"
let result34 = words5.every((ele)=>{
    return ele.includes("a")
})
cl(result34);

// 23. Check if every word starts with a lowercase letter

// 24. Check if every word ends with a vowel

// 25. Check if every word is unique (true/false)

// Array 5 (Transactions)
const transactions5 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Check if every transaction amount > 0
let result35 = transactions5.every((ele)=>{
    return (ele.amount > 0)
})
cl(result35);

// 27. Check if every credit transaction amount > 100
let result36 = transactions5.filter((ele)=>{
    return ele.type.includes("credit")
}).every((params)=>{
    return params.amount > 100
})
cl(result36)

// 28. Check if every debit transaction amount < 500
let result37 = transactions5.filter((params)=>{
    return params.type.includes("debit")
}).every((ele)=>{
    return ele.amount < 500
})
cl(result37);

// 29. Check if every transaction type is string

// 30. Check if every transaction id < 10
let result38 = transactions5.every((ele)=>{
    return (ele.id < 10)
});
cl(result38);

// FILL – 30 Tasks

// Array 1 (Numbers)
const numbers6 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Fill all elements with 0
let result39 = [...numbers6].fill(0);
cl(result39);

// 2. Fill first 3 elements with 100 

// 3. Fill last 2 elements with -1
let result40 = [...numbers6].fill(-1,-2);
cl(result40);

// 4. Fill elements from index 2 to 5 with 50
let result41 =[...numbers6].fill(50,2,6);
cl(result41);

// 5. Fill elements from index 0 to 4 with 9
let result42 =[...numbers6].fill(9,0,4)
cl(result42);

// 9. Fill middle 3 elements with 999
let result43 = numbers6.fill(999,3,6)
cl(result43);

// Array 2 (Products)

const products6 = ["Laptop", "Phone", "Tablet", "Headphones"];

// 11. Fill all product names with "Unknown"
let result44 = [...products6].fill("unknown")
cl(result44);

// 12. Fill first 2 products with "Gadget"
let result45 = [...products6].fill("Gadget", 0,2)
cl(result45);


// 13. Fill last product with "Accessory"
let result46 = [...products6].fill("Accessory",-1)
cl(result46);

// 14. Fill products from index 1 to 3 with "Device"
let result47 = [...products6].fill("Device",1,4)
cl(result47);

// Array 3 (Students)
const students6 = ["Aman", "Ravi", "Neha", "Simran"];

// 16. Fill all student names with "Anonymous"
let result48 = [...students6].fill("Anonymous")
cl(result48);


// 17. Fill first student name with "Student1"
let result49 = [...students6].fill("Student1",0,1)
cl(result49);

// 18. Fill last student name with "Student4"
let result50 = [...students6].fill("Student4",3,4)
cl(result50);

// 19. Fill middle 2 student names with "TempName"
let result51 = [...students6].fill("TempName",1,3)
cl(result51);

// Array 4 (Boolean Array)
const flags6 = [true, false, true, false, true];

// 21. Fill all elements with false
let result52 = [...flags6].fill(false)
cl(result52);


// 22. Fill first 2 elements with true
let result53 = [...flags6].fill(true,0,2)
cl(result53);

// 23. Fill last 2 elements with true
let result54 = [...flags6].fill(true,3,4)
cl(result54);


// 24. Fill middle element with false
let result55 = [...flags6].fill(false,2,3)
cl(result55);


const mixed6 = [1, "a", true, 5, "b", false, 10];

// 26. Fill all numbers with 0

// 27. Fill all strings with "x"
// 28. Fill all booleans with true
// 29. Fill first 3 elements with null
let result56 = [...flags6].fill(null,0,3)
cl(result56);

// 30. Fill last 3 elements with undefined
let result57 = [...flags6].fill(undefined,-3)
cl(result57);


















