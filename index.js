console.log('just looking like a wao');




//!creating multiple objects using factory function
//In factory function we use camelcase notation -> numberOfTeachers 

function createRectangle(len, bre) {
let rectangle = {
    length: len,
    breadth: bre,
    area: function() {
        console.log(this.length * this.breadth);

    }
};
return rectangle;
}

let rectangle1 = createRectangle(2, 3); //ye pehla object create karega, jisme length 2 aur breadth 3 hoga.
let rectangle2 = createRectangle(4, 5); //ye dusra object karega
let rectangle3 = createRectangle(6, 7); //similarly ye teesra

//!Add properties to the object
rectangle1.color = 'red';
rectangle2.color = 'blue';
rectangle3.color = 'green';
//Methods bhi properties hi hain, unko bhi remove kiya ja sakta hai

//!Removing a property from an object
delete rectangle1.color;
delete rectangle2.color;
delete rectangle3.color;

//Add or remove dono function mai same tarah se hi hota hai





//!creating multiple objects using constructor function
// In constructor function we use Pascalcase notation -> NumberOfTeachers
function CreateSquare(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.area = function() {
        console.log(this.length * this.breadth);
    }
}

let square1 = new CreateSquare(2, 3);
let square2 = new CreateSquare(4, 5);
let square3 = new CreateSquare(6, 7);


//? NEW CONCEPTS

//!Primitive vs Reference data types

//Primitive me value copy hoti hai
//b ko change karne se original a unaffected
//Dono independent hain
//Primitives: string, number, boolean, null, undefined, symbol

//*WHEREAS 
//Reference me address copy hota hai
//b ko change karne se original a bhi change ho jata hai
//Dono dependent hain
//Reference data types: objects, arrays, functions


//DYNAMIC NATURE OF OBJECTS which MEANS we can add or remove properties and methods from an object at runtime.
let person = {
    name: 'Amit',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }   
};


//!DYNAMIC NATURE OF OBJECTS Means Adding or Deleting.

//! Adding a new property
person.city = 'Sheohar';

//!Deleting a property
delete person.age;


//!Iterating over properties of an object using 
//for in loop, use with Object mainly  AND
//for of loop, use with array mainly


//Object Cloning. isko karne ke liye we have three methods, WHY Cloning, kyuki object mai reference data type hota hai, to agar hum ek object ko dusre variable mai assign karte hain, to dono variable same object ko point karte hain, isliye agar hum ek variable se object ke properties ko change karte hain, to dusre variable se bhi change ho jata hai, isliye hume cloning ki zarurat padti hai, taki hum ek naya object create kar sake, jo original object se alag ho aur uske properties ko change karne par original object unaffected rahe.

//!1. Iteration using for in loop
let original = {
    name: 'Amit',
    age: 30
};
let clone1 = {};
for (let key in original) {
    clone1[key] = original[key];
}

console.log(clone1); // Output: { name: 'Amit', age: 30 } ab clone 1 mai copied value store not refrence one.



//!2. Using Object.assign() method
let clone2 = Object.assign({}, original);

console.log(clone2); // Output: { name: 'Amit', age: 30 }, you achieve the same result using Object.assign() method, which is more concise and easier to read.


//!3. Using spread operator
let clone3 = {...original};

console.log(clone3); // Output: { name: 'Amit', age: 30 }, spread operator is the most modern and concise way to clone an object, it creates a new object and copies all the properties from the original object to the new object.


//!Multiple Object ko bhi ek object mai clone kar sakte hain using Object.assign() method, also we can do with using spread operator, we ignore doing this with for in loop as it not suitable or efficient for cloning multiple objects.

//!using Object.assign() method
let obj1 = { name: 'Amit', age: 30 };
let obj2 = { city: 'Sheohar', country: 'India' };
let obj3 = { profession: 'Developer' };

let clonedObj = Object.assign({}, obj1, obj2, obj3);

