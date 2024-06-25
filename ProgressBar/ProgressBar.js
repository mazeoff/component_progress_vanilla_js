export default class ProgressBar {
    constructor(container, inputId) {
        this.container = container;
        this.progressBar = container.querySelector(".progress-bar");
		this.progressValueInput = document.querySelector(`#${inputId}`);
        this.progress = 0;
        this.progressDeg = 0;
		this.progressEndValue = 0;
        this.progressEndValuePrev = 0;
		this.progressValueSpeed = 5;
        this.intervalId;
        this.render();
    }

    setProgress(progress) {
        progress = parseInt(progress);
        if ((progress >= 0 && progress <= 100) && progress !== this.progressEndValue) {
            this.progressEndValue = progress !== '' ? progress : 0;
            this.render();
        }
    }

    hideProgress(status){
        if(status)
            this.progressBar.style.opacity = '0';
        else
            this.progressBar.style.opacity = '1';
    }
    animateProgress(status){
        if(status){
            this.intervalId = setInterval(()=>{
                let randomProgress = Math.round(Math.random() * 101);
                this.setProgress(randomProgress);
                this.progressValueInput.value = randomProgress;
            },1000);

        }else{
            clearInterval(this.intervalId);
        }
    }

    render() {
        this.progressValueInput.value = this.progressEndValue;
        let timer = setInterval(() => {
            if(this.progressEndValue > this.progress){
                this.progress++;
            }else{
                this.progress--;
            }
            this.progressDeg = Math.round(this.progress * 3.6);

            this.progressBar.style.background = `conic-gradient(#005bff ${
                this.progressDeg
            }deg, #eff3f6 0deg)`;

            if(this.progressEndValue >= this.progressEndValuePrev){
                if (this.progress >= this.progressEndValue) {
                    clearInterval(timer);
                    this.progressEndValuePrev = this.progressEndValue;
                }
            }else{
                if (this.progress <= this.progressEndValue) {
                    clearInterval(timer);
                    this.progressEndValuePrev = this.progressEndValue;
                }
            }
        }, this.progressValueSpeed);
    }
}