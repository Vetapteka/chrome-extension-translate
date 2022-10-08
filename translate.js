window.onload = function () {
    document.addEventListener("keydown", showTranslation);
}

function showTranslation(e) {
    let selectedText = document.getSelection();
    if (checkKeys(e) && !selectedText.isCollapsed) {
        googleTranslateText(selectedText.toString())
        console.log(selectedText)
    }
}

function checkKeys(e) {
    return ((e.key === "й" || e.key === "q") && e.altKey);
}

function googleTranslateText(text) {
    $.ajax({
        url: "https://translate.googleapis.com/translate_a/single",
        type: "get",
        data: {format: "text", client: "gtx", sl: "en", tl: "ru", dt: "t", q: text},
        success: function (response) {
            console.log(response)
            let res = "";
            response[0].forEach(str => res += str[0]);
            alert(res);
        }
    });
}






