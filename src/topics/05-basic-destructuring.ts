
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Datials
}

interface Datials {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { song: music, songDuration, details } = audioPlayer;
const { author } = details;

console.log('Song:', music)
console.log('Duration:', songDuration)
console.log('Author:', author)


// Object Destrecturing
const [goku, vegrta, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Character 3:', trunks);


export {};