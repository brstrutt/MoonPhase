import { getMoonPhaseMask } from './moonPhaseMasks.js';
import { getMoonPhase } from './moonPhase.js';

/**
 * Function that updates the UI to match the provided phase of the moon
 * @param {String} phase - The current moon phase as defined in the MoonPhase "enum"
 */
function displayMoonPhase(phase) {
    const moon_text = document.getElementById("moon_phase");
    if (moon_text) moon_text.textContent = phase;

    const moon_image = document.querySelector('.moon .full');
    const half_moon_mask = getMoonPhaseMask(phase);
    if (moon_image) {
        moon_image.style.maskImage = `url('${half_moon_mask}')`;
        moon_image.style.opacity = 1;
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const currentPhase = getMoonPhase();
    displayMoonPhase(currentPhase);
});