console.log(clonedObj); // Output: { name: 'Amit', age: 30, city: 'Sheohar', country: 'India', profession: 'Developer' }


//!using spread operator
let clonedObj2 = { ...obj1, ...obj2, ...obj3 };

console.log(clonedObj2); // Output: { name: 'Amit', age: 30, city: 'Sheohar', country: 'India', profession: 'Developer' }, spread operator is more concise and easier to read when cloning multiple objects.


//!Use of for loop on Array.
let heroes = ['Superman', 'Batman', 'Spiderman', 'Hulk', 'Thor'];

console.log(heroes [0]); 
console.log(heroes [1]); 
console.log(heroes [2]); 
console.log(heroes [3]); 
console.log(heroes [4]);                 

//output: Superman
//        Batman
//        Spiderman
//        Hulk
//        Thor

//?But this is Not the write way, Here we have to use loop, to iterate over the array, and print the elements of the array, we can use for loop, for of loop, for in loop, map loop, filter loop, reduce loop etc. but here we will use for of loop, which is the most modern and concise way to iterate over an array.

//!Using for loop
for(let idx=0; idx < heroes.length; idx++) {
    console.log(heroes[idx]);
}

//Output will be same: Superman
//                     Batman
//                     Spiderman
//                     Hulk
//                     Thor

//!THE MAIN AND THE BOSS WAY TO ITERATE OVER AN ARRAY IS USING FOR OF LOOP.
let cars = ['BMW', 'Audi', 'Mercedes', 'Tesla', 'Thar'];

for(let car of cars) {
    console.log(car);
}


//Here we used 'car' for individual cars or you can use any name, like 'vehicle', 'auto', 'model' 'element' etc. but we used 'car' for better understanding, and it will print all the elements of the array one by one, which is the most efficient way to iterate over an array.

//Output: BMW
//        Audi
//        Mercedes
//        Tesla
//        Thar

let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco'];
for (let city of cities) {
    console.log(city);
}

//output: New York
//        Los Angeles
//        Chicago
//        Houston
//        San Francisco


//?For given array find the Average Marks
let marks = [85, 90, 78, 92, 88, 98, 80];

let sum= 0;
for(let mark of marks) {
    sum = sum + mark;
}

let avg = sum / marks.length;
console.log(`Average Marks: ${avg}`); 

// Output: Average Marks: 87.28571428571429




//!push(), Add in end of Array.
let fruits = ['Apple', 'Banana', 'Mithai'];
fruits.push('Mango', 'Litchi' );
console.log(fruits);
//Output: ['Apple', 'Banana', 'Mithai', 'Mango', 'Litchi']

//!pop(), Array ke end se ek item to delete karta hai, aur us item ko return karta hai, agar array empty hai to undefined return karta hai.
let shoes = ['Nike', 'Adidas', 'Puma', 'RedTape'];
console.log(shoes);
//? Pop deleted value bhi return karta hai, to agar hume delete kiya hua item bhi chahiye to hum usko ek variable mai store kar sakte hain, aur usko print kara sakte hain.


let deletedShoe = shoes.pop();
console.log(shoes);
console.log(deletedShoe);


//!unshift(), Add elements in start of Array.
let colors = ['Red', 'Green', 'Blue'];
colors.unshift('Royal Blue', 'Purple');
console.log(colors);
//Output: ['Royal Blue', 'Purple', 'Red', 'Green', 'Blue']


//!shift(), Array ke start se sirf ek item to delete karta hai, aur us item ko return karta hai.
let languages = ['JavaScript', 'Python', 'Java', 'C++'];
console.log(languages);
let deletedLanguage = languages.shift();
console.log(languages);
console.log(deletedLanguage);



//!to String(), Array ko string mai convert karta hai, original Array ko toString change nahi karta hai, toString ek naya string return karta hai, jiske andar aaray ke sare elements comma se separated hote hain. Original array same to same intact rehta hai usme koi change nahi hota hai.

let animals = ['Dog', 'Lion', 'Elephant', 'Tiger'];
console.log(animals);
console.log(animals.toString());
console.log(animals);


