document.getElementById("run").onclick = async () => {
    // 1️⃣ Get the code from your Monaco editor
    const code = window.getEditor().getValue();
    console.log("Java code:", code);

    try {
        // 2️⃣ Send the code to your Railway backend for compilation
        const response = await fetch("javaeditor-production.up.railway.app", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ javaCode: code })
        });

        // 3️⃣ Read the compiled JS from the response
        const compiledJS = await response.text();
        console.log("Compiled JS:", compiledJS);

        // 4️⃣ Run the compiled JS in the browser
        // Option 1: using eval (simplest, works for testing)
        eval(compiledJS);

        // Option 2: insert as a script tag (safer for bigger apps)
        // const script = document.createElement("script");
        // script.textContent = compiledJS;
        // document.body.appendChild(script);

    } catch (err) {
        console.error("Error compiling code:", err);
        alert("Compilation failed! See console for details.");
    }
};