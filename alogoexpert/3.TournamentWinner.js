// 2D Array match . first one is home second one is away
// result is a 0 or 1 for home team
// It means if 0 then home team lose the game and if 1 then home team win the game
// per point is 3 points for win and 0 point for lose
const tournamentWinner = (match, result) => {
    let map = {};
    let max = 0;
    let maxTeam;

    for (let i = 0; i < result.length; i++) {
        if(result[i] == 0) {
            map[match[i][1]] = map[match[i][1]] ? (map[match[i][1]] + 3) : 3;
            map[match[i][0]] = map[match[i][0]] ? (map[match[i][0]] + 0) : 0;
            if(max < map[match[i][1]]){
                max = map[match[i][1]];
                maxTeam = match[i][1];
            }
        }else{
            map[match[i][0]] = map[match[i][0]] ? (map[match[i][0]] + 3) : 3;
            map[match[i][1]] = map[match[i][1]] ? (map[match[i][1]] + 0) : 0;
            if(max < map[match[i][0]]){
                max = map[match[i][0]];
                maxTeam = match[i][0];
            }
        }
    }
    return maxTeam;
}

console.log(tournamentWinner([["A", "B"], ["B", "C"], ["C", "D"], ["A", "B"], ["B", "C"], ["C", "D"]], [0,0,0,0,1,1]));