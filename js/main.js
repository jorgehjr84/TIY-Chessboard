(function(window) {

    $('.play').click(function() {

        moveThePiece(2, 'd', 4, 'd', 'whitepawn');

        moveThePiece(8, 'g', 6, 'f', 'blackknight');

        moveThePiece(2, 'c', 4, 'c', 'whitepawn');
        // console.log('Im clicking');
    });

    /**
     * What does moveThePiece do?
     *
     *
     * @param {Number} fromRank
     * @param {String} fromFile
     * @param {Number} toRank
     * @param {String} toFile
     * @param {String} piece
     * @return undefined
     */
    function moveThePiece(fromRank, fromFile, toRank, toFile, piece) {

        $('.rank-' + fromRank + ' > .file-' + fromFile).removeClass(piece);
        $('.rank-' + toRank + ' > .file-' + toFile).addClass(piece);
    }



})(window);