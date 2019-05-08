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
    },
    {
        id: 51,
        name: "Tyrannomon",
        img: "https://digimon.shadowsmith.com/img/tyrannomon.jpg",
        level: "Champion"
    },
    {
        id: 52,
        name: "Piximon",
        img: "https://digimon.shadowsmith.com/img/piximon.jpg",
        level: "Ultimate"
    },
    {
        id: 53,
        name: "Datamon",
        img: "https://digimon.shadowsmith.com/img/datamon.jpg",
        level: "Ultimate"
    },
    {
        id: 54,
        name: "MetalGreymon",
        img: "https://digimon.shadowsmith.com/img/metalgreymon.jpg",
        level: "Ultimate"
    },
    {
        id: 55,
        name: "DemiDevimon",
        img: "https://digimon.shadowsmith.com/img/demidevimon.jpg",
        level: "Rookie"
    },
    {
        id: 56,
        name: "WereGarurumon",
        img: "https://digimon.shadowsmith.com/img/weregarurumon.jpg",
        level: "Ultimate"
    },
    {
        id: 57,
        name: "Digitamamon",
        img: "https://digimon.shadowsmith.com/img/digitamamon.jpg",
        level: "Ultimate"
    },
    {
        id: 58,
        name: "Vegiemon",
        img: "https://digimon.shadowsmith.com/img/vegiemon.jpg",
        level: "Champion"
    },
    {
        id: 59,
        name: "Myotismon",
        img: "https://digimon.shadowsmith.com/img/myotismon.jpg",
        level: "Ultimate"
    },
    {
        id: 60,
        name: "Vademon",
        img: "https://digimon.shadowsmith.com/img/vademon.jpg",
        level: "Ultimate"
    },
    {
        id: 61,
        name: "Pabumon",
        img: "https://digimon.shadowsmith.com/img/pabumon.jpg",
        level: "Fresh"
    },
    {
        id: 62,
        name: "Gekomon",
        img: "https://digimon.shadowsmith.com/img/gekomon.jpg",
        level: "Champion"
    },
    {
        id: 63,
        name: "Otamamon",
        img: "https://digimon.shadowsmith.com/img/otamamon.jpg",
        level: "Rookie"
    },
    {
        id: 64,
        name: "ShogunGekomon",
        img: "https://digimon.shadowsmith.com/img/shogungekomon.jpg",
        level: "Ultimate"
    },
    {
        id: 65,
        name: "Garudamon",
        img: "https://digimon.shadowsmith.com/img/garudamon.jpg",
        level: "Ultimate"
    },
    {
        id: 66,
        name: "Flymon",
        img: "https://digimon.shadowsmith.com/img/flymon.jpg",
        level: "Champion"
    },
    {
        id: 67,
        name: "Gatomon",
        img: "https://digimon.shadowsmith.com/img/gatomon.jpg",
        level: "Champion"
    },
    {
        id: 68,
        name: "Nanimon",
        img: "https://digimon.shadowsmith.com/img/nanimon.jpg",
        level: "Champion"
    },
    {
        id: 69,
        name: "Devidramon",
        img: "https://digimon.shadowsmith.com/img/devidramon.jpg",
        level: "Champion"
    },
    {
        id: 70,
        name: "Dokugumon",
        img: "https://digimon.shadowsmith.com/img/dokugumon.jpg",
        level: "Champion"
    },
    {
        id: 71,
        name: "Mammothmon",
        img: "https://digimon.shadowsmith.com/img/mammothmon.jpg",
        level: "Ultimate"
    },
    {
        id: 72,
        name: "Gesomon",
        img: "https://digimon.shadowsmith.com/img/gesomon.jpg",
        level: "Champion"
    },
    {
        id: 73,
        name: "Raremon",
        img: "https://digimon.shadowsmith.com/img/raremon.jpg",
        level: "Champion"
    },
    {
        id: 74,
        name: "SkullMeramon",
        img: "https://digimon.shadowsmith.com/img/skullmeramon.jpg",
        level: "Ultimate"
    },
    {
        id: 75,
        name: "Wizardmon",
        img: "https://digimon.shadowsmith.com/img/wizardmon.jpg",
        level: "Champion"
    },
    {
        id: 76,
        name: "Pumpkinmon",
        img: "https://digimon.shadowsmith.com/img/pumpkinmon.jpg",
        level: "Ultimate"
    },
    {
        id: 77,
        name: "Gotsumon",
        img: "https://digimon.shadowsmith.com/img/gotsumon.jpg",
        level: "Rookie"
    },
    {
        id: 78,
        name: "Lillymon",
        img: "https://digimon.shadowsmith.com/img/lillymon.jpg",
        level: "Ultimate"
    },
    {
        id: 79,
        name: "Phantomon",
        img: "https://digimon.shadowsmith.com/img/phantomon.jpg",
        level: "Ultimate"
    },
    {
        id: 80,
        name: "DarkTyrannomon",
        img: "https://digimon.shadowsmith.com/img/darktyrannomon.jpg",
        level: "Champion"
    },
    {
        id: 81,
        name: "Gizamon",
        img: "https://digimon.shadowsmith.com/img/gizamon.jpg",
        level: "Rookie"
    },
    {
        id: 82,
        name: "Zudomon",
        img: "https://digimon.shadowsmith.com/img/zudomon.jpg",
        level: "Ultimate"
    },
    {
        id: 83,
        name: "MegaSeadramon",
        img: "https://digimon.shadowsmith.com/img/megaseadramon.jpg",
        level: "Ultimate"
    },
    {
        id: 84,
        name: "Angewomon",
        img: "https://digimon.shadowsmith.com/img/angewomon.jpg",
        level: "Ultimate"
    },
    {
        id: 85,
        name: "Tuskmon",
        img: "https://digimon.shadowsmith.com/img/tuskmon.jpg",
        level: "Champion"
    },
    {
        id: 86,
        name: "Snimon",
        img: "https://digimon.shadowsmith.com/img/snimon.jpg",
        level: "Champion"
    },
    {
        id: 87,
        name: "MegaKabuterimon",
        img: "https://digimon.shadowsmith.com/img/megakabuterimon.jpg",
        level: "Ultimate"
    },
    {
        id: 88,
        name: "MagnaAngemon",
        img: "https://digimon.shadowsmith.com/img/magnaangemon.jpg",
        level: "Ultimate"
    },
    {
        id: 89,
        name: "VenomMyotismon",
        img: "https://digimon.shadowsmith.com/img/venommyotismon.jpg",
        level: "Mega"
    },
    {
        id: 90,
        name: "WarGreymon",
        img: "https://digimon.shadowsmith.com/img/wargreymon.jpg",
        level: "Mega"
    },
    {
        id: 91,
        name: "MetalGarurumon",
        img: "https://digimon.shadowsmith.com/img/metalgarurumon.jpg",
        level: "Mega"
    },
    {
        id: 92,
        name: "Nyaromon",
        img: "https://digimon.shadowsmith.com/img/nyaromon.jpg",
        level: "In Training"
    },
    {
        id: 93,
        name: "Salamon",
        img: "https://digimon.shadowsmith.com/img/salamon.jpg",
        level: "Rookie"
    },
    {
        id: 94,
        name: "Parrotmon",
        img: "https://digimon.shadowsmith.com/img/parrotmon.jpg",
        level: "Ultimate"
    },
    {
        id: 95,
        name: "Chuumon",
        img: "https://digimon.shadowsmith.com/img/chuumon.jpg",
        level: "Rookie"
    },
    {
        id: 96,
        name: "MetalSeadramon",
        img: "https://digimon.shadowsmith.com/img/metalseadramon.jpg",
        level: "Mega"
    },
    {
        id: 97,
        name: "Machinedramon",
        img: "https://digimon.shadowsmith.com/img/machinedramon.jpg",
        level: "Mega"
    },
    {
        id: 98,
        name: "Piedmon",
        img: "https://digimon.shadowsmith.com/img/piedmon.jpg",
        level: "Mega"
    },
    {
        id: 99,
        name: "Puppetmon",
        img: "https://digimon.shadowsmith.com/img/puppetmon.jpg",
        level: "Mega"
    },
    {
        id: 100,
        name: "Scorpiomon",
        img: "https://digimon.shadowsmith.com/img/scorpiomon.jpg",
        level: "Ultimate"
    }
];

// Export faux Digimon database
module.exports = digimon;