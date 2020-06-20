// chapter 21 to 25:STRING METHODS
// task1: Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var first=prompt("Enter first name");
var last=prompt("Enter last name");
alert(first+" "+last);

// task2: Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var fav_phone=prompt("Enter your favorite mobile model");
var length=fav_phone.length;
document.write("My favorite phone is: "+fav_phone+"<br>");
document.write("length of string: "+length);

// task3: Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var country="Pakistani";
var a=country.indexOf("n");
document.write("String "+country+"<br>");
document.write("Index of 'n': "+a);

// task4: Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var word="Hello World";
var b=word.lastIndexOf("l");
document.write("String "+word+"<br>");
document.write("Last Index of 'l': "+b);

// task5: Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var country="Pakistani";
var c=country.charAt(3);
document.write("String "+country+"<br>");
document.write("Character at index 3: "+c);

// task6:Repeat Q1 using string concat() method.
first_name_6 = prompt("Enter First Name: ");
last_name_6 = prompt("Enter Last Name: ");
full_name_6 = first_name_6.concat(last_name_6);
document.write("Hello "+full_name_6);

// task7: Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var city="Hyderabad";
var replace_value=city.slice(0,5);
var remaining_value=city.slice(5);
replace_value="Islam";
var final=replace_value+remaining_value;
document.write("City: "+city+"<br>");
document.write("After Replacement: "+final);

// task8: Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message="Ali and Sami are bestfriends. They play cricket and football together";
for(var i=0; i<message.length; i++){
    if(message.slice(i,i+3)==="and"){
        message=message.slice(0,i)+ "&" +message.slice(i+3);
    }
}
document.write(message);

// task9: Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var a="472"
document.write("Value: "+a+"<br>");
document.write("Type: "+typeof(a)+"<br>");
a=parseInt(a);
document.write("Value: "+a+"<br>");
document.write("Type: "+typeof(a)+"<br>");

// task10: Write a program that takes user input. Convert and
// show the input in capital letters.
var d=prompt("Enter Favorite color");
var e=d.toUpperCase();
document.write("User Input: "+d+"<br>");
document.write("Upper Case: "+e);

// task11:Write a program that takes user input. Convert and
// show the input in title case.
var a=prompt("Enter a programming language");
var firstChar=a.slice(0,1);
var otherChar=a.slice(1);
firstChar=firstChar.toUpperCase();
otherChar=otherChar.toLowerCase();
var b=firstChar+otherChar;
document.write("User Input: "+a+"<br>");
document.write("Title Case: "+b);

// task12:Write a program that converts the variable num to
// string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.
var num=35.36;
var new_num=num.toString();
var firstPart=new_num.slice(0,2);
var otherPart=new_num.slice(3);
var final=firstPart+otherPart;
document.write("Number: "+num+"<br>");
document.write("Result: "+final);

// task13:Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username. 
var username=prompt("Entetr username");
var a=["@",",",".","!"];
for(var i=0; i<username.length; i++){
    for(var j=0; j<a.length; j++){
        if(username.charAt(i)===a[j]){
            alert("enter a valid username");
        }
    }
}

// task14:You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.
var a=["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/maam?");
search=search.toLowerCase();
for(var i=0; i<a.length; i++){
    if(a[i]===search){
        document.write(search+"is available at index "+i)
    }
}

// task16:Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university="University of Karachi";
var res=university.split("");
for(var j=0; j<res.length; j++){
    res[j]=res[j]+"<br>"
    document.write(res[j])
}

// task17:Write a program to display the last character of a user
// input.
var a=prompt("Enter a String");
var b=a.length;
var b=b-1;
var c=a.charAt(b);
document.write("User Input:"+a+"<br>");
document.write("Last character of input:"+c);

// task18:You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str="the quick brown fox jumps over the lazy dog"
var count=0
for(var m=0; m<str.length; m++){
    if(str.slice(m,m+3)==="the"){
        count=count+1

    }
}
document.write("Text:"+str+"<br>");
document.write("There are "+count+" occurences of 'the'");

