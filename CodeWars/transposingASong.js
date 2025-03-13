function transpose(song, interval) {
    const flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    const sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    const transposedSong = song.map(note => {
        let noteIndex;
        if (note[1] === 'b') {
            noteIndex = flatNotes.indexOf(note);
        } else {
            noteIndex = sharpNotes.indexOf(note);
        }
        
        //handles if interval shift is positive or negative and loops to back or front of array
        const transposedNote = sharpNotes[(noteIndex + interval + 12) % 12];
        return transposedNote;
    })

    return transposedSong;
}

const song = ['A'], interval = 1;

console.log(transpose(song, interval));
