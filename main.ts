basic.showNumber(1)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 20)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(20, 50)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(40, 40)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.stopcar()
    }
})
