<script lang="ts" setup>

type Link = {
    icon: string;
    title: string;
    url: string;
};

const options: Link[] = [
    {
        icon: "akar-icons:github-fill",
        title: "Github Repository",
        url: "https://github.com/LordSalmon/phc-generator.com",
    },
    {
        icon: "cib:ko-fi",
        title: "Buy me a coffee",
        url: "https://ko-fi.com/simonschwedes",
    },
];

</script>

<template>
    <div class="flex flex-col items-center justify-end box-border p-4">
        <NuxtLink
            v-for="option in options"
            :key="option.url"
            class="flex items-center justify-center gap-2 my-2 group cursor-pointer"
            :to="option.url"
            target="_blank"
            :title="option.title"
        >
            <Icon
                :name="option.icon"
                class="w-6 h-6 transition-all duration-150 group-hover:-rotate-12 group-hover:text-white"
            />
        </NuxtLink>
    </div>
</template>
