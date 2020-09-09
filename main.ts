basic.showString("air")
basic.forever(function () {
    serial.writeLine("" + (stem.getPressure(OutputNumberFormat.FLOAT)))
    basic.pause(500)
})
