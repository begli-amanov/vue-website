<script lang="ts" setup>
import Nav from './Nav.vue';
</script>

<template>
	<header>
		<div class="header title" id="header">
			<RouterLink to="/" class="title"><h1>Jumpstart</h1></RouterLink>

			<!-- NAV WITH ROUTER MECHANISM FROM VUE-->
			<Nav />
		</div>
		<h2>
			Explore these helpful resources that could make your Start a bit more
			comfortable
		</h2>
	</header>
</template>

<style scoped></style>
