basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (modules.reflectedLight1.brightness() == 0) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (myModules.iR2.brightness() == 0) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (myModules.iR3.brightness() == 0) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
