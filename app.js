import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonInput from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {
    // Создание экземпляра блока Progress
    const progressContainer = document.querySelector(".progress-block");
    const progressBar = new ProgressBar(progressContainer);

    const ozonInput = new OzonInput(progressBar.progressEndValue);

    // Установка процента выполнения
    progressBar.setProgress(ozonInput.input.value);

    ozonInput.onblur(progressBar.setProgress.bind(progressBar));
});
