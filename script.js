const BODY = document.getElementsByTagName("body")[0];
const CARD = document.getElementById("card");
const IMAGES = [
	{name: "Kramad Cral", image: "images/kramad_cral.jpg"},
	{name: "Bild på bild på patet", image: "images/bild_pa_bild_pa_patet.jpeg"}
];

function generate_card() {
	const background = Math.floor(Math.random() * IMAGES.length);
	const image = IMAGES[background];
	CARD.style.backgroundImage = `url(${image.image})`;
}

function update_card_size() {
	console.log("RESIZING");
	const height = window.innerHeight;
	const width = window.innerWidth;
	if (height < width * Math.sqrt(2)) {
		CARD.style.height = `${height}px`;
		CARD.style.width = `${height / Math.sqrt(2)}px`;
	} else {
		CARD.style.height = `${width * Math.sqrt(2)}px`;
		CARD.style.width = `${width}px`;
	}
}

generate_card();
update_card_size();
window.addEventListener("resize", update_card_size);



// BODY.innerHTML += `<img src="${image.image}" />"`;
