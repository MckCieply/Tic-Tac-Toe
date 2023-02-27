var turn = "X";
var winner = null;
const cells = document.querySelectorAll('td');
const dict = {
    "lt": 0, "ct": 1, "rt": 2,
    "lc": 3, "cc": 4, "rc": 5,
    "lb": 6, "cb": 7, "rb": 8,
    };
numMoves = 0;
canvas = [];
        // [0, 1, 2,
        //  3, 4, 5,
        //  6, 7, 8 ]
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', insert, {once : true});
}
function check(td1, td2, td3, formation){
    if(winner == null){
        if(td1 == td2 && td2 == td3 && (td1 && td2 && td3)){
            elements = document.getElementsByClassName(formation);
            for(var element of elements)  
                element.style.backgroundColor = "limegreen";
            return turn
        }
             else
                return null;
    }
    else return winner;
}
function iswon(id, turn){
    var formation = null;
numMoves += 1;
    position = dict[id]
    canvas[position] = turn;
    //Horizontal Top
    winner = check(canvas[0], canvas[1], canvas[2], "HTop");
    //Horizontal Middle
    winner = check(canvas[3], canvas[4], canvas[5], "HCenter");
    //Horizontal Bottom
    winner = check(canvas[6], canvas[7], canvas[8], "HBottom");
    //Vertical Left
    winner = check(canvas[0], canvas[3], canvas[6], "VLeft");
    //Vertical Center
    winner = check(canvas[1], canvas[4], canvas[7], "VCenter");
    //Vertical Right
    winner = check(canvas[2], canvas[5], canvas[8], "VRight");
    //Diagonal TopLeft-BottomRight
    winner = check(canvas[0], canvas[4], canvas[8], 'Diag1');
    //Diagonal TopRight-BottomLeft
    winner = check(canvas[2], canvas[4], canvas[6], 'Diag2');
    // Check if TIE
    if(numMoves == 9){
        document.getElementById("winner").innerHTML = (" TIE! ");
        document.getElementById("restart").style.visibility = "visible";
    }
}
function insert(){
    document.getElementById(this.id).innerHTML = turn;
    //document.getElementById(this.id).style.backgroundColor = "gray";
    document.getElementById(this.id).style.pointerEvents = "none";
    iswon(this.id, turn);
    //Check for winner
    if (winner != null){
        document.getElementById("winner").innerHTML = (winner + " WON THE GAME");
        document.getElementById("restart").style.visibility = "visible";
    }
    if (turn == "X")
        turn = "O";
    else if (turn == "O" && winner == null)
        turn = "X";
}