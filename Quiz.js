# Udacity-Quiz-Murder-Mystery-3-4-
Can you solve it ?


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect




/* ****************************************** */

var room = "gallery";
var suspect = "Mr. Kalehoff" 

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "trophy";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (rooms === "billiards room" ) {
    
  weapon = "pool stick", solved = true,  suspect = "Mrs. Sparr" ; 
    
} else if (rooms === "dining room") {
    
    weapon = "knife", solved = true, suspect = "Mr. Parkes" ;
    
} else if (rooms === "gallery") {
    
     weapon = "trophy", solved = true, suspect = "Ms. Van Cleve";
    
} else {
    
   weapon = "poison" ,solved = true, suspect = "Mr. Kalehoff" ;
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + " did it in the " + room +" with the " + weapon +"!");
}
/* ****************************************** */
