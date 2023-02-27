
// Mini function to get random numbers
const random = (min, max) => Math.floor(Math.random() * max) + min;

// Function to calculate mod correctly
const mod = (n, m) => (n % m + m) % m;


const changeImage = (player, chosen) => $(`.show.${player} i`).attr("class", `fas fa-hand-${chosen}`);

const changeScore = (player) => $(`#${player}Score`).text(function(i, currScore) {
                                                                return parseInt(currScore) + 1;})


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function name_to_num(player) {
    switch (player) {
        case 'rock':
            return 0;
            break;
        case 'paper':
            return 1;
            break;
        case 'scissors':
            return 2;
            break;
        default:
            console.error("Invalid");
            break;
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function num_to_name(comp) {
    switch (comp) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break
        default:    
            break;
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function compare(choice) {
    var comp = random(0, 3)

    var player_input = choice
    var diff = mod((player_input - comp), 3)
    var comp_output = num_to_name(comp)

    changeImage("computer", comp_output)

    var player_output = num_to_name(choice)

    switch (diff) {
        case 1:
            return "WIN"
            break
        case 2:
            return "LOSE"
            break
        default:
            return "TIE"
            break
    }

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
    
    $("button.fas").click(function () {
        var chosen = $(this).attr("id")
        changeImage("player", chosen)
        let result = compare(name_to_num(chosen));

        switch (result) {
            case 'WIN':
                $("#demo").text("WIN!").attr('class', 'display-2 text-success')
                changeScore('player')
                break
            case 'LOSE':
                $("#demo").text("LOSE!").attr('class', 'display-2 text-danger')
                changeScore('computer')
                break
            default:
                $("#demo").text("TIE!").attr('class', 'display-2 text-warning')
                break
        }


    })
});