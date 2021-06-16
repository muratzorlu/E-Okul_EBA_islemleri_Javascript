var veriler="";
raporal();
copyToClipboard(veriler)
//verileri hafızaya almak için
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function raporal()
{
var once="";
var l=document.getElementsByClassName('row m-n')
var label=l[1].getElementsByTagName('div')
for(j=0;j<label.length-1;j++) {
    
    if(once!=label[j].innerText && label[j].innerText.length>0)
            {          
                veriler+=label[j].innerText+";"

            }
once=label[j].innerText
    
}
veriler+="\n"
var el = document.getElementsByClassName('body-container')
var els=document.getElementsByClassName('row m-n vc-grid-item')
    for(i=0;i<els.length;i++) {
        var al=els[i].getElementsByTagName('div')
        for(j=1;j<al.length;j++) {
            if(once!=al[j].innerText && al[j].innerText.length>0)
            {          
veriler+=al[j].innerText+";"

            }
once=al[j].innerText
            
        }
        veriler+="\n"
        
    }
    console.log(veriler)
}
