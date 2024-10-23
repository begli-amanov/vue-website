<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Subscribe from '@/components/Subscribe.vue';
</script>

<template>
	<main class="wrapper">
		<h1>Begli Amanov</h1>

		<p class="paragraph">“Life begins at the end of your comfort zone.”</p>

		<h4>Location:</h4>
		<p>South Germany, Stuttgart</p>

		<h4>Professional title:</h4>
		<p>Tech Support Agent</p>

		<h4>What do you do?</h4>

		<ul style="list-style: none; text-align: center">
			<li>Starting YouTube career</li>
			<li>
				Reading Daniel Levitin's book:
				<strong>The Organized Mind.</strong>
			</li>
			<li>Listening on podcasts with Nathan Barry and Rachel Rodgers</li>
		</ul>

		<h4>Why?</h4>
		<p style="text-align: center">
			I have an assumption, that I could make a good impact when it comes to
			story telling and video editing. But who knows???
		</p>

		<h4>What should we read?</h4>
		<p style="text-align: center">
			Philippa Perry:
			<strong
				>The Book You Wish Your Parents Had Read (and Your Children Will Be Glad
				That You Did).</strong
			>
			One of the most useful books I've red so far.
		</p>

		<Subscribe />
	</main>

	<Footer />
</template>

<style scoped></style>
