export function calculateTotalVolume(sets) {
    return sets.reduce((totalVolume, currentSet) => {
        return totalVolume + currentSet.weight * currentSet.reps;
    }, 0);
}