import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonInput from './UI/OzonInput/OzonInput.js';
// import { setInputWidth } from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {
    // Создание экземпляра блока Progress
    const progressContainer = document.querySelector(".progress-block");
    const progressBar = new ProgressBar(progressContainer);

    const ozonInput = new OzonInput(progressBar.progressEndValue);

    // Установка процента выполнения
    progressBar.setProgress(ozonInput.input.value);

    ozonInput.input.onblur = function (e) {
        if(e.target.value == ''){
            ozonInput.input.value = 0;
        }
        progressBar.setProgress(e.target.value);
    };

    // console.log(input.validateInput());
    // const regex = /^\d+$/;
    // var input = document.querySelector(".input");
    // input.onkeyup = function (e) {
    //     let inputValue = e.target.value;
    //     if (!regex.test(inputValue) || inputValue > 100) {
    //         e.target.value = e.target.value.slice(0, -1);
    //     }
    // };

    // input.onblur = function (e) {
    //         progressBar.setProgress(e.target.value);
    // };

    document.querySelector(".input").addEventListener("input", (e) => {
        // console.log("Изменено:", e.target.innerHTML);
        // console.log("Изменено:", e.target);
    });
    // const debouncedInputHandle = input.debounce(input.validateInput, 250);
    // console.log(debouncedInputHandle);
    // progressBar.setProgress(debouncedInputHandle);

    // document.querySelector('[contenteditable]').addEventListener('input', e => {
    //     console.log('Изменено:', e.target.innerHTML);
    // });
    // const inputs = document.querySelectorAll('.input');
    // inputs.forEach(input => setInputWidth(input));
});
