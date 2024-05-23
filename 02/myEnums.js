"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["CREW"] = 3] = "CREW";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
console.log(SeatChoice);
