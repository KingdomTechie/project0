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
        $("h1").css("animation", "5s slideOut")
        $(".petcard").css("animation", "3s linear 1s infinite alternate slideRight");




        // This section adds the stats section that contains timer information
        $profileStats = $(".stats");
        $($profileStats).prepend(`
        <p>Name: ${$name}</p>
        <p class="agescale">Age: ${tomagatchi.age}</p>
        <p class="hungerscale">Hungry: ${tomagatchi.hungerScale}</p>
        <p class="energyscale">Energy: ${tomagatchi.energyScale}</p>
        <p class="happyscale">Happy: ${tomagatchi.happinessScale}</p>`
        );

        // Images created for meters.  Not currently being used in run time.
        $hungryHappyImage = $("<img id='happydragonimage' src='images/pokedragoneating.png'></img>");
        $hungrySadImage = $("<img id='saddragonimage' src='images/Saddragon.jpeg'></img>")
        $(".hungry").append($hungryHappyImage);
        $energyHappyImage = $("<img id='energyhappyimage' src='images/Spyrostrongdragon.png'></img>")
        $(".energy").append($energyHappyImage);
        $happyHappyImage = $("<img id='happyhappyImage' src='images/playfuldragon.png'></img>");
        $(".happy").append($happyHappyImage);


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

    startHungryTimer(){
        // setInterval(function to run, time between each run)
            tomagatchi.hungerTimer = setInterval(tomagatchi.reduceHungerMeter, 1000);
      },
    
    feedMe () {
        console.log("Feed me!");
        if(tomagatchi.hungerScale >= 10) {
            tomagatchi.hungerScale = 10;
        }
        tomagatchi.hungerScale = tomagatchi.hungerScale + 1;
    },

    reduceHungerMeter () {
        tomagatchi.hungerScale--;
        $(".hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`);
        if(tomagatchi.hungerScale <= 0){
            clearInterval(tomagatchi.hungerTimer);
            clearInterval(tomagatchi.ageTimer);
            clearInterval(tomagatchi.energyTimer);
            clearInterval(tomagatchi.happyTimer);
            console.log(`${tomagatchi.name} has died :(`)
            tomagatchi.petDeath();
            return
        }
    },

    startEnergyTimer() {
        console.log("Energy Timer");
        energyTimer = setInterval(tomagatchi.reduceEnergyMeter, 1000);
    },
    energizeMe () {
        console.log("Energize me");
        if(tomagatchi.energyScale >= 10) {
            tomagatchi.energyScale = 10;
        }
        tomagatchi.energyScale = tomagatchi.energyScale + 1;
    },

    reduceEnergyMeter () {
        tomagatchi.energyScale--;
        console.log(tomagatchi.energyScale);
        $(".energyscale").text(`Energy: ${tomagatchi.energyScale}`);
        if(tomagatchi.energyScale === 0) {
            clearInterval(tomagatchi.energyTimer);
            clearInterval(tomagatchi.ageTimer);
            clearInterval(tomagatchi.hungerTimer);
            clearInterval(tomagatchi.happyTimer);
            console.log("Your Tommy has died, he was too weak");
            tomagatchi.petDeath();
            return
        }
    },

    startHappyTimer () {
        console.log("Happy Timer");
        happyTimer = setInterval(tomagatchi.reduceHappyMeter, 1000);
    },

    makeHappy () {
        console.log("Play with me!");
        // if(tomagatchi.happinessScale >= 10) {
        //     tomagatchi.happinessScale = 10;
        // }
        tomagatchi.happinessScale = tomagatchi.happinessScale + 1;
    },

    // reduceHappyMeter () {
    //     tomagatchi.happinessScale--;
    //     if (tomagatchi.happinessScale <= 0) {
    //         clearInterval(tomagatchi.happyTimer);
    //         clearInterval(tomagatchi.ageTimer);
    //         clearInterval(tomagatchi.hungerTimer);
    //         clearInterval(tomagatchi.energyTimer);
    //         console.log("Your Tommy died of saddness");
    //         tomagatchi.petDeath();
    //         return
    //     }
    // },


    // Logic that governs the timers
    ageTimer(){
        tomagatchi.ageTimer = setInterval(tomagatchi.ageCounter, 300)
    },
    // FIXME - age counter hard stops at 33 years old.
    ageCounter () {
        tomagatchi.age++;
        console.log(tomagatchi.age);
        $(".agescale").text(`Age: ${tomagatchi.age}`)
        if(tomagatchi.age >= 18) {
            $("#profilepicID").attr("src", "images/teenagedragon.png");
        }
        if(tomagatchi.age >= 30) {
            $("#profilepicID").addClass("adultdragon");
            $("section.profilepic").addClass("adultdragon")
            $("#profilepicID").attr("src", "images/adultdragon.jpeg");
        }
    },
    
      // Logic to trigger when any of the meters deplete to 0
    // petDeath () {
    //     $("body").css("background-image", "url(https://c4.wallpaperflare.com/wallpaper/601/475/772/grave-yard-green-trees-and-web-wallpaper-preview.jpg)")
    //     $deathBar = $(`<div id="deathbar">${tomagatchi.name} has died</div>`)
    //     $("h1").remove();
    //     $(".meters").fadeOut(400);
    //     $("body").append($deathBar)
    //     console.log("This will create the end of the game");
    //     $("#profilepicID").attr("src", "images/tombstone.png")
    //     $(".petcard").css("animation", "")
    //     return
    // },
      
}


