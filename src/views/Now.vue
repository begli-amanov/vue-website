<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Subscribe from '@/components/Subscribe.vue';
</script>

<template>
	<!-- MAIN CONTENT OF NOW VIEW -->
	<main class="wrapper">
		<h1>Begli Amanov</h1>

		<p class="paragraph">“Life begins at the end of your comfort zone.”</p>

		<ul class="paragraph">
			<li>
				<strong>Location:</strong>
				South Germany, Stuttgart
			</li>

			<li>
				<h4>Professional title: Tech Support Agent</h4>
			</li>
			<h4>What do you do?</h4>

			<li>Starting YouTube career</li>
			<li>
				Reading Daniel Levitin's book:
				<strong>The Organized Mind.</strong>
			</li>
			<li>Listening on podcasts with Nathan Barry and Rachel Rodgers</li>
		</ul>

		<h4>Why?</h4>
		<p class="paragraph">
			I have an assumption, that I could make a good impact when it comes to
			story telling and video editing. But who knows???
		</p>

		<h4>What should we read?</h4>
		<p class="paragraph">
			Philippa Perry:
			<strong
				>The Book You Wish Your Parents Had Read (and Your Children Will Be Glad
				That You Did).</strong
			>
			One of the most useful books I've red so far.
		</p>

		<!-- SUBSCRIBE COMPONENT -->
		<Subscribe />
	</main>

	<!-- FOOTER COMPONENT -->
	<Footer />
</template>

<style scoped></style>
