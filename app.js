import ProgressBar from "./ProgressBar/ProgressBar.js";
import OzonCheckBox from "./UI/OzonCheckBox/OzonCheckBox.js";
import OzonInput from './UI/OzonInput/OzonInput.js';

document.addEventListener("DOMContentLoaded", function () {

    const progressContainer = document.querySelector(".progress-block");
    
    //ProgressBar
    const progressBar = new ProgressBar(progressContainer);
    const progressBarHideFunc = progressBar.hideProgress.bind(progressBar);
    const progressBarAnimateFunc = progressBar.animateProgress.bind(progressBar);

    //Input
    const ozonInput = new OzonInput(progressBar.progressEndValue);
    ozonInput.change(progressBar.setProgress.bind(progressBar));

    //Checkbox Animate
    const ozonCheckBoxAnimate = new OzonCheckBox('checkbox__animate', false, progressBarAnimateFunc);
    ozonCheckBoxAnimate.change();

    //Checkbox Hide
    const ozonCheckBoxHide = new OzonCheckBox('checkbox__hide', false, progressBarHideFunc);
    ozonCheckBoxHide.change();
});
