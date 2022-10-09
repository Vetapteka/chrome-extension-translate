window.onload = function () {
    let documents = [document];
    let frames = document.querySelectorAll('iframe');
    frames.forEach(e => documents.push(e.contentDocument));
    documents.forEach(e => e.addEventListener("keydown", showTranslation));

    function showTranslation(event) {
        if (isKeyPressed(event)) {
            for (let doc of documents) {
                let selected = doc.getSelection();
                if (!selected.isCollapsed) {
                    googleTranslateText(selected.toString());
                    selected.removeAllRanges();
                    break;
                }
            }
        }
    }
}

function isKeyPressed(e) {
    return ((e.key === "й" || e.key === "q") && e.altKey);
}

function googleTranslateText(text) {
    $.ajax({
        url: "https://translate.googleapis.com/translate_a/single",
        type: "get",
        data: {format: "text", client: "gtx", sl: "en", tl: "ru", dt: "t", q: text},
        success: function (response) {
            let res = "";
            response[0].forEach(str => res += str[0]);
            alert(res);
        }
    });
}

