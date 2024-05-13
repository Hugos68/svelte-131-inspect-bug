export function useRole(context) {
	const { open } = $derived(context);

	$inspect(open).with((open) => console.log(`inspect open: ${open}`));
	$effect(() => console.log(`effect open: ${open}`));
}
