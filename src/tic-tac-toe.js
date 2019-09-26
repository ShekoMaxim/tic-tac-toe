class TicTacToe {
    constructor() {
        const N_SIZE = 3;
        this.SYMBOL_X = 'x';
        this.SYMBOL_O = 'o';
        this._currentSymbol = this.SYMBOL_X;
        this._gameMatrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this._score = {
            "x": 0,
            "o": 0
        };
    }

    getCurrentPlayerSymbol() {
        return this._currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this._gameMatrix[rowIndex][columnIndex]) {
            this._gameMatrix[rowIndex][columnIndex] = this._currentSymbol;
            this._currentSymbol = this._currentSymbol === this.SYMBOL_X ? this.SYMBOL_O : this.SYMBOL_X;
        }

    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        for (let i = 0; i < this._gameMatrix.length; i++) {
            if (this._gameMatrix[i][0] == this._gameMatrix[i][1] &&
                this._gameMatrix[i][0] == this._gameMatrix[i][2]) return this._gameMatrix[i][0];
        }
        for (let i = 0; i < this._gameMatrix.length; i++) {
            if (this._gameMatrix[0][i] == this._gameMatrix[1][i] &&
                this._gameMatrix[0][i] == this._gameMatrix[2][i]) return this._gameMatrix[0][i];
        }
        if (this._gameMatrix[0][0] == this._gameMatrix[1][1] &&
            this._gameMatrix[1][1] == this._gameMatrix[2][2])
            return this._gameMatrix[0][0];

        if (this._gameMatrix[0][2] == this._gameMatrix[1][1] &&
            this._gameMatrix[1][1] == this._gameMatrix[2][0])
            return this._gameMatrix[0][2];

        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this._gameMatrix.length; i++) {
            for (let j = 0; j < this._gameMatrix.length; j++) {
                if (!this._gameMatrix[i][j]) {
                    return false
                }
            }
        }
        return true;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this._gameMatrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;