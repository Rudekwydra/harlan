const   SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition,
        SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

class HarlanSpeech {
    constructor() {
        this.recognizer = new SpeechRecognition();
        this.recognizer.continuous = true;
        this.recognizer.onresult = this.onResult;
        this.recognizer.interimResults = true;
    }
    onResult(ev) {
        let content = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
            if (ev.results[i].isFinal) {
                content = ev.results[i][0].transcript;
            }
            else {
                content += ev.results[i][0].transcript;
            }
        }
        this.transcription.val(content);
    }
    setOutput(output) {
        this.recognizer.transcription = output;
    }
}

export let speech = new HarlanSpeech();
