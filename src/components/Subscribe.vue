<script setup lang="ts"></script>

<template>
	<h2>Subscribe</h2>

	<p class="paragraph">
		Enjoying website? You could enjoy my
		<a href=""><strong>blog</strong></a> as well. Subscribe with the
		<strong>form</strong> below. Unsubscribe at any time.
	</p>
	<div class="interactions">
		<input type="text" placeholder="Enter your mail address" />
		<button class="button" v-ripple>
			Submit <i class="pi pi-check icon"> </i>
		</button>
	</div>
</template>

<style scoped>
/* Used for controlling of the style of singe h2 in Subscribe Component */
h2 {
	border-bottom: 2px solid var(--main-text-color);
	padding-bottom: 0.25rem;
	border-bottom-width: 0.1875rem;
	padding-inline: 0.0625rem;
	width: fit-content;
}
</style>
