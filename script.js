const BODY   = document.getElementsByTagName("body")[0];
const CARD   = document.getElementById("card");
const TITLE  = document.getElementById("title");
const STATS  = document.getElementById("stats");
const IMAGES = [
	{
		name : "Bild-på-bild på patet",
		image : "images/bild_pa_bild_pa_patet.jpeg"
	},
	{name : "Kramad Cral", image : "images/kramad_cral.jpg"},
	{name : "Anonym Kiren", image : "images/anonym_kiren.jpg"},
	{name : "Ätande Pingu", image : "images/antande_pingu.jpg"},
	{name : "Blank Pingu", image : "images/blank_pingu.jpg"},
	{name : "Creepy Cral", image : "images/creepy_cral.jpg"},
	{name : "DLude-Brage", image : "images/dlude_brage.jpg"},
	{name : "Enda Einar", image : "images/enda_einar.jpg"},
	{name : "Fotande Riddle", image : "images/fotande_riddle.jpg"},
	{name : "Klappad Cral", image : "images/klappad_cral.jpg"},
	{name : "Klappad Pingu", image : "images/klappad_pingu.jpg"},
	{name : "Klappad Riddle", image : "images/klappad_riddle.jpg"},
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

function generate_card() {
	const background = Math.floor(Math.random() * IMAGES.length);
	const image      = IMAGES[background];
	const rarity     = "Common";
	const adj        = "\b";

	CARD.style.backgroundImage = `url(${image.image})`;
	TITLE.innerText            = `${rarity} ${adj} ${image.name}`;
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

// BODY.innerHTML += `<img src="${image.image}" />"`;
