<script lang="ts" setup>
</script>

<template>
    <div class="bg-slate-900 text-slate-100">
        <slot />
        <div class="fixed bottom-0 right-0">
            <Links />
        </div>
        <div class="hidden md:flex fixed bottom-0 w-full p-2 text-slate-400 font-medium text-sm">
            <span>Made with ❤️ by <a
                href="https://simonschwedes.ch"
                target="_blank"
            >Simon Schwedes</a></span>
            <div class="ml-2">
                •
            </div>
            <NuxtLink
                to="/"
                class="ml-2 underline"
            >
                <span>Home</span>
            </NuxtLink>
            <div class="ml-2">
                •
            </div>
            <NuxtLink
                class="ml-2 underline"
                to="api"
            >
                <span>Api reference</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style>

body {
    @apply bg-slate-900;
}

</style>
