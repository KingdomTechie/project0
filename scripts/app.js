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

        // Images created for meters
        
        $hungryHappyImage = $("<img id='happydragonimage' src='eatingdragon.jpg'></img>");
        $hungrySadImage = $("<img id='saddragonimage' src='Saddragon.jpeg'></img>")
        $(".hungry").append($hungryHappyImage);
        $energyHappyImage = $("<img id='energyhappyimage' src='energyDragon.jpeg'></img>")
        $(".energy").append($energyHappyImage);
        $happyHappyImage = $("<img id='happyhappyImage' src='playfuldragon.png'></img>");
        $(".happy").append($happyHappyImage);


        // This section creates the meter buttons
        $hungryButton = $("<button id='hungrybutton'>HUNGRY!</button>");
        $energyButton = $("<button id='energybutton'>Need Energy!</button>");
        $happyButton = $("<button id= 'happybutton'>Play with me!</button>");
        $(".hungry").after($hungryButton);
        $(".energy").after($energyButton);
        $(".happy").after($happyButton);

        // This section starts the timers
        tomagatchi.startHungryTimer();
        tomagatchi.ageTimer();
        tomagatchi.startEnergyTimer();
        tomagatchi.startHappyTimer();

        // This on click event is stored within petName to trigger the meter buttons
        $("#hungrybutton").on("click", tomagatchi.feedMe);
        $("#energybutton").on("click", tomagatchi.energizeMe);
        $("#happybutton").on("click", tomagatchi.makeHappy);
    },
        // Logic that increases meters when button is clicked
    feedMe () {
        console.log("Feed me!");
        tomagatchi.hungerScale = tomagatchi.hungerScale + 1;
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
        tomagatchi.ageTimer = setInterval(tomagatchi.ageCounter, 300)
    },

    // Modified from Dalton's reduceTime method in PokeASquare

    startHungryTimer(){
    // setInterval(function to run, time between each run)
        hungerTimer = setInterval(tomagatchi.reduceMeters, 1000);
  },
    startHappyTimer () {
        console.log("Happy Timer");
        happyTimer = setInterval(tomagatchi.reduceMeters, 13000);
    },

    startEnergyTimer() {
        console.log("Energy Timer");
        energyTimer = setInterval(tomagatchi.reduceMeters, 15000);
  },

  reduceMeters(){
    if (tomagatchi.hungerScale > 0 || tomagatchi.energyScale > 0 || tomagatchi.happinessScale > 0){
        tomagatchi.hungerScale--;
        tomagatchi.energyScale--;
        tomagatchi.happinessScale--;
        $(".hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`);
        $(".energyscale").text(`Energy: ${tomagatchi.energyScale}`);
        $(".happyscale").text(`Happy: ${tomagatchi.hungerScale}`);

        if(tomagatchi.hungerScale <= 0){
            clearInterval(tomagatchi.hungerScale);
            console.log(`${tomagatchi.name} has died :(`)
            tomagatchi.petDeath();
            return
        }

        if(tomagatchi.energyScale <= 0) {
            clearInterval(tomagatchi.energyScale);
            console.log("Your Tommy has died, he was too weak");
            tomagatchi.petDeath();
            return
        }

        if (tomagatchi.happinessScale <= 0) {
            clearInterval(tomagatchi.happinessScale);
            console.log("Your Tommy died of saddness");
            tomagatchi.petDeath();
            return

        }
    }
  },

  
    ageCounter () {
        
        tomagatchi.age++;
        $(".agescale").text(`Age: ${tomagatchi.age}`)
        if(tomagatchi.age >= 18) {
            $("#profilepicID").attr("src", "adolescentdragon.jpeg");
        }
        if(tomagatchi.age >= 30) {
            $("#profilepicID").addClass("adultdragon");
            $("section.profilepic").addClass("adultdragon")
            $("#profilepicID").attr("src", "adultdragon.jpeg");
        }
    },

    changeMeterImage (){
        $hungrySadImage = $("<img id='hungrysadimage' src='Saddragon.jpeg'></img>")
        if (tomagatchi.hungerScale <= 5) {
            $(".hungry").append($hungrySadImage);
        }
    },

      // Logic to trigger when any of the meters deplete to 0
    // petDeath () {
    //     $deathBar = $(`<div id="deathbar">${tomagatchi.name} has died</div>`)
    //     $(".meters").fadeOut(400);
    //     $("h1").text(`Poor ${tomagatchi.name} has died :(`)
    //     $("body").append($deathBar)
    //     console.log("This will create the end of the game");
    // },
      
  

}


$("#petsubmit").on("click", tomagatchi.petName);




