require.config({
    paths: {
        vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs"
    }
});

let editorInstance = null; // declare globally

function initEditor() {
    require(["vs/editor/editor.main"], function () {
        editorInstance = monaco.editor.create(
            document.getElementById("editor"),
            {
                value: `public class Sketch {
    public static void setup() {
        // your code here
    }
}`,
                language: "java",
                theme: "vs-dark",
                automaticLayout: true
            }
        );
    });
}

// expose globally so other files can access the editor
window.initEditor = initEditor;
window.getEditor = () => editorInstance;