// CHAPTER 26-30
// task1: Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var number=prompt("Enter a positive number");
var a=Math.round(number);
var b=Math.floor(number);
var c=Math.ceil(number);
document.write("a."+number+"<br>");
document.write("b. Round off Value"+a+"<br>");
document.write("c. Floor Value "+b+"<br>");
document.write("d. Ceil Value"+c);

// task2:Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var number=prompt("Enter a negative number");
var a=Math.round(number);
var b=Math.floor(number);
var c=Math.ceil(number);
document.write("a."+number+"<br>");
document.write("b. Round off Value"+a+"<br>");
document.write("c. Floor Value "+b+"<br>");
document.write("d. Ceil Value"+c);

// task3:Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var a=prompt("enter a number");
var b=Math.abs(a);
document.write("The Absolute value of "+a+" is "+b);

// task4:Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

var a=Math.floor(Math.random()*7);
document.write("Random Dice Value:"+a);

// task5:Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser 
var b=Math.floor(Math.random()*3);
if(b===2){
    document.write("Random Coin Value:Heads");
}
else if(b===1){
    document.write("Random coin Value:Tails");
}
else{
    document.write("none");
}

// task6: Write a program that shows a random number between 1
// and 100 in your browser.
var c=Math.floor(Math.random()*100);
document.write("Random number between 1 and 100: "+c);

// task8:Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var secret=Math.floor(Math.random()*10);
var guess=prompt("Guess the sectret number between 1 to 10");
if(guess===secret){
    document.write("Congratulaions!Your guess is correct");
}
else{
    document.write("Try Again")
}

// CHAPTER 31-34: DATE METHODS

// task1:Write a program that displays current date and time in
// your browser.
document.write(new Date());

// task2:Write a program that alerts the current month in words.
// For example December.
var a= new Date();
months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var b=a.getMonth();
document.write("Current Month is:"+months[b]);

// task3:Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var a=new Date();
var b=a.getDay();
var days=["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"];
var c=days[b];
document.write("Today is:"+c.slice(0,3));

// task4:Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
var a=new Date();
var b=a.getDay();
var days=["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"];
if(days[b]==="Saturday" || days[b]==="Sunday"){
    document.write("It's Fun Day");
}else{
    document.write("No Fun Day");
}

// task5: Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var a=new Date();
var b=a.getDate();
if(b<16){
    document.write("First fifteen days of the month");
}else{
    document.write("Last days of the month");
}

// task6: Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var a=new Date();
var b=a.getTime();
document.write("Current Date: "+a+"<br>");
document.write("Elapsed milliseconds since January 1,1970: "+b+"<br>");
document.write("Elapsed minutes since January 1,1970: "+b/1000*60);

// task7: Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var a= new Date();
var b=a.getHours();
if(b<12){
    document.write("IT'S AM");
}else{
    document.write("IT'S PM");
}

// task8: Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var later_date=new Date(2020,12,0);
document.write(later_date);

// task9:Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
var a=new Date();
var b= new Date(2020,4,25);
var diff=Math.ceil((a.getTime()-b.getTime())/(1000*60*24*24));
document.write(diff+" days are passed since 1st Ramadhan");

// task10:Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var a=new Date(2015,0,1);
var reference=new Date();
var diff=Math.ceil(reference.getTime()-a.getTime())/(1000);
document.write("On reference day "+reference+" "+ diff+" seconds have passed since beginning of 2015");

// task11:Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var dt = new Date();
document.write("current time: "+dt+"<br>");
dt.setHours( dt.getHours()  -1 );
document.write("An Hour ago: "+dt );

// task12:Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
current_date = new Date();
before_100_year = current_date.getFullYear()-100;
before_100_date = new Date(before_100_year);
document.write("Current Date: "+current_date+"<br>");
document.write("100 Years back, it was "+before_100_date+"<br>");

