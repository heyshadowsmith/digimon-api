// Faux Digimon database
const digimon = [
    {
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training"
    },
    {
        name: "Tsunomon",
        img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        level: "In Training"
    },
    {
        name: "Yokomon",
        img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
        level: "In Training"
    },
    {
        name: "Motimon",
        img: "https://digimon.shadowsmith.com/img/motimon.jpg",
        level: "In Training"
    },
    {
        name: "Tanemon",
        img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
        level: "In Training"
    },
    {
        name: "Bukamon",
        img: "https://digimon.shadowsmith.com/img/bukamon.jpg",
        level: "In Training"
    },
    {
        name: "Tokomon",
        img: "https://digimon.shadowsmith.com/img/tokomon.jpg",
        level: "In Training"
    },
    {
        name: "Agumon",
        img: "https://digimon.shadowsmith.com/img/agumon.jpg",
        level: "Rookie"
    },
    {
        name: "Gabumon",
        img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
        level: "Rookie"
    },
    {
        name: "Biyomon",
        img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
        level: "Rookie"
    },
    {
        name: "Tentomon",
        img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
        level: "Rookie"
    },
    {
        name: "Palmon",
        img: "https://digimon.shadowsmith.com/img/palmon.jpg",
        level: "Rookie"
    },
    {
        name: "Gomamon",
        img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
        level: "Rookie"
    },
    {
        name: "Patamon",
        img: "https://digimon.shadowsmith.com/img/patamon.jpg",
        level: "Rookie"
    },
    {
        name: "Kuwagamon",
        img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
        level: "Champion"
    },
    {
        name: "Greymon",
        img: "https://digimon.shadowsmith.com/img/greymon.jpg",
        level: "Champion"
    },
    {
        name: "Shellmon",
        img: "https://digimon.shadowsmith.com/img/shellmon.jpg",
        level: "Champion"
    },
    {
        name: "Garurumon",
        img: "https://digimon.shadowsmith.com/img/garurumon.jpg",
        level: "Champion"
    },
    {
        name: "Seadramon",
        img: "https://digimon.shadowsmith.com/img/seadramon.jpg",
        level: "Champion"
    },
    {
        name: "Monochromon",
        img: "https://digimon.shadowsmith.com/img/monochromon.jpg",
        level: "Champion"
    },
    {
        name: "Birdramon",
        img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
        level: "Champion"
    },
    {
        name: "Meramon",
        img: "https://digimon.shadowsmith.com/img/meramon.jpg",
        level: "Champion"
    },
    {
        name: "Kabuterimon",
        img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
        level: "Champion"
    },
    {
        name: "Andromon",
        img: "https://digimon.shadowsmith.com/img/andromon.jpg",
        level: "Ultimate"
    },
    {
        name: "Togemon",
        img: "https://digimon.shadowsmith.com/img/togemon.jpg",
        level: "Champion"
    },
    {
        name: "Numemon",
        img: "https://digimon.shadowsmith.com/img/numemon.jpg",
        level: "Champion"
    },
    {
        name: "Monzaemon",
        img: "https://digimon.shadowsmith.com/img/monzaemon.jpg",
        level: "Ultimate"
    },
    {
        name: "Ikkakumon",
        img: "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
        level: "Champion"
    },
    {
        name: "Unimon",
        img: "https://digimon.shadowsmith.com/img/unimon.jpg",
        level: "Champion"
    },
    {
        name: "Leomon",
        img: "https://digimon.shadowsmith.com/img/leomon.jpg",
        level: "Champion"
    },
    {
        name: "Ogremon",
        img: "https://digimon.shadowsmith.com/img/ogremon.jpg",
        level: "Champion"
    },
    {
        name: "Devimon",
        img: "https://digimon.shadowsmith.com/img/devimon.jpg",
        level: "Champion"
    },
    {
        name: "Frigimon",
        img: "https://digimon.shadowsmith.com/img/frigimon.jpg",
        level: "Champion"
    },
    {
        name: "Mojyamon",
        img: "https://digimon.shadowsmith.com/img/mojyamon.jpg",
        level: "Champion"
    },
    {
        name: "Sukamon",
        img: "https://digimon.shadowsmith.com/img/sukamon.jpg",
        level: "Champion"
    },
    {
        name: "Centarumon",
        img: "https://digimon.shadowsmith.com/img/centarumon.jpg",
        level: "Champion"
    },
    {
        name: "Bakemon",
        img: "https://digimon.shadowsmith.com/img/bakemon.jpg",
        level: "Champion"
    },
    {
        name: "Elecmon",
        img: "https://digimon.shadowsmith.com/img/elecmon.jpg",
        level: "Rookie"
    },
    {
        name: "Botamon",
        img: "https://digimon.shadowsmith.com/img/botamon.jpg",
        level: "Fresh"
    },
    {
        name: "Punimon",
        img: "https://digimon.shadowsmith.com/img/punimon.jpg",
        level: "Fresh"
    },
    {
        name: "Poyomon",
        img: "https://digimon.shadowsmith.com/img/poyomon.jpg",
        level: "Fresh"
    },
    {
        name: "Yuramon",
        img: "https://digimon.shadowsmith.com/img/yuramon.jpg",
        level: "Fresh"
    },
    {
        name: "Angemon",
        img: "https://digimon.shadowsmith.com/img/angemon.jpg",
        level: "Champion"
    },
    {
        name: "Whamon",
        img: "https://digimon.shadowsmith.com/img/whamon.jpg",
        level: "Champion"
    },
    {
        name: "Drimogemon",
        img: "https://digimon.shadowsmith.com/img/drimogemon.jpg",
        level: "Champion"
    },
    {
        name: "Etemon",
        img: "https://digimon.shadowsmith.com/img/etemon.jpg",
        level: "Ultimate"
    },
    {
        name: "Gazimon",
        img: "https://digimon.shadowsmith.com/img/gazimon.jpg",
        level: "Rookie"
    },
    {
        name: "Pagumon",
        img: "https://digimon.shadowsmith.com/img/pagumon.jpg",
        level: "In Training"
    },
    {
        name: "SkullGreymon",
        img: "https://digimon.shadowsmith.com/img/skullgreymon.jpg",
        level: "Ultimate"
    },
    {
        name: "Kokatorimon",
        img: "https://digimon.shadowsmith.com/img/kokatorimon.jpg",
        level: "Champion"
    },
    {
        name: "Tyrannomon",
        img: "https://digimon.shadowsmith.com/img/tyrannomon.jpg",
        level: "Champion"
    },
    {
        name: "Piximon",
        img: "https://digimon.shadowsmith.com/img/piximon.jpg",
        level: "Ultimate"
    },
    {
        name: "Datamon",
        img: "https://digimon.shadowsmith.com/img/datamon.jpg",
        level: "Ultimate"
    },
    {
        name: "MetalGreymon",
        img: "https://digimon.shadowsmith.com/img/metalgreymon.jpg",
        level: "Ultimate"
    },
    {
        name: "DemiDevimon",
        img: "https://digimon.shadowsmith.com/img/demidevimon.jpg",
        level: "Rookie"
    },
    {
        name: "WereGarurumon",
        img: "https://digimon.shadowsmith.com/img/weregarurumon.jpg",
        level: "Ultimate"
    },
    {
        name: "Digitamamon",
        img: "https://digimon.shadowsmith.com/img/digitamamon.jpg",
        level: "Ultimate"
    },
    {
        name: "Vegiemon",
        img: "https://digimon.shadowsmith.com/img/vegiemon.jpg",
        level: "Champion"
    },
    {
        name: "Myotismon",
        img: "https://digimon.shadowsmith.com/img/myotismon.jpg",
        level: "Ultimate"
    },
    {
        name: "Vademon",
        img: "https://digimon.shadowsmith.com/img/vademon.jpg",
        level: "Ultimate"
    },
    {
        name: "Pabumon",
        img: "https://digimon.shadowsmith.com/img/pabumon.jpg",
        level: "Fresh"
    },
    {
        name: "Gekomon",
        img: "https://digimon.shadowsmith.com/img/gekomon.jpg",
        level: "Champion"
    },
    {
        name: "Otamamon",
        img: "https://digimon.shadowsmith.com/img/otamamon.jpg",
        level: "Rookie"
    },
    {
        name: "ShogunGekomon",
        img: "https://digimon.shadowsmith.com/img/shogungekomon.jpg",
        level: "Ultimate"
    },
    {
        name: "Garudamon",
        img: "https://digimon.shadowsmith.com/img/garudamon.jpg",
        level: "Ultimate"
    },
    {
        name: "Flymon",
        img: "https://digimon.shadowsmith.com/img/flymon.jpg",
        level: "Champion"
    },
    {
        name: "Gatomon",
        img: "https://digimon.shadowsmith.com/img/gatomon.jpg",
        level: "Champion"
    },
    {
        name: "Nanimon",
        img: "https://digimon.shadowsmith.com/img/nanimon.jpg",
        level: "Champion"
    },
    {
        name: "Devidramon",
        img: "https://digimon.shadowsmith.com/img/devidramon.jpg",
        level: "Champion"
    },
    {
        name: "Dokugumon",
        img: "https://digimon.shadowsmith.com/img/dokugumon.jpg",
        level: "Champion"
    },
    {
        name: "Mammothmon",
        img: "https://digimon.shadowsmith.com/img/mammothmon.jpg",
        level: "Ultimate"
    },
    {
        name: "Gesomon",
        img: "https://digimon.shadowsmith.com/img/gesomon.jpg",
        level: "Champion"
    },
    {
        name: "Raremon",
        img: "https://digimon.shadowsmith.com/img/raremon.jpg",
        level: "Champion"
    },
    {
        name: "SkullMeramon",
        img: "https://digimon.shadowsmith.com/img/skullmeramon.jpg",
        level: "Ultimate"
    },
    {
        name: "Wizardmon",
        img: "https://digimon.shadowsmith.com/img/wizardmon.jpg",
        level: "Champion"
    },
    {
        name: "Pumpkinmon",
        img: "https://digimon.shadowsmith.com/img/pumpkinmon.jpg",
        level: "Ultimate"
    },
    {
        name: "Gotsumon",
        img: "https://digimon.shadowsmith.com/img/gotsumon.jpg",
        level: "Rookie"
    },
    {
        name: "Lillymon",
        img: "https://digimon.shadowsmith.com/img/lillymon.jpg",
        level: "Ultimate"
    },
    {
        name: "Phantomon",
        img: "https://digimon.shadowsmith.com/img/phantomon.jpg",
        level: "Ultimate"
    },
    {
        name: "DarkTyrannomon",
        img: "https://digimon.shadowsmith.com/img/darktyrannomon.jpg",
        level: "Champion"
    },
    {
        name: "Gizamon",
        img: "https://digimon.shadowsmith.com/img/gizamon.jpg",
        level: "Rookie"
    },
    {
        name: "Zudomon",
        img: "https://digimon.shadowsmith.com/img/zudomon.jpg",
        level: "Ultimate"
    },
    {
        name: "MegaSeadramon",
        img: "https://digimon.shadowsmith.com/img/megaseadramon.jpg",
        level: "Ultimate"
    },
    {
        name: "Angewomon",
        img: "https://digimon.shadowsmith.com/img/angewomon.jpg",
        level: "Ultimate"
    },
    {
        name: "Tuskmon",
        img: "https://digimon.shadowsmith.com/img/tuskmon.jpg",
        level: "Champion"
    },
    {
        name: "Snimon",
        img: "https://digimon.shadowsmith.com/img/snimon.jpg",
        level: "Champion"
    },
    {
        name: "MegaKabuterimon",
        img: "https://digimon.shadowsmith.com/img/megakabuterimon.jpg",
        level: "Ultimate"
    },
    {
        name: "MagnaAngemon",
        img: "https://digimon.shadowsmith.com/img/magnaangemon.jpg",
        level: "Ultimate"
    },
    {
        name: "VenomMyotismon",
        img: "https://digimon.shadowsmith.com/img/venommyotismon.jpg",
        level: "Mega"
    },
    {
        name: "WarGreymon",
        img: "https://digimon.shadowsmith.com/img/wargreymon.jpg",
        level: "Mega"
    },
    {
        name: "MetalGarurumon",
        img: "https://digimon.shadowsmith.com/img/metalgarurumon.jpg",
        level: "Mega"
    },
    {
        name: "Nyaromon",
        img: "https://digimon.shadowsmith.com/img/nyaromon.jpg",
        level: "In Training"
    },
    {
        name: "Salamon",
        img: "https://digimon.shadowsmith.com/img/salamon.jpg",
        level: "Rookie"
    },
    {
        name: "Parrotmon",
        img: "https://digimon.shadowsmith.com/img/parrotmon.jpg",
        level: "Ultimate"
    },
    {
        name: "Chuumon",
        img: "https://digimon.shadowsmith.com/img/chuumon.jpg",
        level: "Rookie"
    },
    {
        name: "MetalSeadramon",
        img: "https://digimon.shadowsmith.com/img/metalseadramon.jpg",
        level: "Mega"
    },
    {
        name: "Machinedramon",
        img: "https://digimon.shadowsmith.com/img/machinedramon.jpg",
        level: "Mega"
    },
    {
        name: "Piedmon",
        img: "https://digimon.shadowsmith.com/img/piedmon.jpg",
        level: "Mega"
    },
    {
        name: "Puppetmon",
        img: "https://digimon.shadowsmith.com/img/puppetmon.jpg",
        level: "Mega"
    },
    {
        name: "Scorpiomon",
        img: "https://digimon.shadowsmith.com/img/scorpiomon.jpg",
        level: "Ultimate"
    },
    {
        name: "Divermon",
        img: "https://digimon.shadowsmith.com/img/divermon.jpg",
        level: "Ultimate"
    },
    {
        name: "Kiwimon",
        img: "https://digimon.shadowsmith.com/img/kiwimon.jpg",
        level: "Champion"
    },
    {
        name: "Mushroomon",
        img: "https://digimon.shadowsmith.com/img/mushroomon.jpg",
        level: "Rookie"
    },
    {
        name: "Blossomon",
        img: "https://digimon.shadowsmith.com/img/blossomon.jpg",
        level: "Ultimate"
    },
    {
        name: "Floramon",
        img: "https://digimon.shadowsmith.com/img/floramon.jpg",
        level: "Rookie"
    },
    {
        name: "Deramon",
        img: "https://digimon.shadowsmith.com/img/deramon.jpg",
        level: "Ultimate"
    },
    {
        name: "Cherrymon",
        img: "https://digimon.shadowsmith.com/img/cherrymon.jpg",
        level: "Ultimate"
    },
    {
        name: "Garbagemon",
        img: "https://digimon.shadowsmith.com/img/garbagemon.jpg",
        level: "Ultimate"
    },
    {
        name: "MetalEtemon",
        img: "https://digimon.shadowsmith.com/img/metaletemon.jpg",
        level: "Mega"
    },
    {
        name: "SaberLeomon",
        img: "https://digimon.shadowsmith.com/img/saberleomon.jpg",
        level: "Mega"
    },
    {
        name: "RedVegiemon",
        img: "https://digimon.shadowsmith.com/img/redvegiemon.jpg",
        level: "Champion"
    },
    {
        name: "Mekanorimon",
        img: "https://digimon.shadowsmith.com/img/mekanorimon.jpg",
        level: "Champion"
    },
    {
        name: "Tankmon",
        img: "https://digimon.shadowsmith.com/img/tankmon.jpg",
        level: "Champion"
    },
    {
        name: "Hagurumon",
        img: "https://digimon.shadowsmith.com/img/hagurumon.jpg",
        level: "Rookie"
    },
    {
        name: "WaruMonzaemon",
        img: "https://digimon.shadowsmith.com/img/warumonzaemon.jpg",
        level: "Ultimate"
    },
    {
        name: "LadyDevimon",
        img: "https://digimon.shadowsmith.com/img/ladydevimon.jpg",
        level: "Ultimate"
    },
    {
        name: "Vilemon",
        img: "https://digimon.shadowsmith.com/img/vilemon.jpg",
        level: "Champion"
    },
    {
        name: "Apocalymon",
        img: "https://digimon.shadowsmith.com/img/apocalymon.jpg",
        level: "Mega"
    },
    {
        name: "Kunemon",
        img: "https://digimon.shadowsmith.com/img/kunemon.jpg",
        level: "Rookie"
    },
    {
        name: "Musyamon",
        img: "https://digimon.shadowsmith.com/img/musyamon.jpg",
        level: "Champion"
    },
    {
        name: "Starmon",
        img: "https://digimon.shadowsmith.com/img/starmon.jpg",
        level: "Champion"
    },
    {
        name: "HerculesKabuterimon",
        img: "https://digimon.shadowsmith.com/img/herculeskabuterimon.jpg",
        level: "Mega"
    },
    {
        name: "Candlemon",
        img: "https://digimon.shadowsmith.com/img/candlemon.jpg",
        level: "Rookie"
    },
    {
        name: "Hanumon",
        img: "https://digimon.shadowsmith.com/img/hanumon.jpg",
        level: "Champion"
    },
    {
        name: "Kokuwamon",
        img: "https://digimon.shadowsmith.com/img/kokuwamon.jpg",
        level: "Rookie"
    },
    {
        name: "Revolvermon",
        img: "https://digimon.shadowsmith.com/img/revolvermon.jpg",
        level: "Champion"
    },
    {
        name: "Plesiomon",
        img: "https://digimon.shadowsmith.com/img/plesiomon.jpg",
        level: "Mega"
    },
    {
        name: "Megadramon",
        img: "https://digimon.shadowsmith.com/img/megadramon.jpg",
        level: "Ultimate"
    },
    {
        name: "BlueMeramon",
        img: "https://digimon.shadowsmith.com/img/bluemeramon.jpg",
        level: "Champion"
    },
    {
        name: "Magnadramon",
        img: "https://digimon.shadowsmith.com/img/magnadramon.jpg",
        level: "Mega"
    },
    {
        name: "Gorillamon",
        img: "https://digimon.shadowsmith.com/img/gorillamon.jpg",
        level: "Champion"
    },
    {
        name: "Syakomon",
        img: "https://digimon.shadowsmith.com/img/syakomon.jpg",
        level: "Rookie"
    },
    {
        name: "MarineAngemon",
        img: "https://digimon.shadowsmith.com/img/marineangemon.jpg",
        level: "Mega"
    },
    {
        name: "Boltmon",
        img: "https://digimon.shadowsmith.com/img/boltmon.jpg",
        level: "Mega"
    },
    {
        name: "Mamemon",
        img: "https://digimon.shadowsmith.com/img/mamemon.jpg",
        level: "Ultimate"
    },
    {
        name: "ExTyrannomon",
        img: "https://digimon.shadowsmith.com/img/extyrannomon.jpg",
        level: "Ultimate"
    },
    {
        name: "Veedramon",
        img: "https://digimon.shadowsmith.com/img/veedramon.jpg",
        level: "Champion"
    },
    {
        name: "AeroVeedramon",
        img: "https://digimon.shadowsmith.com/img/aeroveedramon.jpg",
        level: "Ultimate"
    },
    {
        name: "Phoenixmon",
        img: "https://digimon.shadowsmith.com/img/phoenixmon.jpg",
        level: "Mega"
    },
    {
        name: "Betamon",
        img: "https://digimon.shadowsmith.com/img/betamon.jpg",
        level: "Rookie"
    },
    {
        name: "Guardromon",
        img: "https://digimon.shadowsmith.com/img/guardromon.jpg",
        level: "Champion"
    },
    {
        name: "Penguinmon",
        img: "https://digimon.shadowsmith.com/img/penguinmon.jpg",
        level: "Rookie"
    },
    {
        name: "PlatinumSukamon",
        img: "https://digimon.shadowsmith.com/img/platinumsukamon.jpg",
        level: "Champion"
    },
    {
        name: "Psychemon",
        img: "https://digimon.shadowsmith.com/img/psychemon.jpg",
        level: "Rookie"
    },
    {
        name: "Tsukaimon",
        img: "https://digimon.shadowsmith.com/img/tsukaimon.jpg",
        level: "Rookie"
    },
    {
        name: "ModokiBetamon",
        img: "https://digimon.shadowsmith.com/img/modokibetamon.jpg",
        level: "Champion"
    },
    {
        name: "Saberdramon",
        img: "https://digimon.shadowsmith.com/img/saberdramon.jpg",
        level: "Champion"
    },
    {
        name: "SnowAgumon",
        img: "https://digimon.shadowsmith.com/img/snowagumon.jpg",
        level: "Rookie"
    }
]
// Export faux Digimon database
module.exports = digimon;
