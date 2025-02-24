export function getFilmRate(ratings: number[][]): number {
	let totalScore = 0
	let totalVotes = 0

	ratings.forEach((userIds, index) => {
		const ratingValue = index + 1
		const votes = userIds.length

		totalScore += ratingValue * votes
		totalVotes += votes
	})

	return totalVotes === 0 ? 0 : Number((totalScore / totalVotes).toFixed(1))
}
