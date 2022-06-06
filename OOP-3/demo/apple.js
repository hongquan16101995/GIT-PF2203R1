class Apple {
    weight

    constructor(weight) {
        this.weight = weight
    }

    getWeight() {
        return this.weight
    }

    isEmpty() {
        return this.weight === 0
    }

    decreaseWeight() {
        if(this.isEmpty()) {
            console.log("Hết rồi còn đâu mà trừ");
        } else {
            this.weight--
        }
    }
}