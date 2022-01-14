// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let howFar = Math.abs(location - 42);
    return howFar;
}

function distanceFromHqInFeet(location) {
    let blocksDi = distanceFromHqInBlocks(location);
    let blocksFt = blocksDi * 264;
    return blocksFt;
}

function distanceTravelledInFeet(start, destination) {
    let distanceTotal = Math.abs(start-destination);
    let goTheDistance = distanceTotal * 264; 
    return goTheDistance;
}

function calculatesFarePrice(start, destination) {
    let howFarYouWent = distanceTravelledInFeet(start,destination);
    if (howFarYouWent <= 400) {
        let price = 0;
        return price;
    }
    else if (howFarYouWent > 400 && howFarYouWent < 2000) { 
        let price = 0.02 * (howFarYouWent - 400);
        return price;
    }
    else if (howFarYouWent >2000 && howFarYouWent < 2500) { 
        let price = 25;
        return price;
    }
    else {
        const notGonnaHappen = "cannot travel that far";
        return notGonnaHappen;

    }
}