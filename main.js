document.getElementById("run").onclick = async () => {
    const javaCode = window.getEditor().getValue();
    console.log("Java code:", javaCode);

    try {
        // Compile Java code to JS in-browser
        // `teavmCompile` is provided by TeaVM WASM runtime
        const compiledJS = await teavmCompile(javaCode, "Sketch"); 

        console.log("Compiled JS:", compiledJS);

        // Run the compiled JS
        const script = document.createElement("script");
        script.textContent = compiledJS;
        document.body.appendChild(script);

    } catch (err) {
        console.error("Compilation error:", err);
        alert("Failed to compile Java code!");
    }
};