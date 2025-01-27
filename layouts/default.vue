<script setup>
    import AppHeader from "~/components/AppHeader.vue";
    import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
    <AppHeader class="bg-dark text-white"/>
    <main class="bg-dark text-white">
        <slot></slot>
    </main>
    <AppFooter class="bg-dark text-white"/>
</template>

