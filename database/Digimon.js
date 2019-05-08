// Faux Digimon database
const digimon = [
    {
        id: 1,
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training"
    },
    {
        id: 2,
        name: "Tsunomon",
        img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        level: "In Training"
    },
    {
        id: 3,
        name: "Yokomon",
        img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
        level: "In Training"
    },
    {
        id: 4,
        name: "Motimon",
        img: "https://digimon.shadowsmith.com/img/motimon.jpg",
        level: "In Training"
    },
    {
        id: 5,
        name: "Tanemon",
        img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
        level: "In Training"
    },
    {
        id: 6,
        name: "Bukamon",
        img: "https://digimon.shadowsmith.com/img/bukamon.jpg",
        level: "In Training"
    },
    {
        id: 7,
        name: "Tokomon",
        img: "https://digimon.shadowsmith.com/img/tokomon.jpg",
        level: "In Training"
    },
    {
        id: 8,
        name: "Agumon",
        img: "https://digimon.shadowsmith.com/img/agumon.jpg",
        level: "Rookie"
    },
    {
        id: 9,
        name: "Gabumon",
        img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
        level: "Rookie"
    },
    {
        id: 10,
        name: "Biyomon",
        img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
        level: "Rookie"
    },
    {
        id: 11,
        name: "Tentomon",
        img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
        level: "Rookie"
    },
    {
        id: 12,
        name: "Palmon",
        img: "https://digimon.shadowsmith.com/img/palmon.jpg",
        level: "Rookie"
    },
    {
        id: 13,
        name: "Gomamon",
        img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
        level: "Rookie"
    },
    {
        id: 14,
        name: "Patamon",
        img: "https://digimon.shadowsmith.com/img/patamon.jpg",
        level: "Rookie"
    },
    {
        id: 15,
        name: "Kuwagamon",
        img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
        level: "Champion"
    },
    {
        id: 16,
        name: "Greymon",
        img: "https://digimon.shadowsmith.com/img/greymon.jpg",
        level: "Champion"
    },
    {
        id: 17,
        name: "Shellmon",
        img: "https://digimon.shadowsmith.com/img/shellmon.jpg",
        level: "Champion"
    },
    {
        id: 18,
        name: "Garurumon",
        img: "https://digimon.shadowsmith.com/img/garurumon.jpg",
        level: "Champion"
    },
    {
        id: 19,
        name: "Seadramon",
        img: "https://digimon.shadowsmith.com/img/seadramon.jpg",
        level: "Champion"
    },
    {
        id: 20,
        name: "Monochromon",
        img: "https://digimon.shadowsmith.com/img/monochromon.jpg",
        level: "Champion"
    },
    {
        id: 21,
        name: "Birdramon",
        img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
        level: "Champion"
    },
    {
        id: 22,
        name: "Meramon",
        img: "https://digimon.shadowsmith.com/img/meramon.jpg",
        level: "Champion"
    },
    {
        id: 23,
        name: "Kabuterimon",
        img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
        level: "Champion"
    },
    {
        id: 24,
        name: "Andromon",
        img: "https://digimon.shadowsmith.com/img/andromon.jpg",
        level: "Ultimate"
    },
    {
        id: 25,
        name: "Togemon",
        img: "https://digimon.shadowsmith.com/img/togemon.jpg",
        level: "Champion"
    },
    {
        id: 26,
        name: "Numemon",
        img: "https://digimon.shadowsmith.com/img/numemon.jpg",
        level: "Champion"
    },
    {
        id: 27,
        name: "Monzaemon",
        img: "https://digimon.shadowsmith.com/img/monzaemon.jpg",
        level: "Ultimate"
    },
    {
        id: 28,
        name: "Ikkakumon",
        img: "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
        level: "Champion"
    },
    {
        id: 29,
        name: "Unimon",
        img: "https://digimon.shadowsmith.com/img/unimon.jpg",
        level: "Champion"
    },
    {
        id: 30,
        name: "Leomon",
        img: "https://digimon.shadowsmith.com/img/leomon.jpg",
        level: "Champion"
    },
    {
        id: 31,
        name: "Ogremon",
        img: "https://digimon.shadowsmith.com/img/ogremon.jpg",
        level: "Champion"
    },
    {
        id: 32,
        name: "Devimon",
        img: "https://digimon.shadowsmith.com/img/devimon.jpg",
        level: "Champion"
    },
    {
        id: 33,
        name: "Frigimon",
        img: "https://digimon.shadowsmith.com/img/frigimon.jpg",
        level: "Champion"
    },
    {
        id: 34,
        name: "Mojyamon",
        img: "https://digimon.shadowsmith.com/img/mojyamon.jpg",
        level: "Champion"
    },
    {
        id: 35,
        name: "Sukamon",
        img: "https://digimon.shadowsmith.com/img/sukamon.jpg",
        level: "Champion"
    },
    {
        id: 36,
        name: "Centarumon",
        img: "https://digimon.shadowsmith.com/img/centarumon.jpg",
        level: "Champion"
    },
    {
        id: 37,
        name: "Bakemon",
        img: "https://digimon.shadowsmith.com/img/bakemon.jpg",
        level: "Champion"
    },
    {
        id: 38,
        name: "Elecmon",
        img: "https://digimon.shadowsmith.com/img/elecmon.jpg",
        level: "Rookie"
    },
    {
        id: 39,
        name: "Botamon",
        img: "https://digimon.shadowsmith.com/img/botamon.jpg",
        level: "Rookie"
    },
    {
        id: 40,
        name: "Punimon",
        img: "https://digimon.shadowsmith.com/img/punimon.jpg",
        level: "In Training"
    },
    {
        id: 41,
        name: "Poyomon",
        img: "https://digimon.shadowsmith.com/img/poyomon.jpg",
        level: "In Training"
    },
    {
        id: 42,
        name: "Yuramon",
        img: "https://digimon.shadowsmith.com/img/yuramon.jpg",
        level: "In Training"
    },
    {
        id: 43,
        name: "Angemon",
        img: "https://digimon.shadowsmith.com/img/angemon.jpg",
        level: "Champion"
    },
    {
        id: 44,
        name: "Whamon",
        img: "https://digimon.shadowsmith.com/img/whamon.jpg",
        level: "Champion"
    },
    {
        id: 45,
        name: "Drimogemon",
        img: "https://digimon.shadowsmith.com/img/drimogemon.jpg",
        level: "Champion"
    },
    {
        id: 46,
        name: "Etemon",
        img: "https://digimon.shadowsmith.com/img/etemon.jpg",
        level: "Ultimate"
    },
    {
        id: 47,
        name: "Gazimon",
        img: "https://digimon.shadowsmith.com/img/gazimon.jpg",
        level: "Rookie"
    },
    {
        id: 48,
        name: "Pagumon",
        img: "https://digimon.shadowsmith.com/img/pagumon.jpg",
        level: "In Training"
    },
    {
        id: 49,
        name: "SkullGreymon",
        img: "https://digimon.shadowsmith.com/img/skullgreymon.jpg",
        level: "Ultimate"
    },
    {
        id: 50,
        name: "Kokatorimon",
        img: "https://digimon.shadowsmith.com/img/kokatorimon.jpg",
        level: "Champion"
    }
];

// Export faux Digimon database
module.exports = digimon;