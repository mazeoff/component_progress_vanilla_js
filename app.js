import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonCheckBox from "./UI/OzonCheckBox/OzonCheckBox.js";
import OzonInput from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {

    const progressContainer = document.querySelector(".progress-block");

    //ProgressBar
    const progressBar = new ProgressBar(progressContainer, 'ozoninput');
    const progressBarHideFunc = progressBar.hideProgress.bind(progressBar);
    const progressBarAnimateFunc = progressBar.animateProgress.bind(progressBar);

    //Input
    const ozonInput = new OzonInput('ozoninput');
    ozonInput.change(progressBar.setProgress.bind(progressBar));

    //Checkbox Animate
    const ozonCheckBoxAnimate = new OzonCheckBox('ozoncheckbox__animate', false, progressBarAnimateFunc);
    ozonCheckBoxAnimate.change();

    //Checkbox Hide
    const ozonCheckBoxHide = new OzonCheckBox('ozoncheckbox__hide', false, progressBarHideFunc);
    ozonCheckBoxHide.change();

    // progressBar.setProgress(100);
});
