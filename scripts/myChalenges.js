import {codingChallenges} from '../chalenges/coding.js';
import {creativityChallenges} from '../chalenges/creativity.js';
import {fitnessChallenges} from '../chalenges/fitness.js';
import {foodChallenges} from '../chalenges/foodCooking.js';
import {learningChallenges} from '../chalenges/learning.js';
import {lifestyleChallenges} from '../chalenges/lifestyle.js';
import {mindfulnessChallenges} from '../chalenges/mindfulnessMentalhealth.js';
import {socialChallenges} from '../chalenges/social.js';

const data = {
	coding: codingChallenges,
	creativity: creativityChallenges,
	fitness: fitnessChallenges,
	Cooking: foodChallenges,
	learning: learningChallenges,
	lifestyle: lifestyleChallenges,
	mentalHealth: mindfulnessChallenges,
	social: socialChallenges
}

export function getRandomChalenge(selectedCotegries) {
	const randArrayName = selectedCotegries[randomIndex(selectedCotegries)];
	const randomArray = data[randArrayName];
  return `${randomArray[randomIndex(randomArray)]}`;
}
function randomIndex(selectedCotegries) {
	let range = selectedCotegries.length;
	return Math.floor(Math.random() * range);
}