//!concat(), do ya do se zyada arrays ko ek saath jodta hai, aur ek naya array return karta hai, original arrays same to same rahta ye usko change nahi kata hai.

let marvelHeroes = ['Ironman', 'Captain America', 'Thor'];
let dcHeroes = ['Superman', 'Batman', 'Aquaman'];

let Heroes = marvelHeroes.concat(dcHeroes);
console.log(Heroes); // Output: ['Ironman', 'Captain America', 'Thor', 'Superman', 'Batman', 'Aquaman']


//!slice(), original Array ke andar change nahi karta hai, ek new array return karta hai. 
//?slice(startldx, endldx)

let numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers.slice(2,5))  //output: [30, 40, 50].

//!splice(), change original array it add, remove and replace elements all this by using splice.

//?splice(startldx, deleteCount, newElements, ...)

let prices = [100, 200, 300, 400, 500];
prices.splice(1, 2, 350);
console.log(prices); // Output: [100, 350, 400, 500]


//!map(), it gives a new array by applying a function on each element of the original array, it does not change the original array.
let arr1 = [10, 20, 30, 40, 50];

let a = arr1.map((element, index, array) =>{
    // console.log(element, index, array);
    return element + 1;
});

console.log(a); // Output: [11, 21, 31, 41, 51]
console.log(arr1); // Output: [10, 20, 30, 40, 50] original array unchanged.

//!filter(), it gives a new array by applying a condition on each element of the original array, it does not change the original array.
let arr2 = [11, 21, 31, 41, 51];

let b = arr2.filter((tululu) => {
    return tululu > 21;

});

console.log(b); // Output: [31, 41, 51]
console.log(arr2); // Output: [11, 21, 31, 41, 51] original array unchanged.


//!reduce(), it gives a single value by applying a function on each element of the original array, it does not change the original array.
let arr3 = [1, 2, 3, 4, 5];

let c = arr3.reduce((hulu, tulu) => {
    return hulu + tulu;
});

console.log(c); // Output: 15



//!Function declaration, isko invoke ham function declaration se pehle bhi kar sakte hai aur baadh mai bhi kar sakte hai.
function run () {
    console.log('Running');
}

run(); // Output: Running


//*Function aasignment has two types, Named Function assignment and Anonymous Function assignment, in both cases we assign a function to a variable, but in named function assignment we give a name to the function, whereas in anonymous function assignment we do not give a name to the function, and we can invoke the function using the variable name. 
//todo but in named function assignment we cannot invoke the function before the assignment, whereas in anonymous function assignment we can invoke the function before the assignment, because it is hoisted to the top of the scope.
//!Named Function assignment, Named function assignment me hum function ko ek variable ke andar assign karte hain, aur us variable ke through function ko call karte hain, isko invoke ham named function assignment se pehle nahi kar sakte hai.
let stand = function walk() {
    console.log('Walking');
}

stand(); // Output: Walking

//!Anonymous Function assignment
let stand2 = function() {
    console.log('walking');
}

stand2(); // Output: walking


//!Rest operator means ... ,(three dots)
function garda(...args) {
    console.log(args);
}

garda (1,2,3,4,5,6,7,8,9);  //output [1, 2, 3, 4, 5, 6, 7, 8, 9]

//rest operator mai aap jo bhi input ke andar doge wo sara ka sara array ke form mai, args naam ke variable ke andar store ho jayega jo ki ek array hai.


//?New example of Rest operator (...)
function thik(num, val, ...args) {
    console.log (num, val, args);
}

thik(7,14,21,28,35,42,49,56,63,70);

//is case num, ke andar 1 chala jayega aur val ke andar 14 aur args ke andar bache hue sare value aa jayegi.
//output: 7 14 [21, 28, 35, 42, 49, 56, 63, 70]

