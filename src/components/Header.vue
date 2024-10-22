<script lang="ts" setup>
import Nav from './Nav.vue';
</script>

<template>
	<header>
		<div class="header title">
			<h1>Jumpstart</h1>

			<Nav />
		</div>
		<h2>
			Explore these helpful resources that could make your Start a bit more
			comfortable
		</h2>
	</header>
</template>

<style scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	margin-bottom: 1.8rem;
}

@media only screen and (min-width: 20rem) and (max-width: 26.5625rem) {
	header {
		padding-inline: var(--mobile-padding);
		margin-bottom: 0.8rem;
	}
}
</style>
