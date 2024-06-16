/*
Raffle Winner Verification
Program In this program, you can verify if a person is among the list of winners in a raffle. Simply
input the name or ticket number, and the program will check and display the winner's information.
*/
let playersRaffle = ["Mario", "Pablo", "Veronica", "Angie"]
const win = "Pablo"

function winnerRaffle(array) {
    let winnerName = array.find(name =>
        name === win
    )
    winnerName ?
        console.log(winnerName, "You win!!") :
        console.log("No winners")
}

winnerRaffle(playersRaffle)




const participants = [
    { id: 1, name: "Jennifer", ticketNumber: 1 },
    { id: 2, name: "Michael", ticketNumber: 8 },
    { id: 3, name: "Emily", ticketNumber: 15 },
    { id: 4, name: "Charlie", ticketNumber: 47 }
]

function participantWinner(name) {
    let winnerParticipant = participants.find(
        participant => participant.name === name
    )
    return winnerParticipant || "No winners"
}


function winnersWithTicket(ticketNumber) {
    const index = participants.findIndex(participant => participant.ticketNumber === ticketNumber)
    return index !== -1 ? index : "No winners find with that ticket numbers"
}

function winnerInfo(winner) {
    if (winner !== undefined || winner !== null || winner !== "No winners") {
        console.log("Winner information = ", winner);
    } else {
        console.log("No winners");
    }
}

const oneWinnerName = participantWinner("Emily")
const OneWinnerTicket = winnersWithTicket(15)

winnerInfo(oneWinnerName)
console.log("Index of ticket winner: ", OneWinnerTicket);