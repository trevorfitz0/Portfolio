import './Canvas.css'

const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

var c = canvas.getContext('2d')

var mouse = {x: undefined, y: undefined}
var circleCount = 75
var circleSpeed = 1
var circleSize = 1.25

draw()


function circle(x, y, dx, dy, radius, circleArray) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = '#FFFDD0'
        c.stroke()
        c.fillStyle = '#FFFDD0'
        c.fill()

        for(var i = 0; i < circleArray.length; i++) {
            var pos = {x: circleArray[i].x, y: circleArray[i].y}
            for(var j = 0; j < circleArray.length; j++) {
                var pos2 = {x: circleArray[j].x, y: circleArray[j].y}
                if(pos.x < pos2.x && pos2.x - 100 < pos.x &&
                    pos.y < pos2.y && pos2.y - 100 < pos.y
                ) {
                    c.beginPath()
                    c.strokeStyle = '#FFFDD0'
                    c.shadowBlur = 0
                    c.moveTo(pos.x, pos.y)
                    c.lineTo(pos2.x, pos2.y)
                    c.stroke()
                }
            }
        }
    }

    this.update = function() {
        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if(this.y + this.radius > window.innerHeight ||this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        if(mouse.x - this.x < 100 && mouse.x - this.x > -100 
            && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
                if(this.radius < 50 * circleSize) {
                    this.radius += 1 * circleSize
                }
        } else if(this.radius > ((Math.random() * 10) + 7) * circleSize) {
            this.radius -= 1
        }

        this.draw()

    }
}

function draw() {
    var circleArray = []

    for(var i = 0; i < circleCount; i++) {
        var x = Math.random() * (window.innerWidth - 30 * 2)
        var y = Math.random() * (window.innerHeight - 30 * 2)
        var dx = (Math.random() - 0.5) * circleSpeed
        var dy = (Math.random() - 0.5) * circleSpeed
        var radius = ((Math.random() * 6) + 3) * circleSize

        circleArray.push(new circle(x, y, dx, dy, radius, circleArray))
    }

    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, window.innerWidth, window.innerHeight)

        for(var i = 0; i < circleArray.length; i++) {
            circleArray[i].update()
        }

    }

    animate()
}

export default resize