<script lang="ts" setup>

const hasher = useLocalStorage("hasher", "bcrypt");

const options = [
    { name: "bcrypt", value: "bcrypt", },
    { name: "argon2", value: "argon2", },
];

</script>

<template>
    <div class="mb-8">
        <Listbox
            v-model="hasher"
            class="w-80"
        >
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-slate-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm md:text-base"
                >
                    <span class="block truncate font-medium">{{ options.find(option => option.value === hasher)?.name }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                        <Icon
                            name="heroicons:chevron-up-down-20-solid"
                            class="h-5 w-5 text-gray-400"
                        />
                    </span>
                </ListboxButton>

                <transition
                    leaveActiveClass="transition duration-100 ease-in"
                    leaveFromClass="opacity-100"
                    leaveToClass="opacity-0"
                >
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-slate-100"
                    >
                        <ListboxOption
                            v-for="option in options"
                            v-slot="{ active, selected }"
                            :key="option.value"
                            :value="option.value"
                            as="template"
                        >
                            <li
                                :class="[
                                    active ? 'bg-slate-400 bg-opacity-50' : 'text-slate-100',
                                    'relative select-none py-2 pl-10 pr-4 font-semibold cursor-pointer',
                                ]"
                            >
                                <span
                                    :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]"
                                >{{ option.name }}</span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-200"
                                >
                                    <Icon
                                        name="heroicons:check"
                                        class="h-5 w-5 font-bold"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>
