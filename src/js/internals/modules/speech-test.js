import HarlanSpeech from "./speech";

module.exports = (controller) => {

    controller.registerCall("speech::test", () => {
        let modal = controller.call("modal");
        modal.title("Harlan Speech Test");
        modal.subtitle("Teste de implementação da Web Speech API");
        modal.addParagraph("A Web Speech API foi lançada no final de 2012 e permite que os desenvolvedores forneçam a entrada de voz e recursos de saída de texto-para-voz em um navegador web.");

        let form = modal.createForm(),
            text = form.addInput("speech", "text"),
            actions = modal.createActions();

        actions.add("Falar").click((e) => {

            e.preventDefault();

            let speech = new HarlanSpeech(text);

            try {
                speech.recognizer.start();
            } catch (err) {
                console.log(err.message);
            }

        });
        actions.add("Sair").click((e) => {
            e.preventDefault();
            // if (speech) speech.recognizer.stop();
            modal.close();
        });
    });

    controller.registerTrigger("call::authentication::loggedin", "speech::test", function (args, callback) {
        callback();
        controller.call("speech::test");
    });

};
