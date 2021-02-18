

function readFile(file) {
    const chars = {"æ":"ć","è":"č","ð":"đ","Æ":"Ć","È":"Č"}
    let temp = file;
    temp = temp.replace(/[æèðÆÈ]/g, m => chars[m])
    return temp;
}

function createDownload(filename, content){
    let newName = "Fixed-" + filename;
    let a = window.document.createElement("a")
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    a.setAttribute("download", newName)
    a.textContent = "Stisni za download"

    document.getElementById('download').appendChild(a)
}

function loadFile(input) {
    let file = input.files[0];

    let reader = new FileReader();
      
    reader.readAsText(file, 'windows-1252');
      
    reader.onload = function() {
        let newFile = readFile(reader.result);
        createDownload(file.name, newFile);
    };
      
    reader.onerror = function() {
        console.log(reader.error);
    };
      
}



document.getElementById('sub-upload').addEventListener('change', function() {
    loadFile(this)
});
