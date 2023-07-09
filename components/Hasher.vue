<script lang="ts" setup>

const hasher = useLocalStorage("hasher", "bcrypt");

const plain = ref("");
const hash = ref("");
const clipboard = useClipboard();

async function hashInput() {
    if (!plain.value) {
        return;
    }
    if (!["argon2", "bcrypt",].includes(hasher.value)) {
        return;
    }
    const body = {
        plain: plain.value,
    };
    hash.value = await $fetch(
        `/api/hash/${hasher.value}`,
        {
            method: "POST",
            body,
        }
    );
}

function copyHash() {
    clipboard.copy(hash.value);
}

</script>

<template>
    <div class="flex flex-col justify-center items-center md:w-[50vw] w-[90vw]">
        <div class="flex items-center w-full my-4">
            <span class="text-2xl font-medium">Encrypt</span>
        </div>
        <div class="box-border py-2 px-3 rounded-lg bg-slate-800 flex items-center justify-between gap-2 w-full my-2">
            <input
                v-model="plain"
                class="text-base bg-transparent outline-none w-full"
                placeholder="Enter text to encrypt"
                @keydown.enter="hashInput()"
            >
            <div
                title="Generate hash"
                class="flex items-center"
                @click="hashInput()"
            >
                <Icon
                    name="heroicons:arrow-right-circle"
                    class="w-5 h-5 cursor-pointer text-gray-400"
                />
            </div>
        </div>
        <div class="box-border py-2 px-3 rounded-lg bg-slate-800 my-2 w-full overflow-hidden h-10 flex items-center justify-between gap-2">
            <input
                v-model="hash"
                class="text-base bg-transparent outline-none w-full"
                readonly
                placeholder="Hash"
            >
            <div
                class="flex items-center bg-slate-800"
                title="Copy hash"
                @click="copyHash()"
            >
                <Icon
                    name="material-symbols:content-copy"
                    class="w-5 h-5 cursor-pointer text-gray-400"
                />
            </div>
        </div>
    </div>
</template>
