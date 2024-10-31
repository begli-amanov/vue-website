<script setup lang="ts"></script>

<template>
	<h2 class="subscribe-heading">Subscribe</h2>

	<p class="paragraph">
		Enjoying website? You could enjoy my
		<a href=""><strong>blog</strong></a> as well. Subscribe with the
		<strong>form</strong> below. Unsubscribe at any time.
	</p>
	<form action="post" class="interactions">
		<input type="text" placeholder="Enter your mail address" required />
		<a
			href="mailto:email.com?subject=Reaching%20Out&body=How%20are%20you"
			class="link-button"
		>
			<button class="button" v-ripple>
				Submit <i class="pi pi-check icon"> </i></button
		></a>
	</form>
</template>

<style scoped>
/* Used for controlling of the style of singe h2 in Subscribe Component */
h2 {
	border-bottom: 2px solid var(--main-text-color);
	border-bottom-width: 0.1875rem;
	padding-top: 0;
	padding-bottom: 0.25rem;
	padding-inline: 0.0625rem;
}
</style>
