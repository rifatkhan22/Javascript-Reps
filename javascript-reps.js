//Part 2====Javascript Reps=======
for(i=0;i<=20;i++) {
    //console.log(i)
}
//Write a for loop that will log only the even numbers
// in 0 through 200.
for(i=0;i<=200;i+=2) {
    //console.log(i)
}
//fizzbuzz
for(i=1;i<=100;i++) {
    if(i%3===0 && i%5===0) {
        //console.log("FizzBuzz")
    }else if(i%5===0) {
        //console.log("Buzz")
    }else if(i%3===0) {
        //console.log("Fizz")
    }else {
       //console.log(i)
    }
}
//Wild Wild Life 
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1)
    plantee[2]=50001
    //console.log(plantee[2])
//2)
    wolfy[3]= "Gotham City"
    //console.log(wolfy[3])
//3)
    dart.push("Hawkins")
    //console.log(dart)
//4)
    wolfy.splice(0,1,"Gameboy")
    //console.log(wolfy)

 //===Yell at Ninja turtles

const ninjas = ["donatello","leonardo","raphael","michaelangelo"]
//     for(i=0;i<ninjas.length;i++) {
//         ninjas[i] = ninjas[i].toUpperCase()
//     }
   // console.log(ninjas)
   const newArr =[]
    for(let element of ninjas) {
        newArr.push(element.toUpperCase())
    }
    //console.log(newArr)

////====Methods revisited favMovies
 const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 //console.log(favMovies.indexOf('Titanic'))
 //1)
    //favMovies.sort()
    //sorted alphabetically and mutated the array and returned it

//2)
    favMovies.pop()
   //remove element from the end and returns it
//3)
    favMovies.push("Guardians of the Galaxy")
    //console.log(favMovies)
    //add elements to end of array and return new lenght of array

//4)
    //console.log(favMovies.reverse())
    //reverse the array-not perm

//5)
    favMovies.shift()
    //remove first element and return it-perm

//6)
   favMovies.unshift("chicken","Hi")
    //add new  elements to the front of array and return new array length
    //perm

//7)
    let num = favMovies.indexOf('Django Unchained')
    favMovies.splice(num,1,"Avatar")
    //console.log(favMovies)
    //perm mutation (start,deletecount,what u want to add)

//8)
    let num2= favMovies.length
    let num1= (favMovies.length)/2
    let halfArray= favMovies.slice(num1,num2)
    //returns new array-doesn't perm mutate

//9) returns a new array of (start,end) doesn't include end

//10)
    //console.log(halfArray)

//11)
    console.log(favMovies)
    console.log(favMovies.indexOf('Fast and Furious'))
    //get a value of -1 meaning the element is not in the array doesn't exist in the array

//12) const creates constant reference to array
//does not define constant array 
//we can change elments within constant array


//========Where is Waldo=======

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                     ["Lucinda", "Jacc", "Neff", "Snoop"],
                     ["Petunia", ["Baked Goods", "Waldo"]]];

    ///1) Remove Eggbert
        whereIsWaldo.splice(1,1)
        //console.log(whereIsWaldo)
    //2) Change neff to no one
         whereIsWaldo[1][2] = "No One"
        //console.log(whereIsWaldo[1][2])
    //3) access and console.log waldo
        //console.log(whereIsWaldo[2][1][1])


//=====Excited Kitten

const kittyTalk= ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]
for(i=1;i<=20;i++) {
    if(i%2===0) {
        let meow = Math.round(Math.random()*3) 
        //console.log(kittyTalk[meow])
    } else  {
    //console.log("Love me, pet me! HSSSSSSS!")
    }
}

//=====Find the Median==========

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//Expected output:
//=> 15
let median
let temp
nums.sort()
temp=nums.length
//go into the if statement if temp is odd 
//this makes temp an int and one of the indexes to be used for median
if(temp%2 !== 0) {
    temp=Math.floor(temp/2)
}else {
    temp = temp/2
}

//we need to check if the length is even or odd
//if it's odd we just use nums[temp]
//if it's even we need to use (nums[temp]+ nums[temp+1])/2
if(nums.length %2  === 0 ) {
    median= ((nums[temp] + (nums[temp +1]))/2)
}else {
    median = nums[temp]
}

console.log(median)

//easier way
// nums.sort()
// console.log(nums[Math.floor(nums.length/2)])
