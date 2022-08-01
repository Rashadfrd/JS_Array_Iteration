
// arr.forEach((val,i,array) => {
//     console.log(i+5);
// });
// console.log(arr)
// console.log(arr)

// let result = arr.map((value,index,array) => {
//     return (value+5);
// })
// console.log(result)

// let result = arr.filter((value,index,array)=>{
//     if (value<5) {
//         return value;
//     }
// })

// console.log(result);
// console.log(arr.concat(result).sort())

// let newArr = arr2.reduce((total,value,index,array)=>{
//     return (total+value);
// })
// let result = arr.reduce((total,value,index,array)=>{
//     return (total+value);
// },newArr)

// console.log(result);

// var result = arr.some((value)=>{
//     return value>5;
//  })
//  console.log(result); 
 
//  var result = arr.every((value)=>{
//     return value>5;
//  })
//  console.log(result);


// let result = console.log(arr.lastIndexOf(3));

    // console.log(arr)
    // let result = arr.indexOf(5);
    // arr[result] = 12;
    // console.log(arr)

    // let result = arr.find((value)=>{
    //     if (value>11) {
    //         return value;
    //     }
    // })

    // console.log(result);

    // console.log(arr.toString());
    
    let arr = [1,2,3,4,9,10,13,2,3,5,6,7];
    let arr2 = [15];

    // arr.push("dudus", 1);
    // console.log(arr);]
    
    // arr.unshift("lulus");
    // console.log(arr);

    // arr[arr.length] = "unqala";
    // console.log(arr);

    delete arr[0];
    console.log(arr);

    let newArr = arr.filter(Number);
    console.log(newArr);
    