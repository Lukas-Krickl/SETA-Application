/**
 * objects for navigating between szenarios in a assessment
 * returns the current user selected answer and the index of the szenario, the user clicked
 */
export interface AssessmentNavigation {
    answer: Map<number, string> | Set<number>,
    nextSzenarioIndex:number
}