import { getMoonPhaseMask } from './moonPhaseMasks.js';
import { getMoonCycleProgress, getMoonPhaseFromCycleProgress } from './moonPhase.js';

/**
 * Function that updates the UI to match the provided phase of the moon
 * @param {String} phase - The current moon phase as defined in the MoonPhase "enum"
 */
function displayMoonPhase(phase_progress) {
    const moon_text = document.getElementById("moon_phase");
    if (moon_text) {
        moon_text.textContent = `${getMoonPhaseFromCycleProgress(phase_progress)}: ${phase_progress.toPrecision(2)}`;
    }

    const moon_image = document.querySelector('.moon .full');
    const current_mask = getMoonPhaseMask(phase_progress);
    if (moon_image) {
        moon_image.style.maskImage = `url('${current_mask}')`;
        moon_image.style.opacity = 1;
    }
}

function initialiseMoonPhasePercentageSlider(initial_phase_percentage) {
    const slider = document.getElementById("moon_phase_percentage_slider");
    if(slider){
        slider.value = initial_phase_percentage * 100;
        slider.oninput = function() {
            displayMoonPhase(this.value/100.0);
        }
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const phase_progress = getMoonCycleProgress();
    displayMoonPhase(phase_progress);
    initialiseMoonPhasePercentageSlider(phase_progress);
});
