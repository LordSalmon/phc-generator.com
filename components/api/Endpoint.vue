<script lang="ts" setup>

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Props = {
    url: string;
    method: HttpMethod;
    metadata?: Record<string, Record<string, string | string[]>>;
}

const props = defineProps<Props>();

</script>

<template>
    <div
        class="border-2 rounded box-border p-4 font-medium flex flex-col gap-y-4"
        :class="{
            'border-red-400 bg-red-200': props.method === 'DELETE',
            'border-yellow-400 bg-yellow-200': props.method === 'PUT',
            'border-green-400 bg-green-200 text-black': props.method === 'GET',
            'border-blue-400 bg-blue-200 text-black': props.method === 'POST',
        }"
    >
        <div class="flex items-center gap-x-2">
            <span>{{ props.method }}</span>
            <span>•</span>
            <span>{{ props.url }}</span>
        </div>
        <div v-if="props.metadata">
            <div
                v-for="[sectionKey, sectionValue] in Object.entries(props.metadata)"
                :key="sectionKey"
            >
                <span class="text-lg">{{ sectionKey }}</span>
                <div
                    v-for="[key, value] in Object.entries(sectionValue)"
                    :key="key"
                    class="flex items-center justify-between p-2 text-sm"
                >
                    <span>{{ key }}</span>
                    <span>{{ Array.isArray(value) ? value.join(" | ") : value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
