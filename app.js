import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonCheckBox from "./UI/OzonCheckBox/OzonCheckBox.js";
import OzonInput from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {

    const progressContainer = document.querySelector(".progress-block");

    //ProgressBar
    const progressBar = new ProgressBar(progressContainer, 'ozoninput');
    const progressBarSetFunc = progressBar.setProgress.bind(progressBar);
    const progressBarHideFunc = progressBar.hideProgress.bind(progressBar);
    const progressBarAnimateFunc = progressBar.animateProgress.bind(progressBar);

    //Input
    const ozonInput = new OzonInput('ozoninput', progressBarSetFunc);
    ozonInput.onChange();

    //Checkbox Animate
    const ozonCheckBoxAnimate = new OzonCheckBox('ozoncheckbox__animate', false, progressBarAnimateFunc);
    ozonCheckBoxAnimate.onChange();

    //Checkbox Hide
    const ozonCheckBoxHide = new OzonCheckBox('ozoncheckbox__hide', false, progressBarHideFunc);
    ozonCheckBoxHide.onChange();

    //Устанавливаем значение
    progressBar.setProgress(75);
});
