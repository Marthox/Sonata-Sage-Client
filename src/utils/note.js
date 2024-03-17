/**
 * Represents a musical note.
 * @class
 */
class Note {
    /**
     * Creates a new Note instance.
     * @constructor
     * @param {string} name - The name of the note ("A", "B", "C", "D", "E", "F", "G").
     * @param {string} signature - The signature of the note ("sharp", "flat", or "natural").
     * @param {number} octave - The octave of the note (integer greater than zero).
     */
    constructor(name, signature, octave) {
        this.validateNoteArguments(name, signature, octave);
        this.name = name;
        this.signature = signature;
        this.octave = octave;
    }
    
    /**
     * Creates a new Note instance from a string representation.
     * @constructor
     * @param {string} noteString - The string representation of the note (e.g., "C#4").
     */
    static fromString(noteString) {
        const note_parts = noteString.split('');
        if (note_parts.length > 3 || note_parts.length < 1) {
            throw new Error('Invalid note string');
        }
        
        const name = note_parts[0];
        if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(name)) {
            throw new Error('Invalid note name');
        }

        // If the note has nor signature nor octave, return the natural note.
        if (note_parts.length === 1) {
            return new Note(name, 'natural', 4);
        }

        const signature = noteString.charAt(1);
        const octave = parseInt(noteString.charAt(2));
        
        return new Note(name, signature, octave);
    }

    /**
     * Validates the arguments of the Note constructor.
     * @param {string} name - The name of the note.
     * @param {string} signature - The signature of the note.
     * @param {number} octave - The octave of the note.
     * @throws {Error} If any of the arguments is invalid.
     */
    validateNoteArguments(name, signature, octave) {
        if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(name)) {
            throw new Error('Invalid note name it should be A, B, C, D, E, F or G');
        }
        
        if (!['sharp', 'flat', 'natural'].includes(signature)) {
            throw new Error('Invalid note signature it should be sharp, flat or natural');
        }
        
        if (typeof octave !== 'number' || !Number.isInteger(octave) || octave < 1) {
            throw new Error('Invalid note octave it should be an integer greater than zero');
        }
    }
}
