function get_user_choice()
{
    let choice = prompt("Rock, paper or scissors?");
    choice = choice.toLowerCase();
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors')
    {
        choice = prompt("Rock, paper or scissors?");
        choice = choice.toLowerCase()  ;
    }
    return choice;
}

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

function game ()
{
    let computer_score = 0;
    let user_score = 0;
    let user_choice;
    let computer_choice;
    let winner;

    while (computer_score < 5 && user_score < 5)
    {
        user_choice = get_user_choice();
        computer_choice = get_computer_choice();
        winner = determine_winner(user_choice, computer_choice);
        
        if(winner != 'tie')
        {
            if (winner == 'user')
                user_score++;
            else
                computer_score++;
        }
        console.log
        (`
            computer: ${computer_score}
            user: ${user_score}
        `);
        if(winner == 'tie')
            console.log('It\'s a tie.');
        
        else
            console.log(`${winner} wins.`);
    }

    
}

game()