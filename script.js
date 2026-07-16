const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

document.getElementById("encryptBtn").addEventListener("click", async () => {

    if (inputText.value.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    const response = await fetch("/encrypt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: inputText.value
        })
    });

    const data = await response.json();

    if (data.success) {
        outputText.value = data.encrypted;
    } else {
        alert(data.message);
    }

});

document.getElementById("decryptBtn").addEventListener("click", async () => {

    if (inputText.value.trim() === "") {
        alert("Please enter encrypted text.");
        return;
    }

    const response = await fetch("/decrypt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: inputText.value
        })
    });

    const data = await response.json();

    if (data.success) {
        outputText.value = data.decrypted;
    } else {
        alert(data.message);
    }

});

document.getElementById("copyBtn").addEventListener("click", () => {

    if (outputText.value === "") {
        alert("Nothing to copy.");
        return;
    }

    navigator.clipboard.writeText(outputText.value);

    alert("Copied to clipboard!");
});

document.getElementById("clearBtn").addEventListener("click", () => {

    inputText.value = "";
    outputText.value = "";

});
