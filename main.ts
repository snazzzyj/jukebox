input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    basic.showIcon(IconNames.EigthNote)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showIcon(IconNames.Rabbit)
    basic.pause(500)
    basic.showIcon(IconNames.Cow)
    basic.pause(500)
})
