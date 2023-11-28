var board = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
];

const icon = ["./Image/Black_rook.png", "./Image/Black_horse.png", "./Image/Black_camel.png", "./Image/Black_queen.png", "./Image/Black_king.png", "./Image/Black_camel.png", "./Image/Black_horse.png", "./Image/Black_rook.png"];
const white_icon = ["./Image/White_rook.png", "./Image/White_horse.png", "./Image/White_camel.png", "./Image/White_queen.png", "./Image/White_king.png", "./Image/White_camel.png", "./Image/White_horse.png", "./Image/White_rook.png"];

let id = 0;
let idForInitializePiece = 0;
let possibleMoves = [];
let selection = null;
let turn = "Black";

function _$(string) {
    return document.getElementById(string);
}

function _$class(string) {
    return document.getElementsByClassName(string);
}

function _$tag(string) {
    return document.getElementsByTagName(string);
}

for (let index = 0; index < board.length; index++) {
    _$(
        "table"
    ).innerHTML += `<tr class="border-0 border-[#01eabb]" id="row${index}">
        `;

    if (index == 0) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img src="${icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img src="${icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else if (index == 1) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 6) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 7) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img src="${white_icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img src="${white_icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else {
        for (let i = 0; i < board[index].length; i++) {
            if (index % 2 == 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
            }
            else if (index % 2 != 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
                    id++;
                }
            }
        }
    }
    _$("table").innerHTML += `
      </tr>`;
}

for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[index].length; j++) {
        let piece = _$(idForInitializePiece).children[0] ? _$(idForInitializePiece).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "") : null
        board[index][j] = idForInitializePiece;
        idForInitializePiece++;
    }
}

