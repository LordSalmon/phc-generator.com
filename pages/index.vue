<script lang="ts" setup>

definePageMeta({
    layout: "default",
});

</script>

<template>
    <div class="min-w-[100vw] min-h-[100vh]">
        <div class="flex justify-center items-center h-60 flex-col">
            <span class="text-4xl font-bold text-slate-100">PHC Generator</span>
            <span class="my-4 text-slate-100 text-xl font-medium text-center">Generate and check hashes with bcrypt and argon2 using the
                <a
                    href="https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"
                    target="_blank"
                    class="underline text-slate-300 font-semibold"
                >PHC Format</a>
            </span>
        </div>
        <div class="flex justify-center items-center">
            <HasherSelect />
        </div>
        <div class="flex justify-center items-center">
            <Hasher />
        </div>
        <div class="flex justify-center items-center">
            <HashChecker />
        </div>
    </div>
</template>
