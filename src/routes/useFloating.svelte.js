export function useFloating(options) {
	const { open = true } = $derived(options);

	const context = $state({
		get open() {
			return open;
		}
	});

	return { context };
}
