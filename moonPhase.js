
const MoonPhase = Object.freeze({
    newMoon: "New Moon",
    waxingCrescent: "Waxing Crescent",
    waxingHalf: "Waxing Half",
    waxingGibbous: "Waxing Gibbous",
    fullMoon: "Full Moon",
    waningGibbous: "Waning Gibbous",
    waningHalf: "Waning Half",
    waningCrescent: "Waning Crescent",
});

function getMoonCycleProgress() {
    const moonCycleLengthMs = 29.5 * 24 * 60 * 60 * 1000;
    const knownNewMoonTime = new Date("2025-10-21T12:25:00.000+00:00");
    const millisecondsSinceKnownNewMoonTime = Date.now() - knownNewMoonTime;
    const millisecondsIntoCurrentCycle = millisecondsSinceKnownNewMoonTime % moonCycleLengthMs;
    return millisecondsIntoCurrentCycle / moonCycleLengthMs;
}

function getMoonPhaseFromCycleProgress(cycleProgress) {
    if (cycleProgress < 0.05) return MoonPhase.newMoon;
    if (cycleProgress < 0.20) return MoonPhase.waxingCrescent;
    if (cycleProgress < 0.30) return MoonPhase.waxingHalf;
    if (cycleProgress < 0.45) return MoonPhase.waxingGibbous;
    if (cycleProgress < 0.55) return MoonPhase.fullMoon;
    if (cycleProgress < 0.70) return MoonPhase.waningGibbous;
    if (cycleProgress < 0.80) return MoonPhase.waningHalf;
    if (cycleProgress < 0.95) return MoonPhase.waningCrescent;
    return MoonPhase.newMoon;
}

function getMoonPhase() {
    return getMoonPhaseFromCycleProgress(getMoonCycleProgress());
}

function displayMoonPhase(phase) {
    moon = document.getElementById("moon_phase");
    if (moon) moon.textContent = phase;
}

document.addEventListener("DOMContentLoaded", async function () {
    const currentPhase = getMoonPhase();
    displayMoonPhase(currentPhase);
});