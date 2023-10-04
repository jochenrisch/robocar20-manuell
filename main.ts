radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.showNumber(1)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.showNumber(2)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.showNumber(3)
    }
    if (receivedNumber == 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 128)
        basic.showNumber(8)
    }
    if (receivedNumber == 9) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showNumber(9)
    }
})
radio.setGroup(128)
basic.showNumber(0)
basic.pause(1000)