function possibleMovesForSoldiers(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                if (pieceType == "Black_soldier" && turn == "Black") {
                    let firstPossibleDeath = _$(board[index + 1][i - 1]) ? _$(board[index + 1][i - 1]).children[0] ? _$(board[index + 1][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";
                    let secondPossibleDeath = _$(board[index + 1][i + 1]) ? _$(board[index + 1][i + 1]).children[0] ? _$(board[index + 1][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";

                    if (_$(board[index + 1][i]).innerHTML == "" && (firstPossibleDeath == "" && secondPossibleDeath == "")) {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (id >= 8 && id <= 15) {
                        _$(board[index + 2][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 2][i]);
                    }
                    if (firstPossibleDeath == "White") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (secondPossibleDeath == "White") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i + 1]);
                    }
                    break loop1;
                }
                else if (pieceType == "White_soldier" && turn == "White") {
                    let firstPossibleDeath = _$(board[index - 1][i - 1]) ? _$(board[index - 1][i - 1]).children[0] ? _$(board[index - 1][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";
                    let secondPossibleDeath = _$(board[index - 1][i + 1]) ? _$(board[index - 1][i + 1]).children[0] ? _$(board[index - 1][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";

                    if (_$(board[index - 1][i]).innerHTML == "" && (firstPossibleDeath == "" && secondPossibleDeath == "")) {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (id >= 48 && id <= 55) {
                        _$(board[index - 2][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 2][i]);
                    }
                    if (firstPossibleDeath == "Black") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == "Black") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function possibleMovesForRooks(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);
    let num = 1;

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let rightSidePossibleMove = board[index] ? board[index][i - num] ? _$(board[index][i - num]).children[0] ? _$(board[index][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let leftSidePossibleMove = board[index] ? board[index][i + num] ? _$(board[index][i + num]).children[0] ? _$(board[index][i + num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let downSidePossibleMove = board[index + num] ? board[index + num][i] ? _$(board[index + num][i]).children[0] ? _$(board[index + num][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upSidePossibleMove = board[index - num] ? board[index - num][i] ? _$(board[index - num][i]).children[0] ? _$(board[index - num][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                if (pieceType == "Black_rook" && turn == "Black") {
                    for (let j = index; j < board[index].length - 1; j++) {
                        if (leftSidePossibleMove != "") {
                            if (downSidePossibleMove == "Black"){
                                break loop1;
                            }
                            if (downSidePossibleMove == null) {
                                _$(board[index][i + num]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i + num]);
                            }
                            if (downSidePossibleMove == "White") {
                                break loop1;
                            }
                        }

                        if (rightSidePossibleMove != "") {
                            _$(board[index][i - num]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index][i - num]);
                        }

                        if (downSidePossibleMove != "") {
                            _$(board[index + num][i]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index + num][i]);
                        }

                        if (upSidePossibleMove != "") {
                            _$(board[index - num][i]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index - num][i]);
                        }
                        num++;
                    }
                }
                else if (pieceType == "White_rook" && turn == "White") {
                    for (let j = index; j < board[index].length; j++) {
                        if (leftSidePossibleMove != "") {
                            _$(board[index][i + num]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index][i + num]);
                        }

                        if (rightSidePossibleMove != "") {
                            _$(board[index][i - num]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index][i - num]);
                        }

                        if (downSidePossibleMove != "") {
                            _$(board[index + num][i]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index + num][i]);
                        }

                        if (upSidePossibleMove != "") {
                            _$(board[index - num][i]).style.backgroundColor = "#90EE90";
                            possibleMoves.push(board[index - num][i]);
                        }
                        num++;
                    }
                }
            }
        }
    }
}

function possibleMovesForHorses(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let firstPossiblemove = board[index + 2] ? board[index + 2][i + 1] ? _$(board[index + 2][i + 1]).children[0] ? _$(board[index + 2][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let secondPossiblemove = board[index + 2] ? board[index + 2][i - 1] ? _$(board[index + 2][i - 1]).children[0] ? _$(board[index + 2][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let thirdPossiblemove = board[index + 1] ? board[index + 1][i + 2] ? _$(board[index + 1][i + 2]).children[0] ? _$(board[index + 1][i + 2]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fourthPossiblemove = board[index + 1] ? board[index + 1][i - 2] ? _$(board[index + 1][i - 2]).children[0] ? _$(board[index + 1][i - 2]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fifthPossiblemove = board[index - 2] ? board[index - 2][i + 1] ? _$(board[index - 2][i + 1]).children[0] ? _$(board[index - 2][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let sixthPossiblemove = board[index - 2] ? board[index - 2][i - 1] ? _$(board[index - 2][i - 1]).children[0] ? _$(board[index - 2][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let seventhPossiblemove = board[index - 1] ? board[index - 1][i + 2] ? _$(board[index - 1][i + 2]).children[0] ? _$(board[index - 1][i + 2]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let eighthPossiblemove = board[index - 1] ? board[index - 1][i - 2] ? _$(board[index - 1][i - 2]).children[0] ? _$(board[index - 1][i - 2]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                if (pieceType == "Black_horse" && turn == "Black") {
                    if (firstPossiblemove == null || firstPossiblemove == "White") {
                        _$(board[index + 2][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 2][i + 1]);
                    }
                    if (secondPossiblemove == null || secondPossiblemove == "White") {
                        _$(board[index + 2][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 2][i - 1]);
                    }
                    if (thirdPossiblemove == null || thirdPossiblemove == "White") {
                        _$(board[index + 1][i + 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i + 2]);
                    }
                    if (fourthPossiblemove == null || fourthPossiblemove == "White") {
                        _$(board[index + 1][i - 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i - 2]);
                    }
                    if (fifthPossiblemove == null || fifthPossiblemove == "White") {
                        _$(board[index - 2][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 2][i + 1]);
                    }
                    if (sixthPossiblemove == null || sixthPossiblemove == "White") {
                        _$(board[index - 2][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 2][i - 1]);
                    }
                    if (seventhPossiblemove == null || seventhPossiblemove == "White") {
                        _$(board[index - 1][i + 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i + 2]);
                    }
                    if (eighthPossiblemove == null || eighthPossiblemove == "White") {
                        _$(board[index - 1][i - 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i - 2]);
                    }
                    break loop1;
                }
                else if (pieceType == "White_horse" && turn == "White") {
                    if (firstPossiblemove == null || firstPossiblemove == "Black") {
                        _$(board[index + 2][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 2][i + 1]);
                    }
                    if (secondPossiblemove == null || secondPossiblemove == "Black") {
                        _$(board[index + 2][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 2][i - 1]);
                    }
                    if (thirdPossiblemove == null || thirdPossiblemove == "Black") {
                        _$(board[index + 1][i + 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i + 2]);
                    }
                    if (fourthPossiblemove == null || fourthPossiblemove == "Black") {
                        _$(board[index + 1][i - 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i - 2]);
                    }
                    if (fifthPossiblemove == null || fifthPossiblemove == "Black") {
                        _$(board[index - 2][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 2][i + 1]);
                    }
                    if (sixthPossiblemove == null || sixthPossiblemove == "Black") {
                        _$(board[index - 2][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 2][i - 1]);
                    }
                    if (seventhPossiblemove == null || seventhPossiblemove == "Black") {
                        _$(board[index - 1][i + 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i + 2]);
                    }
                    if (eighthPossiblemove == null || eighthPossiblemove == "Black") {
                        _$(board[index - 1][i - 2]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i - 2]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function possibleMovesForCamels(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);
    let num = 1;

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let downLeftSidePossibleMove = board[index + num] ? board[index + num][num + i] ? _$(board[index + num][num + i]).children[0] ? _$(board[index + num][num + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let downRightSidePossibleMove = board[index + num] ? board[index + num][i - num] ? _$(board[index + num][i - num]).children[0] ? _$(board[index + num][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upLeftSidePossibleMove = board[index - num] ? board[index - num][num + i] ? _$(board[index - num][num + i]).children[0] ? _$(board[index - num][num + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upRightSidePossibleMove = board[index - num] ? board[index - num][i - num] ? _$(board[index - num][i - num]).children[0] ? _$(board[index - num][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                if (pieceType == "Black_camel" && turn == "Black") {
                    for (let j = index; j < board[index].length; j++) {
                        if (downLeftSidePossibleMove == null || downLeftSidePossibleMove == "White" || downLeftSidePossibleMove == "Black") {
                            _$(board[index + num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][num + i]);
                            
                        }

                        if (downRightSidePossibleMove == null || downRightSidePossibleMove == "White" || downRightSidePossibleMove == "Black") {
                            
                            _$(board[index + num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i - num]);
                         
                        }

                        if (upLeftSidePossibleMove == null || upLeftSidePossibleMove == "White" || upLeftSidePossibleMove == "Black") {
                            _$(board[index - num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][num + i]);
                            
                        }

                        if (upRightSidePossibleMove == null || upRightSidePossibleMove == "White" || upRightSidePossibleMove == "Black") {
                            
                            _$(board[index - num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i - num]);
                        }

                        num++;
                    }


                }
                else if (pieceType == "White_camel" && turn == "White") {
                    for (let j = index; j < board[index].length; j++) {
                        if (downLeftSidePossibleMove == null || downLeftSidePossibleMove == "Black" || downLeftSidePossibleMove == "White") {
                            _$(board[index + num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][num + i]);
                            
                        }

                        if (downRightSidePossibleMove == null || downRightSidePossibleMove == "Black" || downRightSidePossibleMove == "White") {
                            
                            _$(board[index + num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i - num]);
                         
                        }

                        if (upLeftSidePossibleMove == null || upLeftSidePossibleMove == "Black" || upLeftSidePossibleMove == "White") {
                            _$(board[index - num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][num + i]);
                            
                        }

                        if (upRightSidePossibleMove == null || upRightSidePossibleMove == "Black" || upRightSidePossibleMove == "White") {
                            
                            _$(board[index - num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i - num]);
                        }

                        num++;

                    }
                }
            }
        }
    }
}

function possibleMovesForQueens(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);
    let num = 1;

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let rightSidePossibleMove = board[index] ? board[index][i - num] ? _$(board[index][i - num]).children[0] ? _$(board[index][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let leftSidePossibleMove = board[index] ? board[index][i + num] ? _$(board[index][i + num]).children[0] ? _$(board[index][i + num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let downSidePossibleMove = board[index + num] ? board[index + num][i] ? _$(board[index + num][i]).children[0] ? _$(board[index + num][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let downLeftSidePossibleMove = board[index + num] ? board[index + num][num + i] ? _$(board[index + num][num + i]).children[0] ? _$(board[index + num][num + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let downRightSidePossibleMove = board[index + num] ? board[index + num][i - num] ? _$(board[index + num][i - num]).children[0] ? _$(board[index + num][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upSidePossibleMove = board[index - num] ? board[index - num][i] ? _$(board[index - num][i]).children[0] ? _$(board[index - num][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upLeftSidePossibleMove = board[index - num] ? board[index - num][num + i] ? _$(board[index - num][num + i]).children[0] ? _$(board[index - num][num + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let upRightSidePossibleMove = board[index - num] ? board[index - num][i - num] ? _$(board[index - num][i - num]).children[0] ? _$(board[index - num][i - num]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                if (pieceType == "Black_queen" && turn == "Black") {
                    for (let j = index; j < board[index].length; j++) {
                        if (leftSidePossibleMove == null || leftSidePossibleMove == "White" || leftSidePossibleMove == "Black") {
                            _$(board[index][i + num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index][i + num]);
                            
                        }

                        if (rightSidePossibleMove == null || rightSidePossibleMove == "White" || rightSidePossibleMove == "Black") {
                            _$(board[index][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index][i - num]);
                            
                        }

                        if (downSidePossibleMove == null || downSidePossibleMove == "White" || downSidePossibleMove == "Black") {
                            _$(board[index + num][i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i]);
                            
                        }

                        if (downLeftSidePossibleMove == null || downLeftSidePossibleMove == "White" || downLeftSidePossibleMove == "Black") {
                            _$(board[index + num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][num + i]);
                            
                        }

                        if (downRightSidePossibleMove == null || downRightSidePossibleMove == "White" || downRightSidePossibleMove == "Black") {
                            
                            _$(board[index + num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i - num]);
                         
                        }

                        if (upSidePossibleMove == null || upSidePossibleMove == "White" || upSidePossibleMove == "Black") {
                            _$(board[index - num][i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i]);
                            
                        }

                        if (upLeftSidePossibleMove == null || upLeftSidePossibleMove == "White" || upLeftSidePossibleMove == "Black") {
                            _$(board[index - num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][num + i]);
                            
                        }

                        if (upRightSidePossibleMove == null || upRightSidePossibleMove == "White" || upRightSidePossibleMove == "Black") {
                            
                            _$(board[index - num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i - num]);
                        }

                        num++;
                    }


                }
                else if (pieceType == "White_queen" && turn == "White") {
                    for (let j = index; j < board[index].length; j++) {
                        if (leftSidePossibleMove == null || leftSidePossibleMove == "Black" || leftSidePossibleMove == "White") {
                            _$(board[index][i + num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index][i + num]);
                            
                        }

                        if (rightSidePossibleMove == null || rightSidePossibleMove == "Black" || rightSidePossibleMove == "White") {
                            _$(board[index][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index][i - num]);
                            
                        }

                        if (downSidePossibleMove == null || downSidePossibleMove == "Black" || downSidePossibleMove == "White") {
                            _$(board[index + num][i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i]);
                            
                        }
                        if (downLeftSidePossibleMove == null || downLeftSidePossibleMove == "Black" || downLeftSidePossibleMove == "White") {
                            _$(board[index + num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][num + i]);
                            
                        }

                        if (downRightSidePossibleMove == null || downRightSidePossibleMove == "Black" || downRightSidePossibleMove == "White") {
                            
                            _$(board[index + num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index + num][i - num]);
                         
                        }

                        if (upSidePossibleMove == null || upSidePossibleMove == "Black" || upSidePossibleMove == "White") {
                            _$(board[index - num][i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i]);
                            
                        }

                        if (upLeftSidePossibleMove == null || upLeftSidePossibleMove == "Black" || upLeftSidePossibleMove == "White") {
                            _$(board[index - num][num + i]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][num + i]);
                            
                        }

                        if (upRightSidePossibleMove == null || upRightSidePossibleMove == "Black" || upRightSidePossibleMove == "White") {
                            
                            _$(board[index - num][i - num]).style.backgroundColor = "#90EE90";
                            
                            possibleMoves.push(board[index - num][i - num]);
                        }

                        num++;

                    }
                }
            }
        }
    }
}

function possibleMovesForKings(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let firstPossibleDeath = board[index - 1] ? board[index - 1][i - 1] ? _$(board[index - 1][i - 1]).children[0] ? _$(board[index - 1][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let secondPossibleDeath = board[index - 1] ? board[index - 1][i] ? _$(board[index - 1][i]).children[0] ? _$(board[index - 1][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let thirdPossibleDeath = board[index - 1] ? board[index - 1][i + 1] ? _$(board[index - 1][i + 1]).children[0] ? _$(board[index - 1][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fourthPossibleDeath = board[index] ? board[index][i - 1] ? _$(board[index][i - 1]).children[0] ? _$(board[index][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fifthPossibleDeath = board[index] ? board[index][i + 1] ? _$(board[index][i + 1]).children[0] ? _$(board[index][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let sixthPossibleDeath = board[index + 1] ? board[index + 1][i - 1] ? _$(board[index + 1][i - 1]).children[0] ? _$(board[index + 1][i - 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let seventhPossibleDeath = board[index + 1] ? board[index + 1][i] ? _$(board[index + 1][i]).children[0] ? _$(board[index + 1][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let eighthPossibleDeath = board[index + 1] ? board[index + 1][i + 1] ? _$(board[index + 1][i + 1]).children[0] ? _$(board[index + 1][i + 1]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                if (pieceType == "Black_king" && turn == "Black") {
                    if (firstPossibleDeath != "") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath != "") {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath != "") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath != "") {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath != "") {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath != "") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath != "") {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath != "") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i + 1]);
                    }

                    break loop1;
                }
                else if (pieceType == "White_king" && turn == "White") {
                    if (firstPossibleDeath != "") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath != "") {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath != "") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath != "") {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath != "") {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath != "") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath != "") {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath != "") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        
                        possibleMoves.push(board[index + 1][i + 1]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function move(e) {
    if (selection == null) {
        for (i = 0; i < 64; i++) {
            rowIndex = parseInt(_$class("tile")[i].parentElement.id.replace("row", ""));
            if (rowIndex % 2 == 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#d18b46";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#a3524e";
                }
            }
            else if (rowIndex % 2 != 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#a3524e";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#d18b46";
                }
            }
        }

        let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null
        let pieceVrient = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;

        if (piece == "soldier") {
            selection = e.id;
            possibleMovesForSoldiers(e);
        }

        if (piece == "rook") {
            selection = e.id;
            possibleMovesForRooks(e);
        }

        if (piece == "horse") {
            selection = e.id;
            possibleMovesForHorses(e);
        }

        if (piece == "camel") {
            selection = e.id;
            possibleMovesForCamels(e);
        }

        if (piece == "queen") {
            selection = e.id;
            possibleMovesForQueens(e);
        }

        if (piece == "king") {
            selection = e.id;
            possibleMovesForKings(e);
        }

        if (pieceVrient != turn) {
            
        }
    }
    else {
        let image = _$(selection).children[0].getAttribute("src");
        let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "") : null;
        let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null

        if (possibleMoves.indexOf(parseInt(e.id)) !== -1) {
            _$(selection).innerHTML = "";
            _$(e.id).innerHTML = `<img src="${image}"/>`;
            let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "") : null;

            if (
                pieceType == "Black_rook" ||
                pieceType == "Black_horse" ||
                pieceType == "Black_camel" ||
                pieceType == "Black_queen" ||
                pieceType == "Black_king" ||
                pieceType == "Black_soldier"
            ) {
                turn = "White";
            }
            else if (
                pieceType == "White_rook" ||
                pieceType == "White_horse" ||
                pieceType == "White_camel" ||
                pieceType == "White_queen" ||
                pieceType == "White_king" ||
                pieceType == "White_soldier"
            ) {
                turn = "Black";
            }
            selection = null;
            possibleMoves = [];
        }

        else if (pieceType == null) {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Please select the possible moves...`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
            selection = null;
            possibleMoves = [];
        }

        else {
            selection = null;
            possibleMoves = [];
            document.move(e);
        }
        for (i = 0; i < 64; i++) {
            rowIndex = parseInt(_$class("tile")[i].parentElement.id.replace("row", ""));
            if (rowIndex % 2 == 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#d18b46";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#a3524e";
                }
            }
            else if (rowIndex % 2 != 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#a3524e";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#d18b46";
                }
            }
        }
    }

}