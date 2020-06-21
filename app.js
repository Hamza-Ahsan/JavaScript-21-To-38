//------------------------Chapter # 21 To 25--------------------------//


//===Task # 1===//
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = (firstName + " " + lastName);
// alert(fullName + " " + "Welcome To The JS Land")


//===Task # 2===//
// var phoneModel = prompt("Enter Your Favorite Mobile Phone Model");
// var index = phoneModel.length;
// document.write("My favorite phone is: " + phoneModel + "<br>" + "Length of string: " + index) 


//===Task # 3===//
// var pak = ("Pakistani");
// var index = pak.indexOf("n");
// document.write("String: " + pak + "<br>" + "Index of 'n': " + index )


//===Task # 4===//
// var str = ("Hello World");
// var lastIndex = str.lastIndexOf("l");
// document.write("String: " + str + "<br>" + "Last index of 'l': " + lastIndex)


//===Task # 5===//
// var str = ("Pakistani");
// var char = str[3];
// document.write("String: " + str + "<br>" + "Character at index 3: " + char)


//==Task # 6===//
// var firstName = ("Hamza");
// var lastName = ("Ahsan");
// var fullName = (firstName + " " + lastName);
// alert(fullName + " " + "Welcome To The JS Land")


//===Task # 7===//
// var word = ("Hyderabad");
// var replace = word.replace("Hyder" , "Islam")
// document.write("City: " + word + "<br>" + "After replacement: " + replace)


//===Task # 8===//
// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var replace = message.replace(/and/g , "&");
// document.write(replace)


//===Task # 9===//
// var str = ("472");
// var numb = parseInt(str);
// document.write("Value: " + str + "<br>" + "Type: " + "string" + "<br>" + "Value: " + numb + "<br>" + "Type: " + "number")


//===Task # 10===//
// var word = prompt("Enter the Word");
// var upper = word.toUpperCase();
// document.write("User input: " + word + "<br>" + "Upper case: " + upper)


//===Task # 11===//
// var letter = prompt("Enter the Letter");
// var capiti = letter[0].toUpperCase() + letter.slice(1);
// document.write("User input: " + letter + "<br>" + "Title case: " + capiti)


//===Task # 12===//
// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + str)


//===Task # 13===//



//===Task # 14===//
// var search = prompt("Enter The Product You Want")
// search = search.toLowerCase()
// var A = ["cake","appple pie","cookie","chips","patties"];
// var index = A.indexOf(search)
// for (i = 0 ; i < A.length ; i++) {
//     if (A[i] === search){
//         alert(search + " is available at index " + index + " " + "in our bakery")
//     }
//     else{
//         alert( "We are sorry. " + search + " is not available in our bakery")
//     }
// }


//===Task # 15===//



//===Task # 16===//
// var university = "University of Karachi";
// var word = university.split(" ");
// for (i = 0 ; i < university.length ; i++){   
//     document.write(university[i] + "<br>")
// }


//===Task # 17===//
// var char = prompt("Enter the word");
// var word = char.length;
// console.log(char)


//===Task # 18===//
// var str = ("The quick brown fox jumps over the lazy dog.")
// var word = str.indexOf("The")
// alert(word)



//------------------------Chapter # 26 To 30--------------------------//


//===Task # 1===//
// var numb = prompt("Enter the Positive Integer");
// var round = Math.round(numb);
// var floor = Math.floor(numb);
// var ceil = Math.ceil(numb);
// document.write("Number: " + numb + "<br>" + "round off value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil)


//===Task # 2===//
// var numb = prompt("Enter the Negative Integer");
// var round = Math.round(numb);
// var floor = Math.floor(numb);
// var ceil = Math.ceil(numb);
// document.write("Number: " + numb + "<br>" + "round off value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil)


//===Task # 3===//
// var num = -4;
// var abs = Math.abs(num);
// document.write("The absolute value of " + num + " is " + abs)


//===Task # 4===//
// var num = Math.random() * 6;
// var floor = Math.floor(num)
// document.write("random dice value: " + floor)


//===Task # 5===//
// var toss = Math.random() * 3;
// var round = Math.floor(toss);
// if (round === 1){
//     document.write(round + "<br>" + "Random coin value is: Heads")
// }else if (round === 2) {
//     document.write(round + "<br>" + "Random coin value is: Tails")
// }


//===Task # 6===//
// var numb = Math.random() * 100;
// var round = Math.ceil(numb);
// document.write("Random number between 1 and 100 is: " +  round)


//===Task # 7===//
// var weight = prompt("Enter Your Weight");
// var numb = parseInt(weight)
// document.write("The weight of user is " + numb + " " + "kilograms")


//===Task # 8===//
// var numb = +prompt("Enter the number between 1 to 10");
// var arr = [2,4,5,7,9];
// for (i = 0 ; i < arr.length ; i++) {
//     if (arr[i] === numb) {
//         alert("Congratulate Your Number is Match")
//     }else {
//         alert("Try again!")
//     }
// } 




//------------------------Chapter # 30 To 35--------------------------//


//===Task # 1===//
// var a = new Date();
// document.write(a)


//===Task # 2===//
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var currMonth = monthNames[theMonth];
// document.write( "Current month: " + currMonth)


