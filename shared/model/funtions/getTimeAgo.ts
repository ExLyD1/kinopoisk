export function getTimeAgo(timeAtPublished: number): string {
	const now = Date.now()
	const diff = now - timeAtPublished

	const seconds = Math.floor(diff / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)
	const months = Math.floor(days / 30)
	const years = Math.floor(months / 12)

	if (seconds < 60) {
		return 'just now'
	} else if (minutes < 60) {
		return `${minutes}min`
	} else if (hours < 24) {
		return `${hours}h`
	} else if (days < 30) {
		return `${days}d`
	} else if (months < 12) {
		return `${months}mon`
	} else {
		return `${years}y`
	}
}
