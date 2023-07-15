let user_choice;
let computer_choice;
let winner;
let parsed_int_score;
let computer_wins = false;
let user_wins = false; 


function get_computer_choice()
{
    let number = Math.floor(Math.random() * 3);
    switch(number)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}




function determine_winner(user, computer)
{
    if (user == computer)
        return 'tie'
    if (user == 'rock' && computer == 'paper')
        return 'computer'
    if (user == 'rock' && computer == 'scissors')
        return 'user'
    if (user == 'paper' && computer == 'rock')
        return 'user'
    if (user == 'paper' && computer == 'scissors')
        return 'computer'
    if (user == 'scissors' && computer == 'paper')
        return 'user'
    if (user == 'scissors' && computer == 'rock')
        return 'computer'
}

function disableImages() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.onclick = null;
        
    });
}


function update_the_game() {
    user_choice = this.dataset.value
    computer_choice = get_computer_choice();
    winner = determine_winner(user_choice, computer_choice);
    winner_board = document.querySelector('.winner')

    const user_score = document.querySelector('.user-score div');
    const computer_score = document.querySelector('.computer-score div');

   
    if (winner === 'tie')
    {
        winner_board.textContent = 'It\'s a tie';
    }
    else if (winner === 'user')
    {
        winner_board.textContent = 'Great! You beat the computer!';
        parsed_int_score = parseInt(user_score.textContent);
        user_score.textContent = parsed_int_score + 1;
        if (user_score.textContent == 5)
        {
            user_wins = true;
            winner_board.textContent = 'User wins';
            disableImages();
        }
    }
    else
    {
        winner_board.textContent = ':( Computer beats you.';
        parsed_int_score = parseInt(computer_score.textContent);
        computer_score.textContent = parsed_int_score + 1;
        if (computer_score.textContent == 5)
        {
            computer_wins = true;
            winner_board.textContent = 'Computer wins';
            disableImages();
        }
    }

    
}

                  

document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.rock').onclick = update_the_game;
        document.querySelector('.paper').onclick = update_the_game;
        document.querySelector('.scissors').onclick = update_the_game;
});