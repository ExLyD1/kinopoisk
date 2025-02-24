export const ratingHeight = (ratings: number[][]): number[] => {
	let totalVotes = 0

	const rates = ratings.map(userIds => {
		const votes = userIds.length
		totalVotes += votes
		return votes
	})

	const rat = rates.map(el => Number(((el / totalVotes) * 100).toFixed(1)))

	return rat
}
