<script lang="ts" setup>
import Header from '@/components/Header.vue';
import ScrollTop from 'primevue/scrolltop';
import { RouterView } from 'vue-router';
</script>

<template>
	<!-- HEADER COMPONENT WITH NAV COMPONENT WITHIN -->
	<Header />

	<!-- SCROLL-TOP COMPONENT -->
	<ScrollTop />
	<RouterView />
</template>
