<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Subscribe from '@/components/Subscribe.vue';
</script>

<template>
	<!-- MAIN CONTENT OF NOW VIEW -->
	<main class="wrapper">
		<h1>Begli Amanov</h1>
		<h2>“Life begins at the end of your comfort zone.”</h2>
		<ul class="paragraph">
			<li>
				<p>Location:</p>
				<h3>South Germany, Stuttgart</h3>
			</li>

			<li>
				<p>Professional title:</p>
				<h3>Tech Support Agent</h3>
			</li>

			<li>
				<p>What do you do?</p>
				<h3>Online writing, improving UI skills, developing new ones.</h3>
			</li>

			<li>
				<p>Reading Adele Faber's and Elaine Mazlish's book:</p>
				<h3>So sage ich's meinem Kind.</h3>
			</li>
			<li>
				<p>Listening on podcast</p>
				<h3>
					<a href="https://robdial.com/podcast/" target="_blank"
						>Rob Dial: Mindset Mentor</a
					>
				</h3>
			</li>

			<li>
				<p>Why?</p>
				<h3>
					Learning new things each day and trying to improve slowly and steady
					on for me important areas of my human being. If I can help my self, I
					would be able to help someone else around me.
				</h3>
			</li>

			<li>
				<p>What should we read?</p>

				<h3>
					<p>Philippa Perry:</p>
					<strong
						>The Book You Wish Your Parents Had Read (and Your Children Will Be
						Glad That You Did).</strong
					>
				</h3>
				<p>
					One of the most useful books about parenting and relationships I've
					read so far.
				</p>
			</li>
		</ul>

		<!-- SUBSCRIBE COMPONENT -->
		<Subscribe />
	</main>

	<!-- FOOTER COMPONENT -->
	<Footer />
</template>

<style scoped></style>
