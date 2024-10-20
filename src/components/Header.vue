<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home',
	},
	{
		label: 'Now',
		icon: 'pi pi-clock',
		url: 'https://begli-amanov.github.io/my-first-website/now.html',
	},
	{
		label: 'Blog',
		icon: 'pi pi-tablet',
	},
]);
</script>

<style lang="css" scoped></style>

<template>
	<div class="card">
		<Menubar :model="items" />
	</div>
</template>

<style scoped></style>
