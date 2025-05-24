

export function winCheck(CellArray,turn){
    const PlayerOneEmoji = localStorage.getItem('firstPlayerEmoji').split(',')
    const PlayerTwoEmoji = localStorage.getItem('secondPlayerEmoji').split(',')

    if (turn === 'player1'){
        return [CheckForPlayer(CellArray,PlayerTwoEmoji),'Player2']
    }else{
        return [CheckForPlayer(CellArray,PlayerOneEmoji),'Player1']
    }

}

function CheckForPlayer(CellArray,Emoji){
    // check for Rows
    if (CheckRows(CellArray[0].current.innerHTML,CellArray[1].current.innerHTML,CellArray[2].current.innerHTML,Emoji)){
        return true
    }
    if (CheckRows(CellArray[3].current.innerHTML,CellArray[4].current.innerHTML,CellArray[5].current.innerHTML,Emoji)){
        return true
    }
    if (CheckRows(CellArray[6].current.innerHTML,CellArray[7].current.innerHTML,CellArray[8].current.innerHTML,Emoji)){
        return true
    }
    //check columns
    if (CheckRows(CellArray[0].current.innerHTML,CellArray[3].current.innerHTML,CellArray[6].current.innerHTML,Emoji)){
        return true
    }
    if (CheckRows(CellArray[1].current.innerHTML,CellArray[4].current.innerHTML,CellArray[7].current.innerHTML,Emoji)){
        return true
    }
    if (CheckRows(CellArray[2].current.innerHTML,CellArray[5].current.innerHTML,CellArray[8].current.innerHTML,Emoji)){
        return true
    }

    // Check for Diagonals
    if (CheckRows(CellArray[0].current.innerHTML,CellArray[4].current.innerHTML,CellArray[8].current.innerHTML,Emoji)){
        return true
    }
    if (CheckRows(CellArray[2].current.innerHTML,CellArray[4].current.innerHTML,CellArray[6].current.innerHTML,Emoji)){
        return true
    }

    return false

}

function CheckRows(Cell1,Cell2,Cell3,Emoji){
    if (Emoji.includes(Cell1) && Emoji.includes(Cell2) && Emoji.includes(Cell3)){
        return true
    }
    return false
}