$("#petsubmit").on("click", tomagatchi.petName);



// NOTE - ICE BOX - This section creates the meter buttons
$hungryButton = $("<button id='hungrybutton'>HUNGRY!</button>");
$energyButton = $("<button id='energybutton'>Need Energy!</button>");
$happyButton = $("<button id= 'happybutton'>Play with me!</button>");
$(".hungry").after($hungryButton);
$(".energy").after($energyButton);
$(".happy").after($happyButton);

// NOTE - still need to work through this logic - ICE BOX
// changeMeterImage (){
//     $hungrySadImage = $("<img id='hungrysadimage' src='images/Saddragon.jpeg'></img>")
//     if (tomagatchi.hungerScale <= 5) {
//         $(".hungry").append($hungrySadImage);
//     }
// },





//   reduceMeters(){
//     if (tomagatchi.hungerScale > 0 || tomagatchi.energyScale > 0 || tomagatchi.happinessScale > 0){
//         tomagatchi.hungerScale--;
//         tomagatchi.energyScale--;
//         tomagatchi.happinessScale--;
//         $(".hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`);
//         $(".energyscale").text(`Energy: ${tomagatchi.energyScale}`);
//         $(".happyscale").text(`Happy: ${tomagatchi.hungerScale}`);

//         if(tomagatchi.hungerScale <= 0){
//             clearInterval(tomagatchi.hungerTimer);
//             clearInterval(tomagatchi.ageTimer);
//             clearInterval(tomagatchi.energyTimer);
//             clearInterval(tomagatchi.happyTimer);
//             console.log(`${tomagatchi.name} has died :(`)
//             tomagatchi.petDeath();
//             return
//         } else if (tomagatchi.energyScale <= 0) {
//             clearInterval(tomagatchi.energyTimer);
//             clearInterval(tomagatchi.ageTimer);
//             clearInterval(tomagatchi.hungerTimer);
//             clearInterval(tomagatchi.happyTimer);
//             console.log("Your Tommy has died, he was too weak");
//             tomagatchi.petDeath();
//             return
//         } else if (tomagatchi.happinessScale <= 0) {
//             clearInterval(tomagatchi.happyTimer);
//             clearInterval(tomagatchi.ageTimer);
//             clearInterval(tomagatchi.hungerTimer);
//             clearInterval(tomagatchi.energyTimer);
//             console.log("Your Tommy died of saddness");
//             tomagatchi.petDeath();
//             return

//         }
//     }
//   },


