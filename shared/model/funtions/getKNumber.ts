export const getKNumber = (number: number): string | number => {
	if (String(number).length > 3 && String(number).length <= 6) {
		return `${(number / 1000).toFixed(1)}K`
	} else if (String(number).length > 6) {
		return `${(number / 1000000).toFixed(1)}M`
	} else {
		return number
	}
}
