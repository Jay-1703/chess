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
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="${icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="${icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else if (index == 1) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="./Image/Black_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 6) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="./Image/White_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="./Image/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 7) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="${white_icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light"  onclick="move(this)"><img class="w-24 h-10 lg:w-20 lg:h-16" src="${white_icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else {
        for (let i = 0; i < board[index].length; i++) {
            if (index % 2 == 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
            }
            else if (index % 2 != 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#a3524e] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="bg-[#d18b46] cursor-pointer border-black border-2 w-24 h-14 lg:w-20 lg:h-20 text-[30px] font-bold p-2 tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
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

for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[index].length; j++) {
        if (_$(board[index][j]).children[0])
            _$(board[index][j]).setAttribute("onclick", "selectPossibleMoves(this)");
        else
            _$(board[index][j]).setAttribute("onclick", "place(this)");
    }
}

function selectPlayer(e) {
    if (e.value == "Black") {
        player1 = e.value;
        player2 = "White";
        turn = player1;
        _$("selectPlayer").style.visibility = "hidden";
        _$("player1").innerHTML = player1;
        _$("player2").innerHTML = player2;
    }
    else if (e.value == "White") {
        player1 = e.value;
        player2 = "Black";
        turn = player1;
        _$("selectPlayer").style.visibility = "hidden";
        _$("player1").innerHTML = player1;
        _$("player2").innerHTML = player2;
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
                if (pieceType == "Black_rook" && turn == "Black") {
                    loop3:
                    for (let j = 1, k = 1,m = 1, n = 1 ;((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length)); j < board[index].length?j++:j, k < board[index].length?k++:k,m < board[index].length?m++:m,n < board[index].length?n++:n) {
                        let leftSidePossibleMove = board[index] ? board[index][i - m] ? _$(board[index][i - m]).children[0] ? _$(board[index][i - m]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + n] ? _$(board[index][i + n]).children[0] ? _$(board[index][i + n]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - k] ? board[index - k][i] ? _$(board[index - k][i]).children[0] ? _$(board[index - k][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + j] ? board[index + j][i] ? _$(board[index + j][i]).children[0] ? _$(board[index + j][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                        if (rightSidePossibleMove != "") {
                             if (rightSidePossibleMove == "Black") {
                                 n = board[index].length;
                             }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i + n]);
                            }
                            if (rightSidePossibleMove == "White") {
                                _$(board[index][i + n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i + n]);
                                n = board[index].length;
                            }
                        }

                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "Black") {
                                m = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - m]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - m]);
                            }
                            if (leftSidePossibleMove == "White") {
                                _$(board[index][i - m]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - m]);
                                m = board[index].length;
                            }

                        }

                        if (downSidePossibleMove != "") {
                             if (downSidePossibleMove == "Black") {
                                j = board[index].length;
                             }
                            if (downSidePossibleMove == null) {
                                _$(board[index + j][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][i]);
                            }
                            if (downSidePossibleMove == "White") {
                                _$(board[index + j][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][i]);
                                j = board[index].length;
                            }
                        }

                        if (upSidePossibleMove != "") {
                             if (upSidePossibleMove == "Black") {
                                k = board[index].length;
                             }
                            if (upSidePossibleMove == null) {
                                _$(board[index - k][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - k][i]);
                            }
                            if (upSidePossibleMove == "White") {
                                _$(board[index - k][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - k][i]);
                            }
                        }
                        num++;
                    }
                }
                else if (pieceType == "White_rook" && turn == "White") {
                    for (let j = 1, k = 1,m = 1, n = 1 ;((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length)); j < board[index].length?j++:j, k < board[index].length?k++:k,m < board[index].length?m++:m,n < board[index].length?n++:n) {
                        let leftSidePossibleMove = board[index] ? board[index][i - m] ? _$(board[index][i - m]).children[0] ? _$(board[index][i - m]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + n] ? _$(board[index][i + n]).children[0] ? _$(board[index][i + n]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - k] ? board[index - k][i] ? _$(board[index - k][i]).children[0] ? _$(board[index - k][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + j] ? board[index + j][i] ? _$(board[index + j][i]).children[0] ? _$(board[index + j][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                        if (rightSidePossibleMove != "") {
                             if (rightSidePossibleMove == "White") {
                                 n = board[index].length;
                             }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i + n]);
                            }
                            if (rightSidePossibleMove == "Black") {
                                _$(board[index][i + n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i + n]);
                                n = board[index].length;
                            }
                        }

                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "White") {
                                m = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - m]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - m]);
                            }
                            if (leftSidePossibleMove == "Black") {
                                _$(board[index][i - m]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - m]);
                                m = board[index].length;
                            }

                        }

                        if (downSidePossibleMove != "") {
                             if (downSidePossibleMove == "White") {
                                j = board[index].length;
                             }
                            if (downSidePossibleMove == null) {
                                _$(board[index + j][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][i]);
                            }
                            if (downSidePossibleMove == "Black") {
                                _$(board[index + j][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][i]);
                                j = board[index].length;
                            }
                        }

                        if (upSidePossibleMove != "") {
                             if (upSidePossibleMove == "White") {
                                k = board[index].length;
                             }
                            if (upSidePossibleMove == null) {
                                _$(board[index - k][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - k][i]);
                            }
                            if (upSidePossibleMove == "Black") {
                                _$(board[index - k][i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - k][i]);
                                k = board[index].length;
                            }
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
                if (pieceType == "Black_camel" && turn == "Black") {
                    for (let j = 1, k = 1,m = 1, n = 1 ;((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let downLeftSidePossibleMove = board[index + j] ? board[index + j][j + i] ? _$(board[index + j][j + i]).children[0] ? _$(board[index + j][j + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + k] ? board[index + k][i - k] ? _$(board[index + k][i - k]).children[0] ? _$(board[index + k][i - k]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", ""): null : "" : "";
                        let upLeftSidePossibleMove = board[index - m] ? board[index - m][m + i] ? _$(board[index - m][m + i]).children[0] ? _$(board[index - m][m + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", ""): null :"" :"";
                        let upRightSidePossibleMove = board[index - n] ? board[index - n][i - n] ? _$(board[index - n][i - n]).children[0] ? _$(board[index - n][i - n]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "Black") {
                                j = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][j + i]);
                            }
                            if (downLeftSidePossibleMove == "White") {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][j + i]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (downLeftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "Black") {
                                k = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + k][i - k]);
                            }
                            if (downRightSidePossibleMove == "White") {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + k][i - k]);
                                k = board[index].length;
                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (downRightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "Black") {
                                m = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - m][m + i]);
                            }
                            if (upLeftSidePossibleMove == "White") {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - m][m + i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (upLeftSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "Black") {
                                n = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - n][i - n]);
                            }
                            if (upRightSidePossibleMove == "White") {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upRightSidePossibleMove == "") {
                            n = board[index].length;
                        }
                    }
                }
                else if (pieceType == "White_camel" && turn == "White") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let downLeftSidePossibleMove = board[index + j] ? board[index + j][j + i] ? _$(board[index + j][j + i]).children[0] ? _$(board[index + j][j + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + k] ? board[index + k][i - k] ? _$(board[index + k][i - k]).children[0] ? _$(board[index + k][i - k]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - m] ? board[index - m][m + i] ? _$(board[index - m][m + i]).children[0] ? _$(board[index - m][m + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - n] ? board[index - n][i - n] ? _$(board[index - n][i - n]).children[0] ? _$(board[index - n][i - n]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "White") {
                                j = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][j + i]);
                            }
                            if (downLeftSidePossibleMove == "Black") {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + j][j + i]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (downLeftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "White") {
                                k = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + k][i - k]);
                            }
                            if (downRightSidePossibleMove == "Black") {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + k][i - k]);
                                k = board[index].length;
                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (downRightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "White") {
                                m = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - m][m + i]);
                            }
                            if (upLeftSidePossibleMove == "Black") {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - m][m + i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (upLeftSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "White") {
                                n = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - n][i - n]);
                            }
                            if (upRightSidePossibleMove == "Black") {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - n][i - n]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upRightSidePossibleMove == "") {
                            n = board[index].length;
                        }
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
                if (pieceType == "Black_queen" && turn == "Black") {
                    for (let j = 1, k = 1,m = 1, n = 1, o = 1, p = 1,q = 1, r = 1 ;((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length) || (o < board[index].length) || (p < board[index].length) || (q < board[index].length) || (r < board[index].length));) {
                        let rightSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let leftSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - p] ? board[index - p][i] ? _$(board[index - p][i]).children[0] ? _$(board[index - p][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                            
                        let upLeftSidePossibleMove = board[index - q] ? board[index - q][q + i] ? _$(board[index - q][q + i]).children[0] ? _$(board[index - q][q + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downLeftSidePossibleMove = board[index + n] ? board[index + n][n + i] ? _$(board[index + n][n + i]).children[0] ? _$(board[index + n][n + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + o] ? board[index + o][i - o] ? _$(board[index + o][i - o]).children[0] ? _$(board[index + o][i - o]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - r] ? board[index - r][i - r] ? _$(board[index - r][i - r]).children[0] ? _$(board[index - r][i - r]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "Black") {
                                j = board[index].length;
                            }
                           if (rightSidePossibleMove == null) {
                               _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i - j]);
                           }
                           if (rightSidePossibleMove == "White") {
                               _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i - j]);
                               j = board[index].length;
                           }
                           j < board[index].length ? j++ : j;
                        }
                        if (rightSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (leftSidePossibleMove != "") {
                           if (leftSidePossibleMove == "Black") {
                               k = board[index].length;
                           }
                           if (leftSidePossibleMove == null) {
                               _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i + k]);
                           }
                           if (leftSidePossibleMove == "White") {
                               _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i + k]);
                               k = board[index].length;
                           }
                           k < board[index].length ? k++ : k;
                        }
                        if (leftSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                        if (downSidePossibleMove == "Black") {
                           m = board[index].length;
                        }
                       if (downSidePossibleMove == null) {
                           _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                           possibleMoves.push(board[index + m][i]);
                       }
                       if (downSidePossibleMove == "White") {
                           _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                           possibleMoves.push(board[index + m][i]);
                           m = board[index].length;
                       }
                       m < board[index].length ? m++ : m;
                        }
                        if (downSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                        if (upSidePossibleMove == "Black") {
                           p = board[index].length;
                        }
                       if (upSidePossibleMove == null) {
                           _$(board[index - p][i]).style.backgroundColor = "#90EE90";
                           possibleMoves.push(board[index - p][i]);
                       }
                       if (upSidePossibleMove == "White") {
                           _$(board[index - p][i]).style.backgroundColor = "#90EE90";
                           possibleMoves.push(board[index - p][i]);
                       }
                       p < board[index].length ? p++ : p;
                        }
                        if (upSidePossibleMove == "") {
                            p = board[index].length;
                        }


                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "Black") {
                                n = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + n][n + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + n][n + i]);
                            }
                            if (downLeftSidePossibleMove == "White") {
                                _$(board[index + n][n + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + n][n + i]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (downLeftSidePossibleMove == "") {
                            n = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "Black") {
                                o = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + o][i - o]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + o][i - o]);
                            }
                            if (downRightSidePossibleMove == "White") {
                                _$(board[index + o][i - o]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + o][i - o]);
                                o = board[index].length;
                            }
                            o < board[index].length ? o++ : o;
                        }

                        if (downRightSidePossibleMove == "") {
                            o = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "Black") {
                                q = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - q][q + i]);
                            }
                            if (upLeftSidePossibleMove == "White") {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - q][q + i]);
                                q = board[index].length;
                            }
                            q < board[index].length ? q++ : q;
                        }

                        if (upLeftSidePossibleMove == "") {
                            q = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "Black") {
                                r = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - r][i - r]);
                            }
                            if (upRightSidePossibleMove == "White") {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                r = board[index].length;
                            }
                            r < board[index].length ? r++ : r;
                        }

                        if (upRightSidePossibleMove == "") {
                            r = board[index].length;
                        }
                        num++;
                    }
                }
                else if (pieceType == "White_queen" && turn == "White") {
                    for (let j = 1, k = 1, m = 1, n = 1, o = 1, p = 1, q = 1, r = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length) || (o < board[index].length) || (p < board[index].length) || (q < board[index].length) || (r < board[index].length));) {
                        let leftSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - n] ? board[index - n][i] ? _$(board[index - n][i]).children[0] ? _$(board[index - n][i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                        let downLeftSidePossibleMove = board[index + o] ? board[index + o][o + i] ? _$(board[index + o][o + i]).children[0] ? _$(board[index + o][o + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + p] ? board[index + p][i - p] ? _$(board[index + p][i - p]).children[0] ? _$(board[index + p][i - p]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - q] ? board[index - q][q + i] ? _$(board[index - q][q + i]).children[0] ? _$(board[index - q][q + i]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - r] ? board[index - r][i - r] ? _$(board[index - r][i - r]).children[0] ? _$(board[index - r][i - r]).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        

                        console.log("upLeftSidePossibleMove :",upLeftSidePossibleMove);
                        console.log("q :",q)

                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "White") {
                                k = board[index].length;
                            }
                           if (rightSidePossibleMove == null) {
                               _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i + k]);
                           }
                           if (rightSidePossibleMove == "Black") {
                               _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index][i + k]);
                               k = board[index].length;
                           }
                           k < board[index].length ? k++ : k;
                        }
                        if (rightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "White") {
                                j = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - j]);
                            }
                            if (leftSidePossibleMove == "Black") {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index][i - j]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }
                        if (leftSidePossibleMove == "") {
                             j = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                            if (downSidePossibleMove == "White") {
                               m = board[index].length;
                            }
                           if (downSidePossibleMove == null) {
                               _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index + m][i]);
                           }
                           if (downSidePossibleMove == "Black") {
                               _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index + m][i]);
                               m = board[index].length;
                           }
                           m < board[index].length ? m++ : m;
                        }
                        if (downSidePossibleMove == "") {
                                m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                            if (upSidePossibleMove == "White") {
                               n = board[index].length;
                            }
                           if (upSidePossibleMove == null) {
                               _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index - n][i]);
                           }
                           if (upSidePossibleMove == "Black") {
                               _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                               possibleMoves.push(board[index - n][i]);
                               n = board[index].length;
                           }
                           n < board[index].length ? n++ : n;
                        }
                        if (upSidePossibleMove == "") {
                            n = board[index].length;
                        }

                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "White") {
                                o = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + o][o + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + o][o + i]);
                            }
                            if (downLeftSidePossibleMove == "Black") {
                                _$(board[index + o][o + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + o][o + i]);
                                o = board[index].length;
                            }
                            o < board[index].length ? o++ : o;
                        }

                        if (downLeftSidePossibleMove == "") {
                            o = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "White") {
                                p = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + p][i - p]);
                            }
                            if (downRightSidePossibleMove == "Black") {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index + p][i - p]);
                                p = board[index].length;
                            }
                            p < board[index].length ? p++ : p;
                        }

                        if (downRightSidePossibleMove == "") {
                            p = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "White") {
                                q = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - q][q + i]);
                            }
                            if (upLeftSidePossibleMove == "Black") {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - q][q + i]);
                                q = board[index].length;
                            }
                            q < board[index].length ? q++ : q;
                        }

                        if (upLeftSidePossibleMove == "") {
                            q = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "White") {
                                r = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                possibleMoves.push(board[index - r][i - r]);
                            }
                            if (upRightSidePossibleMove == "Black") {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                r = board[index].length;
                            }
                            r < board[index].length ? r++ : r;
                        }

                        if (upRightSidePossibleMove == "") {
                            r = board[index].length;
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
                    if (firstPossibleDeath == null || firstPossibleDeath == "White") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == null || secondPossibleDeath == "White") {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath == null || thirdPossibleDeath == "White") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath == null || fourthPossibleDeath == "White") {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath == null || fifthPossibleDeath == "White") {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath == null || sixthPossibleDeath == "White") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath == null || seventhPossibleDeath == "White") {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath == null || eighthPossibleDeath == "White") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i + 1]);
                    }

                    break loop1;
                }
                else if (pieceType == "White_king" && turn == "White") {
                    if (firstPossibleDeath == null || firstPossibleDeath == "Black") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == null || secondPossibleDeath == "Black") {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath == null || thirdPossibleDeath == "Black") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath == null || fourthPossibleDeath == "Black") {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath == null || fifthPossibleDeath == "Black") {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath == null || sixthPossibleDeath == "Black") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath == null || seventhPossibleDeath == "Black") {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath == null || eighthPossibleDeath == "Black") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        possibleMoves.push(board[index + 1][i + 1]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function selectPossibleMoves(e) {
    let pieceVrient = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;
    if (selection != null) {
        let selectedPieceVrient = _$(selection).children[0] ? _$(selection).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;
        if (pieceVrient != selectedPieceVrient) {
            let image = _$(selection).children[0].getAttribute("src");
            let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "") : null;
            let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null

            if (possibleMoves.indexOf(parseInt(e.id)) !== -1) {
                _$(selection).innerHTML = "";
                _$(e.id).innerHTML = `<img  src="${image}"/>`;
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
        }
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

    let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./Image/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null

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
        _$("toast-warning").style.visibility = "visible";
        _$("warningText").innerHTML = 'It is player '+turn+' Turn.';
        setTimeout(() => {
            _$("toast-warning").style.visibility = "hidden";
        }, 2000);
    }
}

function place(e) {

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
        selectPossibleMoves(e);
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

    for (let index = 0; index < board.length; index++) {
        for (let j = 0; j < board[index].length; j++) {
            if (_$(board[index][j]).children[0])
                _$(board[index][j]).setAttribute("onclick", "selectPossibleMoves(this)");
            else
                _$(board[index][j]).setAttribute("onclick", "place(this)");
        }
    }

}