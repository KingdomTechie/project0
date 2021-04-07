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
    hungerScale: 10,
    energyScale: 10,
    happinessScale: 10,

    petName () {
        $age = $("<input class='age' type='text' placeholder='Age of your pet?'?></input>")
        $name = $("#petname").val();
        tomagatchi.name = $name;

        $("h1").text(`Hi ${$name}!!`);

        $("input").fadeOut(100);
        $("#petsubmit").fadeOut(100);
        // This section adds the stats section that contains timer information
        $profileStats = $(".stats");
        $($profileStats).prepend(`
        <p>Name: ${$name}</p>
        <p class="agescale">Age: ${tomagatchi.age}</p>
        <p class="hungerscale">Hungry: ${tomagatchi.hungerScale}</p>
        <p class="energyscale">Energy: ${tomagatchi.energyScale}</p>
        <p class="happyscale">Happy: ${tomagatchi.happinessScale}</p>`
        );

        // This logic changes the photo when the meters pass a certain threshold
        $hungryHappyImage = $("<img id='happydragonimage' src='eatingdragon.png'></img>");
        $hungrySadImage = $("<img id='saddragonimage' src='Saddragon.jpeg'></img>")
        $(".hungry").append($hungryHappyImage);


        // This section creates the meter buttons
        $hungryButton = $("<button id='hungrybutton'>HUNGRY!</button>");
        $energyButton = $("<button id='energybutton'>Need Energy!</button>");
        $happyButton = $("<button id= 'happybutton'>Play with me!</button>");
        $(".hungry").after($hungryButton);
        $(".energy").after($energyButton);
        $(".happy").after($happyButton);

        // This section starts the timers
        tomagatchi.startTimer();
        tomagatchi.ageTimer();
        tomagatchi.startEnergyTimer();

        // This on click event is stored within petName to trigger the meter buttons
        $("#hungrybutton").on("click", tomagatchi.feedMe);
        $("#energybutton").on("click", tomagatchi.energizeMe);
    },
        // Logic that increases meters when button is clicked
    feedMe () {
        console.log("Feed me!");
        tomagatchi.hungerScale = tomagatchi.hungerScale + 1;
      //   $("p.hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`)
    },

    energizeMe () {
        console.log("Energize me");
        tomagatchi.energyScale = tomagatchi.energyScale + 1;
    },

    makeHappy () {
        console.log("Play with me!");
        tomagatchi.happinessScale = tomagatchi.happinessScale + 1;
    },

    // Logic that governs the timers
    ageTimer(){
        tomagatchi.ageTimer = setInterval(tomagatchi.ageCounter, 200)
    },

    startHappyTimer () {
        console.log("Happy Timer");
        happyTimer = setInterval(tomagatchi.reduceMeters, 1000);
    },

    startEnergyTimer() {
        console.log("Energy Timer");
        energyTimer = setInterval(tomagatchi.reduceMeters, 1000);
  },

  // Modified from Dalton's reduceTime method in PokeASquare

  startTimer(){
    // setInterval(function to run, time between each run)
        hungerTimer = setInterval(tomagatchi.reduceMeters, 1000);
  },

    ageCounter () {
        
        tomagatchi.age++;
        $(".agescale").text(`Age: ${tomagatchi.age}`)
        if(tomagatchi.age >= 18) {
            $("img").attr("src", "adolescentdragon.jpeg");
        }
        if(tomagatchi.age >= 30) {
            $("img").addClass("adultdragon");
            $("section.profilepic").addClass("adultdragon")
            $("img").attr("src", "adultdragon.jpeg");
        }
    },


    reduceMeters(){
        if (tomagatchi.hungerScale > 0 || tomagatchi.energyScale > 0 || tomagatchi.happinessScale > 0){
            tomagatchi.hungerScale--;
            console.log(`Tommy is getting hungry ${tomagatchi.hungerScale}`);
            tomagatchi.energyScale--;
            console.log(`Tommy needs more energy ${tomagatchi.energyScale}`)
            tomagatchi.happinessScale--;
            $(".hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`);
            $(".energyscale").text(`Hungry: ${tomagatchi.energyScale}`);
            $(".happyscale").text(`Happy: ${tomagatchi.hungerScale}`);
            
            if(tomagatchi.hungerScale <= 0){
                clearInterval(tomagatchi.hungerScale);
                console.log(`${tomagatchi.name} has died :(`)
            }

            if(tomagatchi.energyScale <= 0) {
                console.log("Your Tommy has died, he was too weak");
            }
        }
      },

      // Logic to trigger when any of the meters deplete to 0
    petDeath () {
        console.log("This will create the end of the game");
    },
      
  
      
      }


$("#petsubmit").on("click", tomagatchi.petName);




