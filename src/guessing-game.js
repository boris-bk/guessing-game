class GuessingGame {
    constructor(number) {
        this.answer = number
        this.solution = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.solution = Math.round((this.min + this.max) / 2)

        if (this.solution < this.answer) {
            greater()
        } else if (this.solution > this.answer) {
            lower()
        } else {
            return this.solution
        }
    }

    lower() {
        this.max = this.solution
        this.guess()
    }

    greater() {
        this.min = this.solution
        this.guess()
    }
}

module.exports = GuessingGame
