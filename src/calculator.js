import React, { useState } from 'react';




const calContent = () => {
    const Calculator = () => {
        const [baseNicotine, setBaseNicotine] = useState('');
        const [targetNicotine, setTargetNicotine] = useState('');
        const [targetVolume, setTargetVolume] = useState('');
        const [flavourVolume, setFlavourVolume] = useState('');
        const [result, setResult] = useState('');

        const calculate = () => {
            function calculate() {
                // Get input values
                let baseNicotine = parseFloat(document.getElementById("base-nicotine").value);
                let targetNicotine = parseFloat(document.getElementById("target-nicotine").value);
                let targetVolume = parseFloat(document.getElementById("target-volume").value);
                let targetFlaouvourPercentage = parseFloat(document.getElementById("flavour-volume").value);

                // Calculate the required amount of base liquid
                let baseVolume = (targetNicotine * targetVolume) / baseNicotine;
                let diluentVolume = targetVolume - baseVolume;
                let flavour = targetFlaouvourPercentage / 100 * targetVolume
                let nicBase = (targetNicotine * targetVolume)
                let nicotineBaseAmount = (baseNicotine * targetNicotine)
                let base = targetVolume - nicotineBaseAmount - flavour;

                // (targetnicotine * number of ml) / strenght of boosterBase = 9
                // 30(target volume) * 6(strenght) = 180 mg // 20(base nicotine) / 180 = number of milimters 

                // Display the result
                let resultElement = document.getElementById("result");
                resultElement.innerHTML = "Add " + baseVolume.toFixed(2) + "ml of base nicotine<br>";
                resultElement.innerHTML += "Add " + diluentVolume.toFixed(2) + "ml of base (PG/VG)<br>";
                resultElement.innerHTML += "Add" + flavour.toFixed(2) + "ml of Flavour <br>";
                resultElement.innerHTML += "Add " + base.toFixed(2) + "ml of base (PG/VG)<br>";
            }
            const calculatedResult = `Result: ${baseNicotine}, ${targetNicotine}, ${targetVolume}, ${flavourVolume}`;
            setResult(calculatedResult);
        };
        return (
            <><div id="inputs">
                <div>
                    <label htmlFor="base-nicotine">Base Nicotine (mg/ml):</label>
                    <input
                        type="number"
                        id="base-nicotine"
                        step="0.1"
                        min="0"
                        value={baseNicotine}
                        onChange={(e) => setBaseNicotine(e.target.value)}
                        required />
                </div>

                <div>
                    <label htmlFor="target-nicotine">Target Nicotine (mg/ml):</label>
                    <input
                        type="number"
                        id="target-nicotine"
                        step="0.1"
                        min="0"
                        value={targetNicotine}
                        onChange={(e) => setTargetNicotine(e.target.value)}
                        required />
                </div>

                <div>
                    <label htmlFor="target-volume">Target Volume (ml):</label>
                    <input
                        type="number"
                        id="target-volume"
                        step="0.1"
                        min="0"
                        value={targetVolume}
                        onChange={(e) => setTargetVolume(e.target.value)}
                        required />
                </div>
                <div>
                    <label htmlFor="flavour-volume">Flavour Volume (percentage):</label>
                    <input
                        type="number"
                        id="flavour-volume"
                        step="0.1"
                        min="0"
                        value={flavourVolume}
                        onChange={(e) => setFlavourVolume(e.target.value)}
                        required />
                </div>
            </div><div>
                    <button onClick={calculate}>Calculate</button>
                </div><div id="result">{result}</div></>
        )
    }
};
export default calContent;
