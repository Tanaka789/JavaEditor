async function initTeaVM() {
    const teavmModule = await Teavm.load({
        wasmBinaryFile: 'teavm/teavm.wasm',
        jsFile: 'teavm/teavm.js'
    });

    document.getElementById("run").onclick = async () => {
        const javaCode = window.getEditor().getValue();
        console.log("Java code:", javaCode);

        try {
            const compiledJS = await teavmModule.compileJava(javaCode, "Sketch"); 
            console.log("Compiled JS:", compiledJS);

            // Run the compiled JS
            eval(compiledJS);

        } catch (err) {
            console.error("Compilation error:", err);
            alert("Failed to compile Java code!");
        }
    };
}

initTeaVM();