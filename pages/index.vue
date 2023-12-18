<script lang="ts" setup>

definePageMeta({
    layout: "default",
});

useHead({
    title: "PHC Generator",
    htmlAttrs: {
        lang: "en",
    },
});

const url = "https://phc-generator.com/";

useServerSeoMeta({
    robots: "index, follow",
    author: "Simon Schwedes",
    publisher: "Schwedes Solutions",
    title: "PHC Generator - Generate PHC hashed with bcrypt and argon2",
    description: "Generate hashes with bcrypt and argon2 using the PHC Format for these hashes. You can also validate your bcrypt and argon2 hashes with this tool.",
    ogUrl: url,
    keywords: "bcrypt, argon2, hash, generator, phc, phc generator, phc generator online, phc generator tool, phc generator website, phc generator online tool, phc generator website tool, phc generator online website, phc generator website online, phc generator online website tool, phc generator website online tool, phc generator online tool website, phc generator tool online website, phc generator tool website online, phc generator website tool online, phc generator website online tool, phc generator tool online, phc generator online tool, phc generator",
});

</script>

<template>
    <div class="min-w-[100vw] min-h-[100vh]">
        <div class="flex justify-center items-center h-48 md:h-60 flex-col">
            <h1 class="text-4xl font-bold text-slate-100">
                PHC Generator
            </h1>
            <h2 class="my-4 text-slate-100 text-xl font-medium text-center">
                Generate and check hashes with bcrypt and argon2 using the
                <a
                    href="https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"
                    target="_blank"
                    class="underline text-slate-300 font-semibold"
                >PHC Format</a>
            </h2>
        </div>
        <div class="flex flex-col justify-center items-center">
            <HasherSelect />
            <Hasher />
            <HashChecker />
        </div>
    </div>
</template>
