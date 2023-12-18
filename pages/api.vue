<script lang="ts" setup>

definePageMeta({
    layout: "default",
});

const url = "https://phc-generator.com/api";

useHead({
    title: "PHC Generator - Api reference",
    htmlAttrs: {
        lang: "en",
    },
});

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
    <div class="box-border p-6 flex flex-col gap-y-4">
        <div>
            <div class="mb-4">
                <ApiHeader>Generate hashes:</ApiHeader>
            </div>
            <ApiEndpoint
                url="/api/hash/:algorithm"
                method="POST"
                :metadata="{
                    'params:': {
                        'algorithm': ['bcrypt', 'argon2'],
                    },
                    'body structure:': {
                        'plain': 'string'
                    }
                }"
            />
        </div>
        <div>
            <div class="mb-4">
                <ApiHeader>Compare hashes:</ApiHeader>
            </div>
            <ApiEndpoint
                url="/api/validate/:algorithm"
                method="POST"
                :metadata="{
                    'params:': {
                        'algorithm': ['bcrypt', 'argon2'],
                    },
                    'body structure:': {
                        'plain': 'string',
                        'hash': 'string'
                    }
                }"
            />
        </div>
    </div>
</template>
