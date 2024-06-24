import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonCheckBox from "./UI/OzonCheckBox/OzonCheckBox.js";
import OzonInput from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {
    // Создание экземпляра блока Progress
    const progressContainer = document.querySelector(".progress-block");
    const progressBar = new ProgressBar(progressContainer);

    const ozonInput = new OzonInput(progressBar.progressEndValue);
    const ozonCheckBoxHide = new OzonCheckBox('checkbox__hide', true);
    const ozonCheckBoxAnimate = new OzonCheckBox('checkbox__animate', true);

    ozonCheckBoxHide.change(progressBar.hideProgress.bind(progressBar));
    ozonCheckBoxAnimate.change();
    

    // Установка процента выполнения
    progressBar.setProgress(ozonInput.input.value);

    ozonInput.onblur(progressBar.setProgress.bind(progressBar));
});
