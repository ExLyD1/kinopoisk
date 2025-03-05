export function generateSlug(name: string) {
	if (!name) return ''

	return name.toLowerCase().replace(/\s+/g, '-')
}
