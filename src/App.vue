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

	<!-- for now it is enough to have this RouterView only here. Without it, there will be no content displayed from other components -->
	<RouterView />
</template>
