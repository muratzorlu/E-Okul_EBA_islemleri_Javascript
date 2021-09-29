let tabloId = prompt("Tablo Id'sini yazınız ", "tabloID");
var table = document.getElementById(tabloId);
veriler=''
toplam=0
    for (var r = 0; r < table.rows.length; r++) {
        //e = table.getElementsByTagName("button");
        //console.log(e[r].id.split("_")[1].split("@")[0]);
        for (var c = 0;c<table.rows[r].cells.length; c++) {
            e=table.rows[r].cells[c].getElementsByTagName('img');
            if(c==0 && r>0) veriler+=r
            if(e.length>0) veriler+=e[0].src.split('=')[1]
            veriler+=table.rows[r].cells[c].innerText+';'
           
        }
        veriler+='\n'
        toplam+=1
        
    }
    console.log(veriler);
    copyToClipboard(veriler)
    alert(toplam-1+ 'tane öğrenci hafızaya alındı...')
    function copyToClipboard(text) {
        var dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
