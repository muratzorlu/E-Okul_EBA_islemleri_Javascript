var table = document.getElementById('tbPageDataTable');
veriler=""
    for (var r = 0; r < table.rows.length; r++) {
        //e = table.getElementsByTagName("button");
        //console.log(e[r].id.split("_")[1].split("@")[0]);
        for (var c = 0;c<table.rows[r].cells.length; c++) {
            e=table.rows[r].cells[c].getElementsByTagName("img");
            if(e.length>0) veriler+=e[0].src.split("=")[1]
            veriler+=table.rows[r].cells[c].innerText+";"
           
        }
        veriler+="\n"
        console.log(veriler);
    }
    copyToClipboard(veriler)
    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }