class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.max = max;
        this.min = min;
    }
    guess() {
        this.count = Math.round((this.max - this.min) / 2 + this.min);
        return this.count;
    }
    lower() {
        this.max = this.count;
    }
    greater() {
        this.min = this.count;
    }
}

module.exports = GuessingGame;