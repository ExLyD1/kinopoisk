export function getRatingIcons(rate: number | undefined | null) {
	if (rate === undefined || rate === null) {
		return undefined
	}
	let icons: boolean[] = []

	if (rate > 4 && rate <= 5) {
		icons = [true, true, true, true, true]
	} else if (rate > 3 && rate <= 4) {
		icons = [true, true, true, true, false]
	} else if (rate > 2 && rate <= 3) {
		icons = [true, true, true, false, false]
	} else if (rate > 1 && rate <= 2) {
		icons = [true, true, false, false, false]
	} else {
		return undefined
	}

	return icons
}
