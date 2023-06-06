<template>
    <div>
        <PageLayoutMain>
            <template v-slot:title>Contact</template>
            <template v-slot:subtitle>The start of a great new project</template>
            <template v-slot:content>
                <div ref="content" class="opacity-0">
                    <div class="lg:pl-10 pl-2 pt-5 text-lg lg:text-2xl">
                        <p class="text-color5">Ready to get started?</p>
                        <p>If you have any further questions or are looking to reach out please do so!</p>
                        <p class="pt-10">
                            You can contact me me via <a href="https://wa.me/31652500397" target="_blank"
                                                           class="text-color5 hover:text-color4">WhatsApp</a>,
                            <a class="text-color5 hover:text-color4"
                               href="https://nl.linkedin.com/in/rik-beernink-24233440"
                               target="_blank">LinkedIn</a>, <a class="text-color5 hover:text-color4"
                                                                href="mailto:sky-t@mailbox.org"
                                                                target="_blank">sky-t@mailbox.org</a> or via
                            <a class="text-color5 hover:text-color4"
                               href="https://www.upwork.com/freelancers/~01e2054c387a9b486a" target="_blank">UpWork</a>
                        </p>
                    </div>
                </div>

            </template>
        </PageLayoutMain>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {fadeIn} from "~/utils/fadeFunctions";

const content = ref(null);

onMounted(() => {
  fadeIn(1300, content.value);
});
</script>