//===Task # 3===//
// var now = new Date();
// var str = now.toString();
// var getDay = str.slice(0,3)
// document.write("Today is " + getDay)


//===Task # 4===//
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)
// if (nameOfToday === "Saturday" ) {
//         alert("It's Fun day")
// }
// else if (nameOfToday === "Sunday" ) {
//     alert("It's Fun day")
// }


//===Task # 5===//
// var now = new Date();
// var day = now.getDate();
// console.log(day)
// if (day < 16) {
//     alert("First fifteen days of the month")
// }else {
//     alert("Last days of the month")
// }


//===Task # 6===//
// var now = new Date("Dec 05, 2015 22:32:23");
// var timeMili = now.getTime();
// var min = timeMili/(1000 * 60 * 60)
// document.write("Current Date: " + now + "<br>")
// document.write("Elapsed miliseconds since January 1, 1970: " + timeMili + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + min)


//===Task # 7===//
// var now = new Date();
// var hour = now.getHours();
// console.log(hour)
// if (hour < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


//===Task # 8===//
// var laterDate = new Date("Dec 31, 2020 00:00:00")
// document.write( "Later date: " + laterDate)


//===Task # 9===//
// var now = new Date("Dec 05, 2015 22:50:16")

//===Task # 10===//


//===Task # 11===//
// var now = new Date();
// now.setHours(now.getHours() - 1)
// document.write("Current date: " + new Date() + "<br>" + "1 hour ago, it was " + now)


//===Task # 12===//
// var now = new Date();
// now.setFullYear(now.getFullYear() - 100)
// alert(new Date())
// document.write("Current date: " + new Date() + "<br>" + "100 years back, it was " + now)


//===Task # 13===//
// var age = new Date(prompt("Enter Your age"));
// var time = age.getTime();
// var today = new Date();
// var todayTime = today.getTime();
// var diff = todayTime - time
// var accurate = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accurate)


//===Task # 14===//
// var custName = ("ABC Customer").bold()
// var month = ("February").bold();
// var unit = 410;
// var perUnit = 16;
// var netAmount = (unit * perUnit);
// var latePay = 350;
// var grossAmount = (netAmount + latePay);
// document.write( "K-Electric Bill".big().bold() + "<br>" + "<br>" + "Customer Name: " + custName + "<br>" + "Month: " + month + "<br>" + "Number of units: " + unit + "<br>" + "Charges of unit: " + perUnit + "<br>" + "<br>")
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>" + "Late payment surcharge: " + latePay + "<br>" + "Gross Amount Payable (after Due Date): " + grossAmount) 





//------------------------Chapter # 35 To 38--------------------------//


//===Task # 1===//
// function now(a){
//     document.write(a)
// }
// now(new Date())


//===Task # 2===//
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// function name(firstName,lastName){
//     alert(firstName + lastName)            
// }
// alert( "Hello " + firstName + " " + lastName)


//===Task # 3===//
// var num1 = prompt("Enter the First Number")
// var num2 = prompt("Enter the Last Number")
// function add(num1,num2){
//     return (num1 + num2)
// }
// alert(add(num1,num2))


//===Task # 4===//
// function cal(num1,num2,opertor){
//     if(opertor === "+"){
//         return (num1 + num2)
//     }else if (opertor === "-"){
//         return (num1 - num2)
//     }else if (opertor === "*"){
//         return (num1 * num2)
//     }else if (opertor === "/"){
//         return (num1 / num2)
//     }
// }
// var numb1 = prompt("Enter the First Number")
// var opertor = prompt("Enter the Opertor")
// var numb2 = prompt("Enter the Second Number")
// alert(cal(numb1,opertor,numb2))


//===Task # 5===//
// function square(){
//     for(i = 0 ; i <= 4 ; i++){
//         document.write(i + ' ')
//     }
// }
// square();


//===Task # 6===//
// function factorial(x) { 
// if (x === 0){
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(5));


//===Task # 7===//
// var firstnumb = prompt("Enter the first number")
// var secondnumb = prompt("Enter the second number")
// function Count(){
// for(i = firstnumb ; i <= secondnumb ; i++){
//     document.write(i + " ")
// }
// }
// Count();


//===Task # 8===//



//===Task # 9===//
// function Area (a,b){
//     alert(a * b) 
// }
// Area (5,b = 4) 


//===Task # 10===//
// var word = prompt("Enter the word");
// var check = "";
// function palindroma (){
//     for (var i = word.length -1 ; i >= 0 ; i--){
//         check += word[i]
// }
// if (word === check){
//     document.write(word + " is plaindrome word")
// }else {
//     document.write(word + " is not plaindrome word")
// }
// }
// palindroma();


//===Task # 11===//
// function uppercase(str){
//   var array1 = str.split(' ');
//   var newarray1 = [];
//     for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"))


//===Task # 12===//


//===Task # 13===//


//===Task # 14===//
// function calcCircumference(a){
//     document.write("The circumference is " + (2 * 3.142 * a) + "<br>")
// }
// calcCircumference(5)

// function calcArea(b){
//     document.write("The area is " + (2 * 3.142 * b))
// }
// calcArea(4)


//--------------------------------End------------------------------//