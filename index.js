//Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase() === name.toUpperCase()
    })
}

//Test #2
function fuzzyMatch(drivers, providedLetter) {
    return drivers.filter( function(driver) {
        return driver.startsWith(providedLetter)
    })
}

//Test #3
function matchName(drivers, name) {
    return drivers.filter( function(driver) {
        if (driver.name ===name) {
            return driver.name
        }
    })
}