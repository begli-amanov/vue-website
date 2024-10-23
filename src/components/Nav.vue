<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>
<template>
	<!-- Nav with Router mechanism from Vue -->
	<nav>
		<RouterLink to="/now">Now</RouterLink>
		<RouterLink to="https://story-journal.online">
			<span>
				Blog
				<i class="pi pi-external-link"> </i>
			</span>
		</RouterLink>
	</nav>
</template>
