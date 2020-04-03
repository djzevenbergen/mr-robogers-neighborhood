
# _Mr. Roboger's Neighborhood_

#### _Takes a number from the user and returns an array of the numbers from 0 - the user's number, replacing certain numbers with messages, 4/3/2020_

#### By _**DJ Zevenbergen**_

## Description

_This web applicaation uses looping and arrays to return a message in which all numbers that include the digit 3 are replaced by "Won't you be my neighbor?", all numbers with digit 2 are replaced with the word "Boop!", all numbers with digit 3 are replaced with the word "Beep!", and all numbers that are divisible by 3 are replaced with "Won't you be my neighbor, " followed by the user's name. If you enter the current year (2020), you will be greeted with a dance party that uses the Audio element of HTML 5._

## Setup/Installation Requirements

* Download entire repo
* Open index.html in browser
* If it doesn't work, it may require having Bootstrap 3.3.7 CSS file in CSS folder and jQuery 3.4.1 JS file in JS folder

## Specs

* - The program returns a range of numbers from 0 to the user's input number
    * Input: "4"
    * Output: "0, 1, 2, 3, 4"

* - The program checks for any 1's in the user input and replaces them with "Beep!"
    * Input: "4"
    * Output: "0, Beep!, 2,  3, 4"

* - The program checks for any 2's in the user input and replaces them with "Boop!"
    * Input: "4"
    * Output: "0, 1, Boop!, 3, 4"


* - The program checks for any 3's in the user input and replaces them with "Won't you be my neighbor?"
    * Input: "4"
    * Output: "0, 1, 2, Won't you be my neighbor?", 4"

* - The program combines the previous 4 specs
  * Input: "4"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4"

* - The program combines the previous specs with a checkbox that asks the user whether they want it to be reverse order or not
  * Input: "4", reverseButton.checked() === true
  * Output: "4, Won't you be my neighbor?, Boop!, Beep!, 0"

* - The program combines the previous specs, and takes in the users name, adding "name" to the end of the "Won't you be my neighbor?" if the number is divisible by 3 
  * Input: "13", "jim"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor, jim?, 4, 5, Won't you be my neighbor, jim?, 7, 8, Won't you be my neighor, jim?, Beep!, Beep!, Won't you be my neighbor, jim?, Won't you be my neighbor?"


## Access to Website

_https://djzevenbergen.github.io/mr-robogers-neighborhood_

## License

Copyright © 2020

**_DJ Zevenbergen_**