class Student {
    name
    weight

    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }

    getWeight() {
        return this.weight
    }

    checkClaimApple(apple) {
        if (apple.isEmpty()) {
            console.log("Quả táo không tồn tại")
        } else {
            console.log(this.name + " đang cầm táo rồi")
        }
    }

    creaseWeight() {
        this.weight++
    }

    eatApple(apple) {
        if (!apple.isEmpty()) {
            apple.decreaseWeight()
            this.creaseWeight()
            console.log(this.name + " đang ăn táo rồi")
            console.log(this.name + " nặng " + this.getWeight())
        } else {
            console.log("Hết rồi còn đâu mà ăn!!")
        }
    }
}