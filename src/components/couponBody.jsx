export const calculatePercentage = (value) => {
	if (value < 2000) {
		return value * 0.05;
	} else if (value >= 2000 && value <= 4000) {
		return value * 0.1;
	} else if (value > 4000) {
		return value * 0.1;
	}
	return 0;
};

const result = calculatePercentage(2500);
console.log(result); // This will log 250, which is 10% of 2500
