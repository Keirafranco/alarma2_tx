let estadoalarma = 0
basic.forever(function () {
    if (estadoalarma == 1) {
        estadoalarma = 1
        music.ringTone(262)
        basic.showIcon(IconNames.Square)
        basic.pause(10)
        music.stopAllSounds()
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(10)
    }
})
