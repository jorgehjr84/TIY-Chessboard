var chessBoard = (function(window) {






    function initBoard = [


        var r = .rank - ;
        var f = file - ;

        /* Row 8*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 0*/
        [.rank - 8. file - a, .rank - 8. file - b, .rank - 8. file - c, .rank - 8. file - d, .rank - 8. file - e, .rank - 8. file - f, .rank - 8. file - g, .rank - 8. file - h]

        /* Row 7*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 1*/
        [.rank - 7. file - a, .rank - 7. file - b, .rank - 7. file - c, .rank - 7. file - d, .rank - 7. file - e, .rank - 7. file - f, .rank - 7. file - g, .rank - 7. file - h]



        /* Row 6*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 2*/
        [.rank - 6. file - a, .rank - 6. file - b, .rank - 6. file - c, .rank - 6. file - d, .rank - 6. file - e, .rank - 6. file - f, .rank - 6. file - g, .rank - 6. file - h]



        /* Row 5*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 3*/
        [.rank - 5. file - a, .rank - 5. file - b, .rank - 5. file - c, .rank - 5. file - d, .rank - 5. file - e, .rank - 5. file - f, .rank - 5. file - g, .rank - 5. file - h]




        /* Row 4*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 4*/
        [.rank - 4. file - a, .rank - 4. file - b, .rank - 4. file - c, .rank - 4. file - d, .rank - 4. file - e, .rank - 4. file - f, .rank - 4. file - g, .rank - 4. file - h]




        /* Row 3*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 5*/
        [.rank - 3. file - a, .rank - 3. file - b, .rank - 3. file - c, .rank - 3. file - d, .rank - 3. file - e, .rank - 3. file - f, .rank - 3. file - g, .rank - 3. file - h]



        /* Row 2*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 6*/
        [.rank - 2. file - a, .rank - 2. file - b, .rank - 2. file - c, .rank - 2. file - d, .rank - 2. file - e, .rank - 2. file - f, .rank - 2. file - g, .rank - 2. file - h]




        /* Row 1*/
        // SubIndex 0       SubIndex 1       SubIndex 2       SubIndex  3      SubIndex 4       SubIndex 5       SubIndex 6       SubIndex 7
        /*Index 7*/
        [.rank - 1. file - a, .rank - 1. file - b, .rank - 1. file - c, .rank - 1. file - d, .rank - 1. file - e, .rank - 1. file - f, .rank - 1. file - g, .rank - 1. file - h]







    ]; /*End of initBoard array*/





    //   ['R','N','B','Q','K','B','N','R'],
    //   ['P','P','P','P','P','P','P','P'],
    //   [' ',' ',' ',' ',' ',' ',' ',' '],
    //   [' ',' ',' ',' ',' ',' ',' ',' '],
    //   [' ',' ',' ',' ',' ',' ',' ',' '],
    //   [' ',' ',' ',' ',' ',' ',' ',' '],
    //   ['p','p','p','p','p','p','p','p'],
    //   ['r','n','b','q','k','b','n','r'],
    //
    //
    // ];

    var moves = function(piece, fromRank, fromFile, toRank, toFile) {

        rank file rank file
        move1 = (whitepawn, [6], [4], [4], [4]);
        move2 = (blackknight, [0], [6], [2], [5]);
        move3 = (whitepawn, [6], [2], [4], [2]);
        move4 = (blackpawn, [1], [4], [2], [4]);
        move5 = (whitepawn, [6], [6], [5], [6]);
        move6 = (blackpawn, [1], [3], [3], [3]);
        move7 = (whitebishop, [7], [5], [6], [6]);
        move8 = (blackbishop, [0], [5], [1], [4]);
        move9 = (whiteknight, [7], [6], [5], [5]);

    };



    // var obj = {
    //
    //   board: null;
    //
    // }
    //
    //
    //
    // var moves = [
    // //'p' from 6,3  to 4,3 (white)
    // //'N' from 0,6  to 2,5 (black)
    // //'p' from 6,2  to 4,2 (white)
    // //'P' from 1,4  to 2,4 (black)
    // //'p' from 6,6  to 5,6 (white)
    // //'P' from 1,3  to 3,3 (black)
    // //'b' from 7,5  to 6,6 (white)
    // //'B' from 0,5  to 1,4 (black)
    // //'n' from 7,6  to 5,5 (white)
    //
    //
    //
    // ];
    //
    //





})(window);