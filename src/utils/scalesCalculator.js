import { convertNumberToNote, convertNoteToNumber } from "$utils/notesConverter";


/**
 * Object representing different scale structures.
 * @type {Object.<string, number[]>}
 */
const scaleStructures = {
    major: [1, 1, 0.5, 1, 1, 1, 0.5],
    minor: [1, 0.5, 1, 1, 0.5, 1, 1]
};

/**
 * Calculates the armor based on the given note and scale.
 *
 * @param {string} note - The note to calculate the armor for.
 * @param {('major'|'minor')} scale - The scale to use for the calculation.
 * @returns {number} The calculated armor value.
 */
const calculateArmor = (note, scale) => {
    const noteValue = convertNoteToNumber(note);
    const scaleStructure = scaleStructures[scale];
    return 0
}
