class Snake {
    constructor() {
        this.x = 0
        this.y = 0
        this.xSpeed = 1
        this.ySpeed = 0
        this.total = 0
        this.tail = []
    }
    update() {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1]
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y)
        this.x = this.x + this.xSpeed * scl
        this.y = this.y + this.ySpeed * scl
        this.x = constrain(this.x, 0, width - scl)
        this.y = constrain(this.y, 0, height - scl)
    }
    show() {
        fill(240, 187, 98)
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
        }
        rect(this.x, this.y, scl, scl)
    }
    dir(x, y) {
        if (this.xSpeed == 0 && x != 0) {
            this.xSpeed = x
            this.ySpeed = y
        }
        if (this.ySpeed == 0 && y != 0) {
            this.xSpeed = x
            this.ySpeed = y
        }
    }
    eat(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y)
        if (d < 1) {
            this.total++
            return true
        }
        return false
    }
    death() {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i]
            let d = dist(this.x, this.y, pos.x, pos.y)
            if (d < 1) {
                this.total = 0
                this.tail = []
                this.x = 0
                this.y = 0
                this.dir(1, 0)
            }
        }
    }
}
