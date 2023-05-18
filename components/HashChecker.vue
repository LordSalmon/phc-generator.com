<script lang="ts" setup>

const hasher = useLocalStorage("hasher", "bcrypt");

const plain = ref("");
const hashToCheck = ref("");
const matches = ref<boolean | null>(null);

watch([plain, hashToCheck,], () => {
    matches.value = null;
});

async function validateHash() {
    if (!plain.value || !hashToCheck.value) {
        return;
    }
    if (!["argon2", "bcrypt",].includes(hasher.value)) {
        return;
    }
    const body = {
        plain: plain.value,
        hash: hashToCheck.value,
    };
    matches.value = Boolean(await $fetch(
        `/api/validate/${hasher.value}`,
        {
            method: "POST",
            body,
        }
    ));
}

</script>

<template>
    <div class="flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
        <div class="flex items-center w-full my-4">
            <span class="text-2xl font-medium mr-2">Check</span>
            <Icon
                v-if="matches"
                name="heroicons:check-circle"
                class="w-6 h-6 text-green-500"
            />
            <Icon
                v-else-if="matches === false"
                name="heroicons:x-circle"
                class="w-6 h-6 text-red-500"
            />
        </div>

        <div class="box-border py-2 px-3 rounded-lg bg-slate-800 flex items-center justify-between gap-2 w-full my-2">
            <input
                v-model="plain"
                class="text-base bg-transparent outline-none w-full"
                @keydown.enter="validateHash()"
            >
            <div
                title="Generate hash"
                class="flex items-center"
                @click="validateHash()"
            >
                <Icon
                    name="heroicons:arrow-right-circle"
                    class="w-5 h-5 cursor-pointer text-gray-400"
                />
            </div>
        </div>
        <div class="box-border py-2 px-3 rounded-lg bg-slate-800 flex items-center justify-between gap-2 w-full my-2">
            <input
                v-model="hashToCheck"
                class="text-base bg-transparent outline-none w-full"
                @keydown.enter="validateHash()"
            >
            <div
                title="Generate hash"
                class="flex items-center"
                @click="validateHash()"
            >
                <Icon
                    name="heroicons:arrow-right-circle"
                    class="w-5 h-5 cursor-pointer text-gray-400"
                />
            </div>
        </div>
    </div>
</template>
