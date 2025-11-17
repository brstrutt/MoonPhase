/**
 * Enum defining the different Phases of the moon. Of course Javascript doesn't have enums...so it's just a const object
 */
export const MoonPhase = Object.freeze({
    newMoon: "New Moon",
    waxingCrescent: "Waxing Crescent",
    waxingHalf: "Waxing Half",
    waxingGibbous: "Waxing Gibbous",
    fullMoon: "Full Moon",
    waningGibbous: "Waning Gibbous",
    waningHalf: "Waning Half",
    waningCrescent: "Waning Crescent",
});

/**
 * @returns {String} The current moon phase as defined in the MoonPhase "enum"
 */
export function getMoonPhase() {
    return getMoonPhaseFromCycleProgress(getMoonCycleProgress());
}

/**
 * @returns {number} The percentage completion of the current moon cycle (0% and 100% are both New Moon, 50% is Full Moon)
 */
function getMoonCycleProgress() {
    const moonCycleLengthMs = 29.5 * 24 * 60 * 60 * 1000;
    const knownNewMoonTime = new Date("2025-10-21T12:25:00.000+00:00");
    const millisecondsSinceKnownNewMoonTime = Date.now() - knownNewMoonTime;
    const millisecondsIntoCurrentCycle = millisecondsSinceKnownNewMoonTime % moonCycleLengthMs;
    return millisecondsIntoCurrentCycle / moonCycleLengthMs;
}

/**
 * 
 * @param {number} cycleProgress - Percentage completion of a moon cycle (0% and 100% are both New Moon, 50% is Full Moon)
 * @returns {String} The current moon phase as defined in the MoonPhase "enum"
 */
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

