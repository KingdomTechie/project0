console.log("Welcome to the world little tomagatchi!");

// User Stories


// Name your Pet Page
//  - css - Tree, sunshine, and butterflies will remain on the page
// 	- Player transitions onto the name your pet page.
// 	- Player names their pet by inputting the name into the next box
// 	- input displays on the page
	
// Play Page

// 	- Game transitions into the Play page where the pet name card is displayed
// 	-  (specification) Pet name card : Profile picture, Name, age
// 			§ (specification) age will increase by 2 years every minute.  
// 			§ Ice box - profile picture can change depending on happiness state
		
// 	- 3 graphics poof onto the page with 3 bars that decrease over time
// 		○ (specification) Hungry - (high rate dependent on age) this bar will decrease at a rate of … ?? If depletes, move to Death page
// 		○ (specification) Sleepiness - (high rate dependent on age).  this bar increases over time.  Too sleepy will decrease happiness.
// 		○ (specification) Happiness - this bar decreases over time
// 		○ (specification) if any bar decreases it will die
		
// 	- Player must click the corresponding buttons to keep the bar from depleting 
// 		○ (specification) Hungry button
// 		○ (specification) Energy button
// 		○ (specification) Happiness button
		
// 	- if Tomagatchi dies, game transitions into the "Death page"

// Death page
// 	- User views a death page
// 	- graphics change to a graveyard background
// 	- Pet card displays: ${Name} has died of ${which bar depleted}

//** PROGRAM LOGIC  **//

//** STEP 0 - add HTML structure elements */
// added divs for the 3 main pages of the game: start page, play page and death page
//** STEP 1 - Create tomagatchi object */
// Name will be parsed from the user input space when naming tomagatchi
//

const tomagatchi = {
    name: "",
    age: 0,
    hungerScale: 0,
    energyScale: 0,
    happinessScale: 0,

    petName () {
        $age = $("<input class='age' type='text' placeholder='Age of your pet?'?></input>")
        $name = $("#petname").val();
        tomagatchi.name = $name;
        $("h1").text(`Hi ${$name}!!`);
        $("input").fadeOut(100);
        $("#petsubmit").fadeOut(100);
        $profileStats = $(".stats");
        $($profileStats).prepend(`Age: ${tomagatchi.age}`);
        $
    },

    ageCounter () {
        console.log("this is the age counter function");
    }



    // petAge () {
    //     $ageButton = $("<button class='agebutton' )
    // }


}

$("#petsubmit").on("click", tomagatchi.petName)



