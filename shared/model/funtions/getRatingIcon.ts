import star1 from '~/shared/ui/icons/rating/oneStarRating.png'
import star2 from '~/shared/ui/icons/rating/twoStartRating.png'
import star3 from '~/shared/ui/icons/rating/threeStarsRating.png'
import star4 from '~/shared/ui/icons/rating/fourStarsRating.png'
import star5 from '~/shared/ui/icons/rating/fiveStarsRating.png'

export function getRatingIcons(rate: number) {
	let icons = []

	if (rate >= 4 && rate <= 5) {
		icons = [true, true, true, true, true]
	} else if (rate >= 3 && rate < 4) {
		icons = [true, true, true, true, false]
	} else if (rate >= 2 && rate < 3) {
		icons = [true, true, true, false, false]
	} else if (rate >= 1 && rate < 2) {
		icons = [true, true, false, false, false]
	} else {
		icons = [true, false, false, false, false]
	}

	return icons
}
