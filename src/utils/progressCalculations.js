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