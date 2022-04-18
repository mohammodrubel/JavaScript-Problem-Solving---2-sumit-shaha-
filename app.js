// // প্রথমে কতো নাম্বার ইন্ডেক্সে রুবেল আছে 
// // এবং রুবেল কতোবার ব্যাবহার করা হয়েছে 

// const rbl = "t is a long rubel fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content rubel', Rubel it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model rubel, and a search for"

// const match = rbl.match(/rubel/gi)
// console.log(match)
// let position = rbl.search(/rubels/i)
// console.log(position) //যদি কনসলে না পাওয়া ্ যেত তাহলে মাইনাস ওয়ান হতো 
// position = position >= 0 ? position : 'data not found' // টার্নারি ওপারেটরের মাদ্ধমে ডাটা নট ফাউন্ড আসছে মাইনাস ওয়ান না এসে 
// console.log(position)

// // আমাদের একটা ফাংশন থাকবে , সেই ফাংশনের মদ্ধে একটা এরে থাকবে  এবং সেকেন্ট পেরামিটারে একটা লেটার থাকবে আমাকে রিটার্ন করতে হবে সেটার পজিশন অথবা নটফাউন্ড , সি দুইবার আছে প্রথম পজিশন টা রিটার্ন করতে হবে 
// // function rbl ([a,b,c,d,e,c],'c'){
// // এবং রিটার্ন করতে হবে পজিশন অথবা নট ফাউন্ড 
// // }

// function liniearSearch(arr,val){
//     for(var i = 0 ; i<arr.length;i++){
//         if(arr[i] === val){
//             return i
//         }
//     }
//     return 'data not found'
// }

// console.log(liniearSearch(['a','b','c','d','e','c'],'e'))


// function normal (arr,val){
//     const extra =arr.length
//     for(var i = 0 ; i<extra;i++){
//         if(arr[i] === val){
//             return i
//         }
//     }
//     return 'data not found , please try again latter'
// }

// console.log(normal(['a','b','c','d','e','c'],'bc'))

// // একটা এরে থেকে কিভাবে সবচেয়ে বড় স্ট্রিং খুজে বের করবো এবং ইনডেক্স নাম্বার কতো তা খুজে বের করবো 

// function logngArray (myarray){
//     let longArray = '';

//         for(single of myarray){
//             if(single.length > longArray.length){
//                 longArray = single
//             }
//         }
//     return [ logngArray , myarray.indexOf(longArray)]
// }

// console.log(logngArray['larn sumit','akash','larn with sumit','batash','nodinala','khalbil'])


function normalFunction (names){
    let longArray = '';
    
        for(nam of names){
            if (nam.length > longArray.length){
                longArray = nam
            }
        }
    return ([longArray , nam.indexOf(longArray)])
}
console.log(normalFunction(['rubel hasan','fardin tazbeed','himel aksar aksar','abu kashem']))



// এক থেকে একশো পর্জন্ত কোন সংখ্যা গুলো ৩ ও ৫ এবং তিন ও পাচ উভয় সংখা দাঁরা বিভাজ্য তার বের করো 

// function fiizBazz (number){
//     for(var i = 0; i <=number ; i++ ){
//         if(i % 15 === 0){
//             console.log(`${i} is fiizbazz`)
//         }
//         else if(i % 3 === 0){
//             console.log(`${i} is fiiz`)
//         }
//         else if (i % 5 === 0){
//             console.log(`${i} is bazz`)
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// fiizBazz(100)









