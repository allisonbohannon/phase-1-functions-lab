// Code your solution in this file!
function distanceFromHqInBlocks(loc) {
    return Math.abs(loc - 42)
};

function distanceFromHqInFeet(loc) {
    return distanceFromHqInBlocks(loc) * 264
};

function distanceTravelledInFeet(start,end) {
    return Math.abs(end-start) * 264
};

function calculatesFarePrice(start,end) {
    const distance = distanceTravelledInFeet(start,end)
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance <= 2000) {
        return Math.max(0, .02 * (distance - 400))
    } else {
        return 25
    }
}