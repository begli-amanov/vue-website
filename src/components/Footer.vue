<script setup lang="ts">
import Nav from './Nav.vue';
</script>

<template>
	<footer>
		<p class="paragraph">Ready for more? Than check out my YouTube channel.</p>

		<!-- footer navigation -->
		<a href="https://youtube.com" target="_blank" class="link-button">
			<button class="button" v-ripple>
				YouTube<i class="pi pi-youtube"></i>
			</button>
		</a>

		<Nav />
		<p>©2024 Jumpstart. All rights reserved.</p>
	</footer>
</template>

<style scoped></style>
