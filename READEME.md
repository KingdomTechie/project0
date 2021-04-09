User Stories
Landing Page
- the user is greeted in the landing page where a tomagatchi image slides into view
- the user is prompted to enter their pet's name into the input field
- Once the user inputs their pet's name and clicks the "Submit" button, the game phases into the main core mechanics.

Core Game Mechanic Walkthrough
- the user will now see that their pet avatar is dancing across the screen in linear fashion.
- on the right side of the screen, the following meters of "Hungry", "Energy", "Happy" and "Age" are displayed, below the Name of the avatar.  These meters immediately begin counting down once the user enters this stage.
- the main page contains 3 buttons the user will have to continuously click to keep the number value of the aforementioned meters above 0.  
- If any of the meters reaches 0, the game immediately ends and switches to a screen that displays a tombstone for the avatar, the meters have stopped and a simple phrase saying that the name of the avatar has died.  



Name your Pet Page
 - css - Tree, sunshine, and butterflies will remain on the page
	- Player transitions onto the name your pet page.
	- Player names their pet by inputting the name into the next box
	- input displays on the page
	
Play Page

	- Game transitions into the Play page where the pet name card is displayed
	-  (specification) Pet name card : Profile picture, Name, age
			§ (specification) age will increase by 2 years every minute.  
			§ Ice box - profile picture can change depending on happiness state
		
	- 3 graphics poof onto the page with 3 bars that decrease over time
		○ (specification) Hungry - (high rate dependent on age) this bar will decrease at a rate of … ?? If depletes, move to Death page
		○ (specification) Sleepiness - (high rate dependent on age).  this bar increases over time.  Too sleepy will decrease happiness.
		○ (specification) Happiness - this bar decreases over time
		○ (specification) if any bar decreases it will die
		
	- Player must click the corresponding buttons to keep the bar from depleting 
		○ (specification) Hungry button
		○ (specification) Energy button
		○ (specification) Happiness button
		
	- if Tomagatchi dies, game transitions into the "Death page"

Death page
	- User views a death page
	- graphics change to a graveyard background
	- Pet card displays: ${Name} has died of ${which bar depleted}

** PROGRAM LOGIC  **//

** STEP 0 - add HTML structure elements */
added divs for the 3 main pages of the game: start page, play page and death page
** STEP 1 - Create tomagatchi object */
Name will be parsed from the user input space when naming tomagatchi
