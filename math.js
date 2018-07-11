/**
 * get random number between min and max
 * @param  {number} max
 * @param  {number} max
 * @return {[type]}
 */
function getRandomNumberBetweenMinMax(min, max) {
	return ((max - min) * Math.random()) + min;
}

/**
 * 
 * @return {number}
 */
function getRandomIntegerBetweenZeroOne() {
	return Math.round(Math.random());
}

/**
 * @return {number}
 */
function getRandomIntegerBetweenZeroHundred() {
	return Math.round(100 * Math.random());
}

getRandomNumberBetweenMinMax(2, 8);
getRandomIntegerBetweenZeroOne();
getRandomIntegerBetweenZeroHundred();