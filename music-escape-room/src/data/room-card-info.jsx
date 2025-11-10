import practiceRoomImg from '../assets/practice-room.webp'
import musicLibraryImg from '../assets/music-library.webp'
import composersStudyImg from '../assets/composers-study.webp'
import baroqueRoomImg from '../assets/baroque-room.webp'
import mozartRoomImg from '../assets/mozart-room.webp'
import operaStageImg from '../assets/opera-stage.webp'
import stringWorkshopImg from '../assets/string-workshop.webp'
import woodwindWorkshopImg from '../assets/woodwind-workshop.webp'
import concertHallImg from '../assets/concert-hall.webp'

const rooms = [
  {
    id: 'practice-room',
    title: 'The Practice Room',
    description: 'Master the fundamentals before facing greater musical mysteries.',
    image: practiceRoomImg,
    alt: 'The Practice Room'
  },
  {
    id: 'music-library',
    title: 'The Music Library',
    description: 'Ancient scores hold secrets waiting to be decoded.',
    image: musicLibraryImg,
    alt: 'The Music Library'
  },
  {
    id: 'composers-study',
    title: 'The Composer\'s Study',
    description: 'Unravel the hidden messages left behind by musical masters.',
    image: composersStudyImg,
    alt: 'The Composer\'s Study'
  },
  {
    id: 'baroque-room',
    title: 'Baroque Room',
    description: 'Navigate the ornate complexity of Bach\'s intricate musical puzzles.',
    image: baroqueRoomImg,
    alt: 'The Baroque Room'
  },
  {
    id: 'mozart-room',
    title: 'The Mozart Room',
    description: 'Solve elegant riddles crafted by the genius of Vienna.',
    image: mozartRoomImg,
    alt: 'The Mozart Room'
  },
  {
    id: 'opera-stage',
    title: 'The Opera',
    description: 'Where drama and music collide in spectacular challenges.',
    image: operaStageImg,
    alt: 'The Opera'
  },
  {
    id: 'string-workshop',
    title: 'The String Workshop',
    description: 'Craft your way out using the secrets of violin makers.',
    image: stringWorkshopImg,
    alt: 'The String Workshop'
  },
  {
    id: 'woodwind-workshop',
    title: 'The Woodwind Workshop',
    description: 'Breathe life into melodies to unlock hidden passages.',
    image: woodwindWorkshopImg,
    alt: 'The Woodwind Workshop'
  },
  {
    id: 'concert-hall',
    title: 'The Concert Hall',
    description: 'Face the ultimate performance that will determine your escape.',
    image: concertHallImg,
    alt: 'The Concert Hall'
  }
];

export default rooms;