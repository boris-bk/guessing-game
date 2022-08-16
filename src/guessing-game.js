class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.max = max;
        this.min = min;
    }
    guess() {
        return this.count = Math.round((this.max - this.min) / 2 + this.min);
    }
    lower() {
        this.max = this.count;
    }
    greater() {
        this.min = this.count;
    }
}

module.exports = GuessingGame;