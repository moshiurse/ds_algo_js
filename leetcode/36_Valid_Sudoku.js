// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function (board) {
    let map = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] != '.'){
                let indx = makeIndex(i,j);
                if(map[indx] == undefined){
                    map[indx] = {};
                    map[indx][board[i][j]] = true;
                }else{
                    if(map[indx][board[i][j]]) return false;
                    map[indx][board[i][j]] = true;
                }
            }
        }
    }

    for(let i = 0; i < 9; i++){
        let mapRow = {};
        let mapCol = {};
        for(let j = 0; j < 9; j++){
            if(board[i][j] != '.'){
                if(mapRow[board[i][j]] != undefined){
                    return false;
                }else{
                    mapRow[board[i][j]] = true;
                }
            }
            if(board[j][i] != '.'){
                if(mapCol[board[j][i]] != undefined){
                    return false;
                }else{
                    mapCol[board[j][i]] = true;
                }
            }
        }
    }

    // console.log(map, mapCol, mapRow);
    return true;

};

    function makeIndex(i, j) {
        let str = '';
        if (i < 3) {
            str += '0';
        } else if (i < 6) {
            str += '1';
        } else {
            str += '2';
        }

        if (j < 3) {
            str += '_0';
        } else if (j < 6) {
            str += '_1';
        } else {
            str += '_2';
        }

        return str;
    }