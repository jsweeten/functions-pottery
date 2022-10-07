const buyClay = () => {
    const purchasedClay = {}
    return purchasedClay
}

let clay = buyClay()

const makePottery = (clay) => {
    const shapedClay = clay.shape = "Bowl"
    return shapedClay
}

let clayBowl = makePottery(clay)

const bisqueFire = (clay) => {
    const firedClay = clay.readyForGlazing = true
    return firedClay
}

let bisqueFiredBowl = bisqueFire(clay)

const glazePottery = (clay) => {
    if (clay.readyForGlazing === true) {
        const glazedClay = clay.glazing = "Midnight Blue"
        return glazedClay
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

let glazedBowl = glazePottery(clay)

const finalFiring = (clay, temperature) => {
    if (temperature > 1200) {
        clay.cracked = true
    } else {
        clay.cracked = false
    }
    return clay
}

let finishedBowl = finalFiring(clay, 1100)

console.log(finishedBowl)
