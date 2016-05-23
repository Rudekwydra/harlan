class HarlanSpeech {
    constructor(input) {
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

        this.recognizer = new this.SpeechRecognition();
        this.recognizer.continuous = true;
        this.recognizer.onresult = this.onResult;

        this.recognizer.transcription = input;
    }

    onResult(ev) {
        for (let i = ev.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                this.transcription.val(event.results[i][0].transcript);
            }
        }
    }
}

export default HarlanSpeech;
