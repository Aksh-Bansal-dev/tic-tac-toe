var boxs = document.querySelectorAll(".container div");
var reset = document.querySelector(".reset-btn");
var result = document.querySelector(".result");
var arr = [];
var O = "O";
var X = "X";
// let itr = 0;
var count = 1;
function start() {
    console.log("starting..");
    boxs[0].addEventListener("click", function () {
        add(0);
    });
    boxs[1].addEventListener("click", function () {
        add(1);
    });
    boxs[2].addEventListener("click", function () {
        add(2);
    });
    boxs[3].addEventListener("click", function () {
        add(3);
    });
    boxs[4].addEventListener("click", function () {
        add(4);
    });
    boxs[5].addEventListener("click", function () {
        add(5);
    });
    boxs[6].addEventListener("click", function () {
        add(6);
    });
    boxs[7].addEventListener("click", function () {
        add(7);
    });
    boxs[8].addEventListener("click", function () {
        add(8);
    });
    reset.addEventListener("click", function () {
        gameover();
    });
}
gameover();
start();
function add(index) {
    count++;
    if (index >= 0 && arr[index] === null) {
        if (count % 2 === 1) {
            // O
            boxs[index].innerHTML = O;
            arr[index] = O;
        }
        else {
            // X
            boxs[index].innerHTML = X;
            arr[index] = X;
        }
        var winner = hasWon();
        if (winner === 0) {
            result.innerHTML = "Draw";
        }
        else if (winner === 1) {
            result.innerHTML = O + " is the winner!";
            arrFill();
        }
        else if (winner === -1) {
            result.innerHTML = X + " is the winner!";
            arrFill();
        }
        if (count % 2 === 0) {
            compAdd();
        }
    }
    // else {
    // console.log("not ok" + index);
    // }
}
function arrFill() {
    for (var l = 0; l < 9; l++) {
        arr[l] = "";
    }
}
function gameover() {
    for (var l = 0; l < 9; l++) {
        boxs[l].innerHTML = "";
        arr[l] = null;
    }
    count = 1;
    result.innerHTML = "";
    // console.log(arr);
}
var compAdd = function () {
    var best = -100000;
    var bestMove = -1;
    for (var i = 0; i < 9; i++) {
        if (arr[i] === null) {
            arr[i] = "O";
            var ret = minimax(false);
            if (ret > best) {
                best = ret;
                bestMove = i;
            }
            arr[i] = null;
        }
    }
    // console.log(bestMove);
    add(bestMove);
};
var minimax = function (haveToFindMax) {
    var res = hasWon();
    if (res !== -2) {
        return res;
    }
    var best = haveToFindMax ? -10000 : 100000;
    var symbol = haveToFindMax ? O : X;
    for (var i = 0; i < 9; i++) {
        if (arr[i] === null) {
            arr[i] = symbol;
            if (haveToFindMax) {
                best = Math.max(best, minimax(!haveToFindMax));
            }
            else {
                best = Math.min(best, minimax(!haveToFindMax));
            }
            arr[i] = null;
        }
    }
    return best;
};
var hasWon = function () {
    var symbol = O;
    if (arr[0] === symbol && arr[1] === symbol && arr[2] === symbol) {
        return 1;
    }
    else if (arr[3] === symbol && arr[4] === symbol && arr[5] === symbol) {
        return 1;
    }
    else if (arr[6] === symbol && arr[7] === symbol && arr[8] === symbol) {
        return 1;
    }
    else if (arr[0] === symbol && arr[3] === symbol && arr[6] === symbol) {
        return 1;
    }
    else if (arr[1] === symbol && arr[4] === symbol && arr[7] === symbol) {
        return 1;
    }
    else if (arr[2] === symbol && arr[5] === symbol && arr[8] === symbol) {
        return 1;
    }
    else if (arr[0] === symbol && arr[4] === symbol && arr[8] === symbol) {
        return 1;
    }
    else if (arr[2] === symbol && arr[4] === symbol && arr[6] === symbol) {
        return 1;
    }
    symbol = X;
    if (arr[0] === symbol && arr[1] === symbol && arr[2] === symbol) {
        return -1;
    }
    else if (arr[3] === symbol && arr[4] === symbol && arr[5] === symbol) {
        return -1;
    }
    else if (arr[6] === symbol && arr[7] === symbol && arr[8] === symbol) {
        return -1;
    }
    else if (arr[0] === symbol && arr[3] === symbol && arr[6] === symbol) {
        return -1;
    }
    else if (arr[1] === symbol && arr[4] === symbol && arr[7] === symbol) {
        return -1;
    }
    else if (arr[2] === symbol && arr[5] === symbol && arr[8] === symbol) {
        return -1;
    }
    else if (arr[0] === symbol && arr[4] === symbol && arr[8] === symbol) {
        return -1;
    }
    else if (arr[2] === symbol && arr[4] === symbol && arr[6] === symbol) {
        return -1;
    }
    for (var i = 0; i < 9; i++) {
        if (arr[i] === null) {
            return -2;
        }
    }
    return 0;
};
