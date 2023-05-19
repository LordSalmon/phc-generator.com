<script lang="ts" setup>

definePageMeta({
    layout: "default",
});

useHead({
    title: "PHC Generator",
});

const url = "https://phc-generator.com/";

useServerSeoMeta({
    title: "PHC Generator",
    description: "Generate hashes with bcrypt and argon2 using the PHC Format for these hashes. You can also validate your bcrypt and argon2 hashes with this tool.",
    ogUrl: url,
});

</script>

<template>
    <div class="min-w-[100vw] min-h-[100vh]">
        <div class="flex justify-center items-center h-48 md:h-60 flex-col">
            <span class="text-4xl font-bold text-slate-100">PHC Generator</span>
            <span class="my-4 text-slate-100 text-xl font-medium text-center">Generate and check hashes with bcrypt and argon2 using the
                <a
                    href="https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"
                    target="_blank"
                    class="underline text-slate-300 font-semibold"
                >PHC Format</a>
            </span>
        </div>
        <div class="flex flex-col justify-center items-center">
            <HasherSelect />
            <Hasher />
            <HashChecker />
        </div>
    </div>
</template>
