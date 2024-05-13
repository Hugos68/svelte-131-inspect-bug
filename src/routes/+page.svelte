<script>
	import { useFloating } from './useFloating.svelte.js';
	import { useRole } from './useRole.svelte.js';

	let open = $state(false);

	const floating = useFloating({
		get open() {
			return open;
		}
	});

	const role = useRole(floating.context);
</script>

<input type="checkbox" bind:checked={open} />
