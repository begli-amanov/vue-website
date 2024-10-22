<script setup lang="ts"></script>

<template>
	<div class="subscribe-block">
		<h2>Subscribe</h2>
		<hr />
	</div>

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
.interactions,
input {
	background-color: var(--card-background);
	padding: 0.5rem;
	border-radius: var(--card-border-radius);
	outline-color: transparent;
	border: 0.0625rem solid var(--card-background);

	&:hover,
	&:focus,
	&:active {
		outline: none;
	}
}

.interactions {
	&:hover,
	&:focus,
	&:active {
		border: 1px solid var(--emerald);
	}
}

hr {
	display: block;
	width: 6.5rem;
	height: 0.3125rem;
	border: 0;
	border-top: 0.1875rem solid var(--main-text-color);
	padding: 0;
	margin-top: 0.2rem;
}

h2 {
	font-size: 1.25rem;
}

@media only screen and (min-width: 20rem) and (max-width: 26.5625rem) {
}
</style>
