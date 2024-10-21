<script lang="ts" setup>
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Subscribe from './components/Subscribe.vue';
</script>

<template>
	<Header />
	<main class="wrapper">
		<Card />
		<Subscribe />
	</main>
	<Footer />
</template>

<style scoped>
.wrapper {
	gap: 1.8rem;
	margin-bottom: 1.75rem;
}
</style>
