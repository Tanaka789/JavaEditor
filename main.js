document.getElementById("run").onclick = async () => {
    const code = window.getEditor().getValue();
    console.log("Java code:", code);
    // send code to backend (TeaVM) and get compiled JS
    const response = await fetch("/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ javaCode: code })
    });

    const compiledJS = await response.text();

    console.log("Compiled JS:", compiledJS);
    // execute the compiled JS
};