//!Default Parameters, function ke parameters ke andar default value assign karna, agar function call karte waqt hum us parameter ke liye value nahi dete hain to wo default value use karta hai, aur agar hum us parameter ke liye value dete hain to wo value use karta hai, default parameters ko hum function declaration ke andar hi assign kar sakte hain. in case jab aapke user ke value pass nahi kari then you want to use a default value, to aap default parameters ka use kar sakte hain.
function interest(principal, rate=5, time =2) {
    return (principal * rate * time) / 100;
}

console.log(interest(5000, 6, 3)); // Output: 900, yaha par humne rate aur time dono ke liye value pass kari hai, to wo value use karega.
console.log(interest(5000)); // Output: 500, yaha par humne rate aur time ke liye value pass nahi kari hai, to wo default value use karega, rate ke liye 5 aur time ke liye 2, to interest calculate hoke 500 aayega.
console.log(interest(5000, 7)); // Output: 700, yaha par humne rate ke liye value pass kari hai, to wo value use karega, time ke liye value pass nahi kari hai, to wo default value use karega, time ke liye 2, to interest calculate hoke 700 aayega.

//!Error Handling -> try, catch, finally
//try block ke andar hum wo code likhte hain jisme error aane ka possibility hota hai, agar try block ke andar error aata hai to wo error catch block ke andar catch ho jata hai, aur catch block ke andar hum us error ko handle karte hain, aur finally block ke andar hum wo code likhte hain jo try block ke andar execute hone ke baad hamesha execute hota hai, chahe try block ke andar error aaye ya nahi aaye.
try {
    console.log('ki man hai');
    hardwork(); //hardwork naam ka function defined nahi hai aur ham usko call kar rahe hai, to ye error throw karega, aur catch block ke andar catch ho jayega.
} catch (error) {
    console.log(error.name); //Output mai ye error ke name ko print karega like ki ye refrence error hai, ya syntax error hai etc.
    console.log('Error:', error.message); //Output mai ye error ke message ko print karega, like ki hardwork is not defined etc. jis bhi line mai error hoga us line ko print karega.
    console.log(error.stack); //agar aap output mai pura total message dekhna chahte hai, name aur message dono ek saath then aap sirf stack ka use kar sakte hain, to ye error ke name aur message dono ko print karega, whereas name ka agar aap use karenge then wo sirf aapko error ka name print kar ke dega and aap sirf message ka bhi use kar sakte hain agar aapko sirf wo line dekhna jisme error hai, aapko error ka type nahi dekhna ho then you can use message.
alert('Error has occured, but we are handling it gracefully, please wait while we fix the issue.'); //ye to ek alert box show karega user ko, jisme ye message hoga, aur user ko click karna padega ok button pe, tabhi wo alert box close hoga.
} finally {
    console.log('Finally block executed');
    //finally block ke andar likha hua code hamesha execute hota hai, chahe try block ke andar error aaye ya nahi aaye, to ye line hamesha print hogi, to finally block ka use hum us code ke liye karte hain jo hamesha execute hona chahiye, ham isme koi function bhi run karwa sakte hai if we want.
}

//!Code of Error Handling with try, catch, finally without coments, same upar wala code without comments, for better understanding and clarity.
try {
    console.log('ki man hai');
    hardwork();
} catch (error) {
    console.log(error.name);
    console.log('Error:', error.message);
    console.log(error.stack);
    alert('Error has occured, but we are handling it gracefully, please wait while we fix the issue.');
}finally {
    console.log('Finally block executed');
}

//catch() yaha round bracket ke andar hamne error variable liya hai, ham kuch bhi let kar sakte hain.
 



//!Agar HTML ka koi document likha hua hai and uske andar search karke koi element nikalna hai then there are many ways to do that.
//?Document: getElementById("jo id name hai likho in double quotes")
//?document.getElementsByTagName("p tag example ke liye p likho")
//?document.getElementsByClassName("jo bhi class hai likho")


