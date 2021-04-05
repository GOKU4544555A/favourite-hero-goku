var canvas = new fabric.Canvas('goku_canvas')
playerx = 10
playery = 10
blockImagewidth = 30
blockImageheight = 30
var Playerobject = ""
var blockimageobject = ""

function player_update() {
    fabric.Image.fromURL("goku.jpg", function (Img) {
        Playerobject = Img
        Playerobject.scaleToWidth(151)
        Playerobject.scaleToHeight(161)
        Playerobject.set({
            top: playery,
            left: playerx
        })
        canvas.add(Playerobject)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockimageobject = Img
        blockimageobject.scaleToWidth(151)
        blockimageobject.scaleToHeight(161)
        blockimageobject.set({
            top: playery,
            left: playerx
        })
        canvas.add(blockimageobject)
    })
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together")
        blockImagewidth = blockImagewidth + 10
        blockImageheight = blockImageheight + 10
        document.getElementById("current_width").innerHTML = blockImagewidth
        document.getElementById("current_height").innerHTML = blockImageheight

    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together")
        blockImagewidth = blockImagewidth -= 10
        blockImageheight = blockImageheight - 10
        document.getElementById("current_width").innerHTML = blockImagewidth
        document.getElementById("current_height").innerHTML = blockImageheight

    }
    if (keyPressed == '38') {
        console.log("up is pressed")
        Up()
    }
    if (keyPressed == '40') {
        console.log("down is pressed")
        Down()
    }
    if (keyPressed == '37') {
        console.log("left is pressed")
        left()
    }
    if (keyPressed == '39') {
        console.log("right is pressed")
        right()
    }
    if (keyPressed == '87') {
        console.log(" w is pressed")
        newImage('wall.jpg')
    }
    if (keyPressed == '71') {
        console.log(" g is pressed")
        newImage('ground.png')
    }
    if (keyPressed == '76') {
        console.log(" l is pressed")
        newImage('goku legs.jpg')
    }
    if (keyPressed == '84') {
        console.log(" t is pressed")
        newImage('trunk.jpg')
    }
    if (keyPressed == '82') {
        console.log(" r i pressed")
        newImage('nether.jpg')
    }
    if (keyPressed == '89') {
        console.log(" y is pressed")
        newImage('yellow_wall.png')
    }
    if (keyPressed == '68') {
        console.log(" d is pressed")
        newImage('dark_green.png')
    }
    if (keyPressed == '85') {
        console.log(" u is pressed")
        newImage('glowstone.png')
    }
    if (keyPressed == '67') {
        console.log(" c is pressed")
        newImage('goku chest.jpg')
    }
}

function Up() {
    if (playery > 0) {
        playery = playery - blockImageheight
        console.log("blockImageheight=" + blockImageheight)
        console.log("whenup arrow is pressed x=" + playerx + "y=" + playery)
        canvas.remove(Playerobject)
        player_update()
    }
}

function Down() {
    if (playery <= 500) {
        playery = playery + blockImageheight
        console.log("blockImageheight=" + blockImageheight)
        console.log("when down is pressed x =" + playerx + "y=" + playery)
        canvas.remove(Playerobject)
        player_update()
    }
}

function left() {
    if (playerx > 0) {
        playerx = playerx - blockImagewidth
        console.log("blockImagewidth=" + blockImagewidth)
        console.log("when left is pressed x=" + playerx + "y=" + playery)
        canvas.remove(Playerobject)
        player_update()
    }
}

function right() {
    if (playerx <= 850) {
        playerx = playerx + blockImagewidth
        console.log("blockImagewidth=" + blockImagewidth)
        console.log("when right is pressed x=" + playerx + "y=" + playery)
        canvas.remove(Playerobject)
        player_update()
    }
}