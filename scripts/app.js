console.log("Welcome to the world little tomagatchi!");

// User Stories

// Pick your tomagatchi page 

// 	- Start page has graphics on it.  Tree, sunshine, and butterflies
// 	- Player starts on this page to pick a tomagatchi pet.
// 	- The picture of the animal will be displayed in the display box
// 	- (Ice box) The player will be able to pick 1 out of 3 types of tomagatchi's
// 	- (Ice box) User will use left and right arrows to cycle through the photos 
// 	- The name of the type of tomagatchi will be displayed underneath its photo
// 	- A select button will persist on the page, when the player decides, they will click the button.
// 	- The button will trigger a transition into the Name your pet screen.  

// Name your Pet Page
// 	- Player transitions onto the name your pet page.
// 	- Tree, sunshine, and butterflies will remain on the page
// 	- Player names their pet by inputting the name into the next box
// 	- 
	
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

    
}

// $(".petname-button").on("click", tomagatchi.getName)



