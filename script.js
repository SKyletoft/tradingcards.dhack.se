const BODY         = document.getElementsByTagName("body")[0];
const CARD         = document.getElementById("card");
const TITLE        = document.getElementById("title");
const TUNNELVISION = document.getElementById("tunnelvision");
const LINUX        = document.getElementById("linuxfu");
const FIKA         = document.getElementById("fika");
const STALLMAN     = document.getElementById("stallman");

const COMMONS = [
	{name : "Kramad Cral", image : "images/kramad_cral.jpg"},
	{name : "Ätande Pingu", image : "images/antande_pingu.jpg"},
	{name : "Blank Pingu", image : "images/blank_pingu.jpg"},
	{name : "Creepy Cral", image : "images/creepy_cral.jpg"},
	{name : "Enda Einar", image : "images/enda_einar.jpg"},
	{name : "Klappad Cral", image : "images/klappad_cral.jpg"},
	{name : "Klappad Pingu", image : "images/klappad_pingu.jpg"},
	{name : "Klappande Kryddan", image : "images/klappande_kryddan.jpg"},
	{name : "Klappande Pingu", image : "images/klappande_pingu.jpg"},
	{name : "Leende pDave", image : "images/leende_pdave.jpg"},
	{name : "Leende Riddle", image : "images/leende_riddle.jpg"},
	{name : "Läskigt leende Riddle", image : "images/leende_riddle_2.jpg"},
	{name : "OooOooOooOoo Kryddan", image : "images/ooooh_kryddan.jpg"},
	{name : "Överklädd pDave", image : "images/overkladd_pdave.jpg"},
	{name : "Ovetande Cral", image : "images/ovetande_cral.jpg"},
	{name : "Ovetande Kryddan", image : "images/ovetande_kryddan.jpg"},
	{name : "Poggers Kryddan", image : "images/poggers_kryddan.jpg"},
	{name : "Skäggig Cral", image : "images/skaggig_cral.jpg"},
	{name : "Vacker Pingu", image : "images/vacker_pingu.jpg"},
];
const RARES = [
	{name : "Anonym Kiren", image : "images/anonym_kiren.jpg"},
	{name : "DLude-Brage", image : "images/dlude_brage.jpg"},
	{name : "Fotande Riddle", image : "images/fotande_riddle.jpg"},
	{name : "Klappad Riddle", image : "images/klappad_riddle.jpg"},
];
const LEGENDARIES = [
	{
		name : "Bild-på-bild på patet",
		image : "images/bild_pa_bild_pa_patet.jpeg"
	},
];

const TOTAL_CARDS = COMMONS.length + RARES.length + LEGENDARIES.length;
function generate_card() {
	const seed = Math.floor(Math.random() * TOTAL_CARDS) / TOTAL_CARDS;
	let image;
	let name;
	let rarity;
	let adjective;
	let tv    = Math.ceil(Math.random(seed) * 3);
	let linux = Math.ceil(Math.random(seed) * 3);
	let fika  = Math.ceil(Math.random(seed) * 3);
	let rms   = Math.ceil(Math.random(seed) * 3);

	if (seed < 0.6) {
		rarity    = "Common";
		index     = Math.floor(seed / 0.6 * COMMONS.length);
		adjective = "";
		name      = COMMONS[index].name;
		image     = COMMONS[index].image;
	} else if (seed < 0.9) {
		rarity    = "Rare";
		index = Math.floor((seed - 0.6) / 0.3 * RARES.length)
		adjective = "";
		name      = RARES[index].name;
		image     = RARES[index].image;

		tv += 5;
		linux += 5;
		fika += 5;
		rms += 5;
	} else {
		rarity    = "Legendary";
		index     = Math.floor(((seed - 0.9) / 0.1) * LEGENDARIES.length);
		adjective = "";
		name      = LEGENDARIES[index].name;
		image     = LEGENDARIES[index].image;

		tv += 7;
		linux += 7;
		fika += 7;
		rms += 7;
	}

	CARD.style.backgroundImage = `url(${image})`;
	TITLE.innerText            = `${rarity} ${adjective} ${name}`;
	TUNNELVISION.innerText     = `Tunnelvision: ${tv}`;
	LINUX.innerText            = `Linux-fu: ${linux}`;
	FIKA.innerText             = `Fika: ${fika}`;
	STALLMAN.innerText         = `Stallman-vibes: ${rms}`;
}

function update_card_size() {
	const height = window.innerHeight;
	const width  = window.innerWidth;
	if (height < width * Math.sqrt(2)) {
		CARD.style.height = `${height}px`;
		CARD.style.width  = `${height / Math.sqrt(2)}px`;
	} else {
		CARD.style.height = `${width * Math.sqrt(2)}px`;
		CARD.style.width  = `${width}px`;
	}
}

generate_card();
update_card_size();
window.addEventListener("resize", update_card_size);

// setTimeout(() => { location.reload(true); }, 500);