//?document.querySelector(#hululu) -> hululu koi id hai in HTML code
//?document.querySelector(.hulu) -> //todo yaha hulu koi class hai in HTML code, agar hululu naam ke bahot class hai in document to ye sirf first class ko select karega, agar aapko sare class ko select karna hai to aap document.querySelectorAll(.hulu) ka use kar sakte hain, to ye sare class ko select kar ke ek array ke form mai return karega.

//?document.querySelector(p) -> p koi tag hai in HTML code
//?document.querySelectorAll(".koi sa bhi class ka name")


//!Ek web page already and usme update karna hai existing content ko, to uske liye hum innerHTML, innerText, textContent ka use karke aap us element ko get karke then usme update karke set kar sakte hai. so it's all about update existing content.


//todo, innerHTML, innerText, textContent. ye sab DOM manipulation ke concepts hain, jisme hum HTML elements ke andar ke content ko manipulate karte hain, inka use hum tab karte hain jab hume kisi element ke andar ke content ko change karna hota hai, ya usko read karna hota hai. ye sab properties hume element ke andar ke content ko access karne aur manipulate karne me help karti hain.
//todo innerHTML, ye get aur set karti hai HTML content ko

//todo let suppose kisi tag ke andar ek aur tag hai example niche mention hai.
//<p>Chandra sekhar aajad was a <b>great freedom fighter</b> </p>
//todo then is tarah ke case mai innerHTML ka agar use karenge to get p tag then wo pura text return karega aur p tag ke andar present b tag ko wo render karke return karega. whereas agar ham textcontent ya fir innerText ka use karenge then ye dono tag p tag ke andar ke sare text ko to return karega hi but also uske andar present wo b tag ko bhi as it as print kar dega like a normal text like this Chandra sekhar aajad was a <b>great freedom fighter</b>
//todo p tag ko print kara by using innerText and textcontent then you can see ye b tag ko as a text print karke de diya hai.

//todo innerText aur textContent ye dono get aur set karti hai text content ko, dono me thoda sa difference hai, innerText sirf visible text ko return karta hai, jabki textContent poora text content return karta hai, chahe wo visible ho ya hidden. to agar aapko sirf visible text chahiye to aap innerText ka use kar sakte hain, aur agar aapko poora text content chahiye to aap textContent ka use kar sakte hain.

//todo innerText, Element ke andar ka sirf visible text return karta hai. jis bhi element ke andar display hidden set hoga wo element inner text ke andar visible nahi hoga.
//todo textContent, Element ke andar ka poora text content return karta hai (visible + hidden).



//!Adding new element, in HTML using JavaScript, to add new element in HTML using JavaScript, we use createElement() method to create a new element, then we can use appendChild() method to add that element to the DOM. for example, if we want to add a new paragraph to the body of the HTML document, we can do it like this.
let hururu = document.createElement('p'); //ye ek new paragraph element create karega
hururu.innerText = 'This is a new paragraph added using JavaScript.'; //ye new paragraph ke andar ka text set karega
document.body.appendChild(hururu); //ye new paragraph ko body ke andar add karega, to ye line execute hone ke baad aapko HTML document ke end me ek new paragraph dikhai dega jisme ye text hoga "This is a new paragraph added using JavaScript."
   
// lets verify ki paragraph add hua hai ya nahi, so print it to console
console.log(hururu); // Output: <p>This is a new paragraph added using JavaScript.</p>



//*we can also add new element in a existing element like adding something under span tag in a pre existing p tag. now let suppose us element ka class student hai by the way we can do the same for id and tag.
let fururu = document.querySelector('.Freedomfighter'); //ye class student ke andar ke element ko select karega in a existing document, agar us class ke andar multiple element hai to ye sirf first element ko select karega.
let newSpan = document.createElement('span'); //ye ek new span element create karega
newSpan.innerText = 'This is a new span added inside the Freedomfighter class.'; //ye new span ke andar ka text set karega
fururu.appendChild(newSpan); //ye new span ko student class ke andar add karega, to ye line execute hone ke baad aapko student class ke andar ek new span dikhai dega jisme ye text hoga "This is a new span added inside the Freedomfighter class."

