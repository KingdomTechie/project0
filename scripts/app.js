console.log("Welcome to the world little tomagatchi!");


const tomagatchi = {
    name: "",
    age: 0,
    hungerScale: 10,
    energyScale: 10,
    happinessScale: 10,

         // This function begins the core function of the game.
    petName () {
        $name = $("#petname").val();
        tomagatchi.name = $name;
        $("h1").text(`Keep ${$name} alive!!`);

        // this code removes these elements to make way for core game mechanics
        $("input").fadeOut(100);
        $("#petsubmit").fadeOut(100);
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

        // Images created for meters.
        $hungryHappyImage = $("<img id='happydragonimage' src='images/pokedragoneating.png'></img>");
        $hungrySadImage = $("<img id='saddragonimage' src='images/Saddragon.jpeg'></img>")
        $(".hungry").append($hungryHappyImage);
        $energyHappyImage = $("<img id='energyhappyimage' src='images/Spyrostrongdragon.png'></img>")
        $(".energy").append($energyHappyImage);
        $happyHappyImage = $("<img id='happyhappyImage' src='images/playfuldragon.png'></img>");
        $(".happy").append($happyHappyImage);


        // This section starts the meter timers
        tomagatchi.startHungryTimer();
        tomagatchi.startAgeTimer();
        tomagatchi.startEnergyTimer();
        tomagatchi.startHappyTimer();

        // Code block appends the meter buttons to the DOM
        $hungryButton = $("<button id='hungrybutton'>HUNGRY!</button>");
        $energyButton = $("<button id='energybutton'>Need Energy!</button>");
        $happyButton = $("<button id= 'happybutton'>Play with me!</button>");
        $(".hungry").after($hungryButton);
        $(".energy").after($energyButton);
        $(".happy").after($happyButton);

       // These on click event listeners are stored within petName to trigger the meter buttons
        $("#hungrybutton").on("click", tomagatchi.feedMe);
        $("#energybutton").on("click", tomagatchi.energizeMe);
        $("#happybutton").on("click", tomagatchi.makeHappy);

    },

    // This section begins the TIMER LOGIC for AGE, HUNGER, HAPPY, ENERGY meters
    startEnergyTimer() {
        console.log("Energy Timer");
        tomagatchi.energyTimer = setInterval(tomagatchi.reduceEnergyMeter, 1000);
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
        if(tomagatchi.energyScale <= 0) {
            clearInterval(tomagatchi.energyTimer);
            clearInterval(tomagatchi.startAgeTimer);
            clearInterval(tomagatchi.hungerTimer);
            clearInterval(tomagatchi.happyTimer);
            console.log("Your Tommy has died, he was too weak");
            tomagatchi.petDeath();
            return
        }
    },

    // Referenced from Dalton
    startHungryTimer(){
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
        if(tomagatchi.hungerScale <= 0 ){
            clearInterval(tomagatchi.hungerTimer);
            clearInterval(tomagatchi.startAgeTimer);
            clearInterval(tomagatchi.energyTimer);
            clearInterval(tomagatchi.happyTimer);
            console.log(`${tomagatchi.name} has died :(`)
            tomagatchi.petDeath();
            return
        }
    },

    startHappyTimer () {
        console.log("Happy Timer");
        tomagatchi.happyTimer = setInterval(tomagatchi.reduceHappyMeter, 1000);
    },

    makeHappy () {
        console.log("Play with me!");
        if(tomagatchi.happinessScale >= 10) {
            tomagatchi.happinessScale = 10;
        }
        tomagatchi.happinessScale = tomagatchi.happinessScale + 1;
    },

    reduceHappyMeter () {
        tomagatchi.happinessScale--;
        $(".happyscale").text(`Hungry: ${tomagatchi.happinessScale}`);
        if (tomagatchi.happinessScale === 0) {
            clearInterval(tomagatchi.happyTimer);
            clearInterval(tomagatchi.startAgeTimer);
            clearInterval(tomagatchi.hungerTimer);
            clearInterval(tomagatchi.energyTimer);
            console.log("Your Tommy died of saddness");
            tomagatchi.petDeath();
            return
        }
    },

    startAgeTimer(){
        tomagatchi.startAgeTimer = setInterval(tomagatchi.ageCounter, 2000)
    },

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
    petDeath () {
        $("body").css("background-image", "url(https://c4.wallpaperflare.com/wallpaper/601/475/772/grave-yard-green-trees-and-web-wallpaper-preview.jpg)")
        $deathBar = $(`<div id="deathbar">${tomagatchi.name} has died</div>`)
        $("h1").remove();
        $(".meters").fadeOut(400);
        $("body").append($deathBar)
        console.log("This will create the end of the game");
        $("#profilepicID").attr("src", "images/tombstone.png")
        $(".petcard").css("animation", "")
        return
    },
      
}


$("#petsubmit").on("click", tomagatchi.petName);






// NOTE - still need to work through this logic - ICE BOX
// changeMeterImage (){
//     $hungrySadImage = $("<img id='hungrysadimage' src='images/Saddragon.jpeg'></img>")
//     if (tomagatchi.hungerScale <= 5) {
//         $(".hungry").append($hungrySadImage);
//     }
// },



