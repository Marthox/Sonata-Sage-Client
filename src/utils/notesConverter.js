/**
 * Object that maps numeric values to musical notes.
 * @type {Object<number, string>}
*/
const notes = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G'
};

export const distanceGraph = {
    "A": [["B", 1], ["G", 1]],
    "B": [["C", 0.5], ["A", 1]],
    "C": [["D", 1], ["B", 0.5]],
    "D": [["E", 1], ["C", 1]],
    "E": [["F", 0.5], ["D", 1]],
    "F": [["G", 1], ["E", 0.5]],
    "G": [["A", 1], ["F", 1]]
};


/**
 * Convert a given note numeric value into a string representation.
 *
 * @param {number} note - The note to convert to a string representation.
 * @returns {string} - The string representation of the note.
 */
export const convertNumberToNote = (note) => {
    const noteInternals = (note).toString(7).split("");
    const noteOctave = noteInternals.slice(0, -1).join("");
    const noteName = parseInt(noteInternals.slice(-1)[0]);
    return notes[noteName] + noteOctave;
};

/**
 * Convert a given note string representation into its equivalent numeric value.
 *
 * @param {string} note - The note to convert to its numeric value.
 * @returns {string} - The numeric value of the note.
 */
export const convertNoteToNumber = (note) => {
    const noteInternals = note.split("");
    const noteOctave = noteInternals.slice(1).join("");
    return parseInt(noteOctave + (noteInternals[0].charCodeAt(0) - 65), 7).toString();
};
