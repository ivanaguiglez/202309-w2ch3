const songs = [
  {
    id: 1,
    title: "Bad",
    artist: "Michael Jackson",
    genre: "Pop",
    duration: 187,
    publicationYear: 1987,
    isHit: "Yes",
  },

  {
    id: 2,
    title: "Time after time",
    artist: "Cyndi Lauper",
    genre: "Pop",
    duration: 210,
    publicationYear: 1983,
    isHit: "Yes",
  },

  {
    id: 3,
    title: "Escuela de calor",
    artist: "Radio Futura",
    genre: "Rock",
    duration: 187,
    publicationYear: 1984,
    isHit: "Yes",
  },

  {
    id: 4,
    title: "El tiburon",
    artist: "Proyecto Uno",
    genre: "Merengue",
    duration: 165,
    publicationYear: 1993,
    isHit: "Yes",
  },

  {
    id: 5,
    title: "Dígale",
    artist: "Bisbal",
    genre: "Pop",
    duration: 240,
    publicationYear: 2002,
    isHit: "No",
  },
];

const song = {
  id: 6,
  title: "Macarena",
  artist: "Los del Río",
  genre: "Pop",
  duration: 450,
  publicationYear: "1992",
  isHit: "Yes",
};

const addNewSong = (songs) => {
  songs.push(song);
  return console.log(addNewSong);
};
