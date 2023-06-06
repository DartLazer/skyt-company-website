<template>
  <div>
    <div class="lg:min-h-screen bg-color3 font-mono text-slate-300 ">
      <div class="lg:relative pl-4 lg:pl-10 pt-10 pb-10 lg:w-full">
        <div id="headtag" ref="headtag" class="opacity-0">
          <span class="text-8xl lg:text-9xl">About</span>
        </div>
        <div ref="nametag" class="opacity-0">
          <p class="pb-5 text-2xl lg:text-6xl">Rik Beernink</p>
        </div>
        <Menu/>
      </div>
      <!--      Grid section for columns-->
      <div class="lg:grid lg:grid-cols-3">
        <div class=" lg:col-span-1">
          <section ref="about_text" class="opacity-0">
            <div class="lg:text-xl min-[2100px]:text-2xl pl-4 pr-4 lg:pl-10 ">
              <p class=" mb-4">
                I'm a <span class="text-3xl text-color2">skilled developer</span> and <span
                  class="text-3xl text-color2">airline pilot</span>
                from the Netherlands. Coding has been a lifelong passion
                of mine, and over the years I've developed expertise in creating <span class="text-3xl text-color2">web apps,</span><span
                  class="text-3xl text-color2"> automation tools,</span><span class="text-3xl text-color2"> and custom scripting solutions.</span>
              </p>
              <p class="mb-4 pt-5">
                What <span class="text-color2 text-3xl">sets me apart</span> from most developers is my extensive
                experience as an airline pilot, which spans over
                10 years. In the aviation world, <span class="text-3xl text-color2">communication,</span><span
                  class="text-color2 text-3xl"> on-time performance</span><span class="text-3xl text-color2"> and cost-effectiveness</span>
                are crucial. I
                will bring these skills to the table to ensure that our project will have a <span
                  class="text-3xl text-color2"> turbulence free ride and a smooth landing.</span>
              </p>
            </div>
          </section>
        </div>
        <div class="col-span-1 justify-self-center text-center">
          <section ref="middle_text" class="opacity-0">
            <div class="text-c text-xl lg:pt-10 max-w-sm">
              <ul>
                <li><strong class="text-color1">Age:</strong> 29</li>
                <li><strong class="text-color1">Location:</strong> Leiden, NL</li>
              </ul>
              <br />
              <strong class="text-color1">Loves</strong>
              <ul>
                <li class="text-center">Rock climbing, (kite) surfing, flying, pizza, coding, coffee, travelling</li>
              </ul>
              <br />
              <strong class="text-color1">Codes in</strong>
              <ul>
                <li class="text-center">Python, Javascript, Django, Bootstrap, TailwindCSS, Docker, Wordpress, Bash, CSS, PWA.</li>
              </ul>
              <br />
              <strong class="text-color1">Professional Profiles</strong>
              <ul>
                <li><a class="text-color4 hover:text-color5" href="https://www.upwork.com/freelancers/~01e2054c387a9b486a" target="_blank">UpWork</a></li>
                <li><a class="text-color4 hover:text-color5" href="https://nl.linkedin.com/in/rik-beernink-24233440" target="_blank">LinkedIn</a></li>
              </ul>

            </div>
          </section>
        </div>
        <div ref="image-container" class="text-right lg:col-span-1 lg:justify-self-end  lg:pr-10">
          <section ref="image" class="opacity-0">
            <div class="bg-color1">
          <img class="object-cover p-2" src="~assets/rik.jpg">
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {fadeIn} from "~/utils/fadeFunctions";

const headtag = ref(null);
const nametag = ref(null);
const about_text = ref(null);
const middle_text = ref(null);
const image = ref(null);

onMounted(() => {
  fadeIn(0, headtag.value);
  fadeIn(0, nametag.value);
  fadeIn(1300, about_text.value);
  fadeIn(1500, middle_text.value);
  fadeIn(1800, image.value);
});
</script>


