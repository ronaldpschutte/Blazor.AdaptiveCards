window.codeBlock = {
    highlight: function (elementName) {
        var block = document.getElementById(elementName);
        console.log(block);
        try {
            console.log("refresh text");
            Prism.highlightAll();
            //Prism.highlightElement(block);
        } catch (err) {
            console.log("error");
            console.log(err);
        }
    }
};