import { getRandomChalenge } from './myChalenges.js';
import { show, hide, getElem } from './utils.js';

/* handals sidebar togle and events */
const sidebar = getElem(".sidebar-container");
const body = getElem("body");

getElem(".js-sidebar-logo").addEventListener('click', () => {
	togleSidebar();
});
getElem(".js-hide-sidebar-button").addEventListener('click', () => {
	togleSidebar();
})
getElem(".sidebar-blank-area").addEventListener('click', () => {
	togleSidebar();
})

function togleSidebar() {
	sidebar.classList.toggle("show-sidebar");
	getElem("sidebar")
	body.classList.toggle("disable-scroll");
}

// gets a random challenge

let selectedCotegries = [
	"coding",
	"creativity",
	"fitness",
	"Cooking",
	"learning",
	"lifestyle",
	"mentalHealth",
	"social"
];

// getElem returns the element using querySelector

const defaultImg = getElem(".default-image-container")
const chalengeBox = getElem(".chalenge-box");
const completed = getElem(".completed-button")
const accept = getElem(".accept-button");
const reject = getElem(".reject-button");
const newChalengeBtn = getElem(".new-chalenge-button");

const popup = getElem(".popup-container");
let popupMessege = getElem(".popup-messege");
const cancleBtn = getElem(".cancle");
const confirmBtn = getElem(".confirm")

let popupCallback = null;
let congracts = false;
// show() removes the "hide" class from element classlist 
// hide() adds the "hide" class from element classlist 
accept.addEventListener('click', () => {
	popupMessege.innerHTML = "Confirm that you want to accept this challenge."
	show(popup);
	popupCallback = () => {
		hide(getElem(".js-accep-reject-container"))
		show(getElem(".completed-button-container"))
	}
})
completed.addEventListener('click', () => {
	popupMessege.innerHTML = "Confirm that you want to mark this challenge as completed.";
	show(popup)
	congracts = true;
	popupCallback = () => {
		hide(chalengeBox)
		hide(getElem(".completed-button-container"));
		show(defaultImg)
		show(newChalengeBtn)
	}
})
reject.addEventListener('click', () => {
	popupMessege.innerHTML = "Do you really want to give up on this challenge? 50 XP will be lost.";
	show(popup);
	
	popupCallback = () => {
		hide(getElem(".js-accep-reject-container"));
		hide(chalengeBox)
		hide(getElem(".completed-button-container"));
		show(defaultImg)
		show(newChalengeBtn)
	}
})
newChalengeBtn.addEventListener("click", () => {
	hide(newChalengeBtn);
	show(chalengeBox);
	hide(defaultImg);
	show(getElem(".js-accep-reject-container"));
	
	chalengeBox.innerHTML = getRandomChalenge(selectedCotegries);
})
cancleBtn.addEventListener('click', () => {
	hide(popup);
})
confirmBtn.addEventListener('click', () => {
	hide(popup);
	if (popupCallback) {
		popupCallback();
		popupCallback = null;
	}
	if (congracts) {
		hide(getElem(".popup-buttons"));
		getElem(".popup-messege").innerHTML = 'Congratulations! You completed the challenge and earned 100 XP!';
		show(getElem(".popup-container"));
		setTimeout(() => {
			show(getElem(".popup-buttons"));
			hide(getElem(".popup-container"));
		}, 3000);
		congracts = false;
	}
})


