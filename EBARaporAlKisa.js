javascript:var veriler="";function copyToClipboard(e){var n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n)}function raporal(){var e="",n=document.getElementsByClassName("row m-n")[1].getElementsByTagName("div");for(j=0;j<n.length-1;j++)e!=n[j].innerText&&n[j].innerText.length>0&&(veriler+=n[j].innerText+";"),e=n[j].innerText;veriler+="\n";document.getElementsByClassName("body-container");var r=document.getElementsByClassName("row m-n vc-grid-item");for(i=0;i<r.length;i++){var t=r[i].getElementsByTagName("div");for(j=1;j<t.length;j++)e!=t[j].innerText&&t[j].innerText.length>0&&(veriler+=t[j].innerText+";"),e=t[j].innerText;veriler+="\n"}console.log(veriler)}raporal(),copyToClipboard(veriler);
