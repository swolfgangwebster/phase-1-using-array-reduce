const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 1

function reducer(totalBatteries, a) {
    totalBatteries = totalBatteries + a
    return totalBatteries 
}
totalBatteries = batteryBatches.reduce(reducer)