<script lang="ts" setup>

definePageMeta({
    layout: "default",
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
