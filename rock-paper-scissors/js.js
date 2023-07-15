// let computer_score = 0;
// let user_score = 0;
// let user_choice;
// let computer_choice;
// let winner;


// function get_computer_choice()
// {
//     let number = Math.floor(Math.random() * 3);
//     switch(number)
//     {
//         case 0:
//             return "rock";
//         case 1:
//             return "paper";
//         case 2:
//             return "scissors";
//     }
// }


















// function determine_winner(user, computer)
// {
//     if (user == computer)
//         return 'tie'
//     if (user == 'rock' && computer == 'paper')
//         return 'computer'
//     if (user == 'rock' && computer == 'scissors')
//         return 'user'
//     if (user == 'paper' && computer == 'rock')
//         return 'user'
//     if (user == 'paper' && computer == 'scissors')
//         return 'computer'
//     if (user == 'scissors' && computer == 'paper')
//         return 'user'
//     if (user == 'scissors' && computer == 'rock')
//         return 'computer'
// }


let choice=12;
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => 
{choice = 'rock';
alert(choice)});
