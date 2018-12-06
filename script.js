$(function(){
	console.log('Doc Ready');

	// userWins, cpuWins, and draws variables keep track of the wins/draws acquired by the player and computer
	let userWins = 0;
	let cpuWins = 0;
	let draws = 0;

	// Object containing information pertaining to the 'rps' function
	// rpsArray is the string array used to generate the random pick by the computer
	// cpuOutput is stores the randomly picked item out of the aforementioned array
	const rpsTracker = {
		rpsArray: [`Rock`,`Paper`,`Scissors`],
		cpuOutput: ``,
	};

	// The 'clearscore' function resets the scores back to 0, so that the player may play another match
    const clearScore = () => {
    	userWins = 0;
    	cpuWins = 0;
    	draws = 0;

    	// Updates the scoreboard to display 0 for player and computer
    	$( "#cpuScore" ).text( cpuWins );
		$( "#userScore" ).text( userWins );
		$( "#draws" ).text( draws );
    }

	// The compare function is the main function. Takes a user input, generates a cpu output, and compares the two values to award a point
    const rpsCompare = () => {

    	// Setting the user input to lowercase to account for capitalization
		let rpsInput = prompt(`Enter your choice!`).toLowerCase();
		
		// Picking out a random item from the rpsArray for the computer's choice
		rpsTracker.cpuOutput = rpsTracker.rpsArray[Math.floor(Math.random() * rpsTracker.rpsArray.length)].toLowerCase(); 

		// If-statement block for comparison checks between user entry and computer choice
		// Checks if the user's parameter is 'rock', 'paper', or 'scissor', if not it returns that information to the user 
		if (rpsInput != `rock` && rpsInput != `paper` && rpsInput != `scissors`) {
			console.log(`You didn't enter 'Rock', 'Paper', or 'Scissors' :(  Try again!`);
		
		// User win conditions
		} else if (rpsInput === `rock` && rpsTracker.cpuOutput === `scissors`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. You win!"`);
			userWins = userWins + 1;
			//console.log(userWins);

		} else if (rpsInput === `paper` && rpsTracker.cpuOutput === `rock`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. You win!"`);
			userWins = userWins + 1;
			//console.log(userWins);

		} else if (rpsInput === `scissors` && rpsTracker.cpuOutput === `paper`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. You win!"`);
			userWins = userWins + 1;
			//console.log(userWins);

		// CPU win conditions
		} else if (rpsInput === `rock` && rpsTracker.cpuOutput === `paper`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. I win!"`);
			cpuWins = cpuWins + 1;
			//console.log(cpuWins);

		} else if (rpsInput === `paper` && rpsTracker.cpuOutput === `scissors`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. I win!"`);
			cpuWins = cpuWins + 1;
			//console.log(cpuWins);

		} else if (rpsInput === `scissors` && rpsTracker.cpuOutput === `rock`) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. I win!"`);
			cpuWins = cpuWins + 1;
			//console.log(cpuWins);

		// Draw condition
		} else if (rpsInput === rpsTracker.cpuOutput) {
			console.log(`"You chose ${rpsInput}, I chose ${rpsTracker.cpuOutput}. It's a tie!"`);
			draws = draws + 1;
		}

		// Updates the scoreboard to display acquired points, and draws
		$( "#cpuScore" ).text( cpuWins );
		$( "#userScore" ).text( userWins );
		$( "#draws" ).text( draws );
    }

    // This function toggles the victory text and prepends either Player or Computer to indicate who won
    const rpsVictorySplash = () => {
		if (userWins === 5) {
			$(".prepended").remove();
			$('h3').prepend(`<span class="prepended">Player </span>`);
		} else if (cpuWins === 5) {
			$(".prepended").remove();
			$('h3').prepend(`<span class="prepended">Computer </span>`);
		}
		$('h3').toggleClass("toggleView");
    }

    // The Game Loop - Runs the 'compare' function until the five-win condition is met, upon which the game is complete
	const rps = () => {
    	do {
			rpsCompare();
		} 
		while (userWins < 5 && cpuWins < 5);
	}

    // The 'start' function runs the 'clearscore' and 'rps' functions and initializes the game
    const start = () => {
    	clearScore();
    	$('h3').addClass("toggleView");
    	rps();
    	rpsVictorySplash();
    }

    // Upon clicking the start button, initialize the 'start' function
	$('#start').on('click', function(){
        start();
    })

	// Upon clicking the rules button, alert box with the rules pops up
    $('#rules').on('click', function(){
        alert(`Welcome to a simple game app for Rock, Paper, Scissors!
        	\nThe rules are simple: Rock beats Scissors, Scissors beat Paper, and Paper beats Rock.
        	\nIf both the player and computer have the same pick, it's a draw.
        	\nNOTE: This game requires the console to be open, please press F12 on your keyboard.
        	\nGood Luck!`);
    })
});