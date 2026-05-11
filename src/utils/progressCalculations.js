// Calculate total volume of lift
export function calculateTotalVolume(sets) {
    return sets.reduce((totalVolume, currentSet) => {
        return totalVolume + currentSet.weight * currentSet.reps;
    }, 0);
}

// Find top set function
export function getTopSet(sets) {

    if (sets.length === 0) {
        return null;
    }

    return sets.reduce((bestSet, currentSet) => {
        if (currentSet.weight > bestSet.weight) {
            return currentSet;
        } else if (currentSet.weight === bestSet.weight && currentSet.reps > bestSet.reps) {
            return currentSet;
        } else {
            return bestSet;
        }
    });
}

// Compare sessions function
export function compareSessions(previousSets, currentSets) {
    const previousVolume = calculateTotalVolume(previousSets);
    const currentVolume = calculateTotalVolume(currentSets);

    const previousTopSet = getTopSet(previousSets);
    const currentTopSet = getTopSet(currentSets);

    if (previousTopSet === null || currentTopSet === null) {
        return {
            previousVolume,
            currentVolume,
            volumeIncreased: currentVolume > previousVolume,
            volumeChange: currentVolume - previousVolume,
            previousTopSet,
            currentTopSet,
            topSetImproved: false,
            message: "Not enough set data to compare top sets."
        };
    }

    // Checks if volume increases
    const volumeIncreased = currentVolume > previousVolume;

    // Checks by how much the volume changed (shows plus or minus compared to last one)
    const volumeChange = currentVolume - previousVolume;

    // Checks if top set improves
    const topSetImproved = 
        currentTopSet.weight > previousTopSet.weight ||
        (
            currentTopSet.weight === previousTopSet.weight &&
            currentTopSet.reps > previousTopSet.reps
        );

    
    return {
        previousVolume,
        currentVolume,
        volumeIncreased,
        volumeChange,
        previousTopSet,
        currentTopSet,
        topSetImproved

    };

}