console.log(newSpan); // Output: <span>This is a new span added inside the Freedomfighter class.</span>


//!create a Text Node, text node kisi bhi text ko existing element ke andar add kar deta hai, to agar ham text node ka use karke text ko add kar sakte hai then fir kyu ham createElement ka use karke pahle ke tag create karte hai fir us tag mai text insert karte hai and then fir tag ko text ke sath existing element or tag ke andar insert karte hai, and eventually wo text browser par visible hota hai.

// Jab hum Text Node directly insert kar sakte hain, to phir createElement('span') kyu use karte hain?
//Reason to do that.
// createElement Yeh ek HTML element banata hai.
// Isme ham;
// class add kar sakte ho
// id de sakte ho
// style laga sakte ho
// aur andar text ya HTML daal sakte ho
// Isliye element powerful hota hai.
//?Whereas Text Node sirf plain text insert karta hai.

//!code for text node.
//<p id="competation">The world is highly competitive.</p>  , ye line HTML document ke andar hai.
let tururu = document.createElement('p');
tururu.textContent = 'This is a new paragraph created using createElement and textContent.'; //ye new paragraph ke andar ka text set karega
competation.appendChild(tururu); //output: <p>This is a new paragraph created using createElement and textContent.</p>

console.log(tururu); // Output: <p>This is a new paragraph created using createElement and textContent.</p>

//todo line 468 and 470 is giving same output, I saw by doing.

//!We can also do text node by this, by love 
let myParagraph = document.createElement('p'); //ye ek new paragraph element create karega
myParagraph.textContent = 'This is a new paragraph created using createElement and textContent.'; //ye new paragraph ke andar ka text set karega
// freedomfighter.appendChild(myParagraph); //?ye new paragraph ko Freedomfighter class ke andar add karega, to ye line execute hone ke baad aapko Freedomfighter class ke andar ek new paragraph dikhai dega jisme ye text hoga "This is a new paragraph created using createElement and textContent."


//!Remove an element from the DOM.
//*parent.remove child (child element) //Syntax

//to remove an element hame parent element aur child element jisko remove karna hai wo pata hona chahiye.

//aur gar aap ko parent element nahi pata chal raha hai to aap directly bhi delete or remove kar sakte hain.

//*child.parent.remove(yaha child element ka name aayega)


//!Change in style or CSS using JavaScript by DOM.

// .style.backgroundColor = 'red';   //? iska use karke hum sirf kisi ek means single property ko change kar sakte hai ek baar mai.
// .cssText //? is se ek bar mai multiple properties ko change kar sakte hai.
// .setAttribute //? is se bhi ek bar mai multiple properties ko change kar sakte hai but iska ek aur fayda hai ki style ke alawa bhi ham sur bhi ids aur class ka naam add kar sakte hai.

// .className = 'className'
// classList.add('className')
// classList.remove('className')
// classList.toggle('className')


//!Event loop
//class Stack -> Browser -> Callback Queue
//Philip Robert
//Sara ka sara Asynchronous code callback queue mai chala jata hai, aur jab bhi call stack empty hota hai tabhi callback queue se ek ek karke asynchronous code call stack mai aata hai aur execute hota hai, to is tarah se asynchronous code execute hota hai, is process ko event loop kehte hain. to jab bhi call stack empty hoga tabhi callback queue or simply queue se ek ek karke asynchronous code call stack mai aayega aur execute hoga, to is tarah se asynchronous code execute hota hai, is process ko event loop kehte hain.


//!setTimeout() and setInterval() are two commonly used functions in JavaScript for scheduling tasks to be executed after a certain delay or at regular intervals.

setTimeout(function() {
    console.log("Hello Everyone, I have printed after 5 seconds");
},5000); 
//ye function 5 second ke baad execute hoga, to ye line execute hone ke baad 5 second ke baad console mai "Hello Everyone" print hoga.
