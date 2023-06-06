<template>
    <div>
        <div id="second" class="min-h-screen lg: gap-4 lg:grid-flow-col bg-color3 font-mono text-slate-300 ">
            <div class="lg:relative  lg:row-span-2 pl-4 lg:pl-10 pt-10">
                <span class="opacity-0" ref="home_link">
                    <span class="hidden lg:block lg:text-left lg:absolute">
                        <NuxtLink to="/">
                            <div class="opacity-100" ref="about_me_link">
                                <p class="text-4xl font-bold text-color1 hover:text-color1highlight pb-5 hover:font-normal hover:text-6xl hover:animate-none opacity-100">
                                    Home</p></div>
                        </NuxtLink>
                    </span>
                </span>


                <div class="lg:right-10 lg:text-right  lg:pr-10 max-lg:p-2">
                    <div id="headtag" ref="headtag" class="opacity-100">
                        <span class="text-6xl lg:text-9xl">Flexible</span>
                    </div>
                    <div ref="second_line" class="opacity-0">
                        <p class="pb-5 text-xl lg:text-6xl">
                            Available on an hourly basis
                        </p>
                    </div>

                </div>
            </div>

            <div class="lg:grid lg:grid-cols-3">
                <div ref="left_block" class="opacity-0">
                    <div class="lg:relative col-span-1  max-lg:pl-3 pr-3 pt-10">
                        <div
                                class="lg:pl-10 xl:max-w-xl min-[2100px]:max-w-2xl bg-color4 max-lg:text-lg text-color3
              lg:text-2xl min-[2100px]:text-3xl  p-3 max-sm:p-2 lg:p-10 text-color6">

                            <p class="lg:p-2  ">
                                Available to businesses or individuals on a freelance basis.
                            </p>
                            <p class="lg:p-2 max-lg:pt-3">
                                A one-time project or a long lasting project, I am there for you.
                            </p>
                            <p class="lg:p-2 max-lg:pt-3">
                                <strong
                                        class="font-bold">I specialize in Python based scripting, (Progressive) Web
                                    Applications, Data
                                    manipulation and more.
                                </strong></p>
                            <p class="lg:p-2 max-lg:pt-3">Most important to me however is the <strong
                                    class="text-color6">customer experience</strong>: <i>a smooth and turbulence-free
                                ride.</i></p>
                            <p class="lg:p-2 max-lg:pt-3">That is what Sky-T strives to deliver.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:h-full lg:col-span-1  lg:flex lg:flex-col">
                    <div class="lg:flex-grow">
                    </div>
                    <span class="opacity-0" ref="about_link">
                        <div class="hidden lg:block lg:text-center">
                            <NuxtLink to="/about">
                                <div class="opacity-100" ref="about_me_link">
                                    <p class="text-4xl font-bold text-color1 hover:text-color1highlight pb-5 hover:font-normal hover:text-6xl hover:animate-none opacity-100 animate-pulseSlow">
                                        About me</p></div>
                            </NuxtLink>
                        </div>
                    </span>
                </div>

                <div class="lg:col-span-1 lg:text-right max-lg:p-2 lg:p-10 lg:text-lg min-[2100px]:text-3xl">
                    <div ref="right_block" class="opacity-0">
                        <p class="lg:hidden pl-3 pt-3 text-3xl text-color2">Testimonials</p>
                        <p class="p-3"><i>"It was a joy to collaborate with Rik: he anticipated our needs very well, is
                            a
                            <strong
                                    class="text-color5">superb communicator</strong> and
                            delivered <strong class="text-color5">well before the deadline</strong>. He dealt expertly
                            and
                            in a highly
                            customer-focused manner with
                            slight
                            ambiguities in our instructions and we <strong class="text-color5">felt in the best hands
                                throughout the
                                entire process</strong>. The
                            deliverables
                            (collecting and structuring large-scale data from API) were in perfect quality and well
                            documented. We
                            very
                            much hope to work with Rik again in the future." </i></p>
                        <hr/>
                        <p class="p-3"><strong>By Eliane B.</strong> Via <a class="text-color2" target="_blank"
                                                                            href="https://www.upwork.com/freelancers/~01e2054c387a9b486a">Upwork</a>:
                        </p>

                        <p class="p-3 pt-7">"Rik is a fantastic developer to work with. He's got <strong
                                class="text-color5">great
                            communication skills</strong>, quickly grasps complex
                            issues, and he produces high quality work. Additionally, he
                            guided us through the requirements on our side very clearly. <strong class="text-color5">I'm
                                a
                                happy repeat
                                customer</strong>."</p>
                        <p class="p-3">By Ilona M. Via <a class="text-color2" target="_blank"
                                                          href="https://www.upwork.com/freelancers/~01e2054c387a9b486a">Upwork</a>:
                        </p>
                    </div>
                </div>

                <div class="text-center lg:hidden">

                    <NuxtLink to="/about">
                        <div class="opacity-0" ref="about_me_link">
                            <p class="text-6xl font-bold text-color2 hover:text-color1highlight pb-5 hover:font-normal hover:text-6xl hover:animate-none opacity-100 animate-pulse">
                                About me</p></div>
                    </NuxtLink>

                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Menu from "~/components/Menu.vue";
import {fadeIn} from "~/utils/fadeFunctions";
import PageLayoutLanding from "~/components/PageLayoutLanding.vue";

const headtag = ref(null);
const second_line = ref(null);
const left_block = ref(null);
const right_block = ref(null);
const about_link = ref(null);
const about_me_link = ref(null);
const home_link = ref(null);

onMounted(() => {
  fadeIn(0, headtag.value);
  fadeIn(300, second_line.value);
  fadeIn(500, left_block.value);
  fadeIn(500, right_block.value);
  fadeIn(1000, about_link.value);
  fadeIn(1000, about_me_link.value);
  fadeIn(2000, home_link.value);
});
</script>