// task13:Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
user_age = parseInt(prompt("Enter Your Age:"));
current_year = new Date().getFullYear();
birth_year = current_year - user_age;
document.write("Your Age: "+user_age+"<br>");
document.write("Your Birth Year: "+birth_year+"<br>");

// task14:Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: ABC Customer"+"<br>");
var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = new Date();
var n = d.getMonth();
document.write("Current Month: "+month[n]+"<br>");
var units = 410;
document.write("Units per Month: "+units+"<br>");
var charges = 16;
document.write("Charges per Unit: "+charges+"<br><br>");
var net_amount = units*charges;
document.write("Net Amount Payabale (within due date): "+net_amount+"<br>");
var late_surcharge = 350;
document.write("Late Payment Surchage: "+late_surcharge+"<br>");
var Gross_amount = net_amount+late_surcharge;
document.write("Gross Amount Payabale (after due date): "+Gross_amount+"<br>");

// CHAPTER 35-38: FUNCTIONS
// task1:Write a function that displays current date & time in your
// browser.
function DateAndTime(){
    var d = new Date();
    document.write(d);
}
DateAndTime();

// task2:Write a function that takes first & last name and then it
// greets the user using his full name.
function Name(first_name,last_name){
    var a=first_name+last_name;
    document.write(a);
}
Name("John","Gill");

// task3:Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function sum(a,b){
    var a=a+b;
    document.write(a);
}
sum(3,5);

// task4:Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function Calculator(number1,number2,operation){
    if (operation == "+"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1+number2));
    }
    else if (operation == "-"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1-number2));
    }
    else if (operation == "*"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1*number2));
    }
    else if (operation == "/"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1/number2));
    }
    else if (operation == "%"){
        document.write(number1+" "+operation+" "+number2+" = "+(number1%number2));
    }
}
Calculator(10,2,"+");

// task5:Write a function that squares its argument.
function square(a){
    document.write(Math.pow(a,2));
}
square(4);

// task6:Write a function that computes factorial of a number.
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
var n=5
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);

// task7:Write a function that take start and end number as inputs
// & display counting in your browser.
function counting(a,b){
    parseInt(a);
    parseInt(b);
    for(var i=a; i<=b; i++){
        document.write(i+"<br>");
    }
}
counting(10,21);

// task8:Write a nested function that computes hypotenuse of a
// right angle triangle.
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calculateSquare(value){
    return Math.pow(value,2); 
}
function calculateHypotenuse(base,perpendicular){
    hyp=calculateSquare(base)+calculateSquare(perpendicular);
    document.write("the hypotenuse is: "+hyp);
}
calculateHypotenuse(3,5);

// task9:Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area(width,height){
    var rect_area=width*height;
    document.write("Area of rectangle is: "+rect_area+"<br>");
}
a=5;
b=5;
area(a,b);
area(5,5);

// task10:Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            document.write("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                document.write("Entry is a palindrome."+"<br>");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.write("Entry is not a palindrome."+"<br>");
                return false;
            }
        }
        document.write("The entry is a palindrome."+"<br>");
        return true;
}
check_Palindrome('level');
check_Palindrome('nurses run');
check_Palindrome('fox');    

// task11:Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// task12:Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));

// task13:Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function occurences(str,word){
    var count=0
    for(var m=0; m < str.length; m++){
        if(str[m]===word){
            count=count+1;
        }
    }
    document.write(count);
}
occurences("hello","l");

// task14:The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircunference(radius){
    circumference=2*3.142*radius;
    document.write("The circunference of circle is: "+circumference+"<br>");
}
function calcArea(radius){
    area=3.142*Math.pow(radius,2);
    document.write("The area of circle is: "+area);
}
calcCircunference(4);
calcArea(4);


// -------------------------------THE END-----------------------------------------//







































