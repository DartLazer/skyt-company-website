// These functions fade in certain elements with custom animations
export async function fadeIn(delay, element) {
    await new Promise(r => setTimeout(r, delay));
    element.className = "animate-fadeIn opacity-100"
}

export async function fadeinBlock(delay, element) {
    await new Promise(r => setTimeout(r, delay));
    element.className = "animate-fadeIn relative bg-color4 p-5 min-[2100px]:pt-20 pt-5 opacity-100\n" +
        "        text:text-sm lg:text-2xl max-w-full lg:h-[80%] lg:max-w-8xl lg:h-full align-text-bottom"
}