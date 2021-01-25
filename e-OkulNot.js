var yapistir = function(){

    var div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "30px";

    var buttonDoldur = document.createElement('button');
    buttonDoldur .innerHTML = 'Notları Doldur';
    buttonDoldur.type="button"

    var textfield = document.createElement("input");
    textfield.type = "text";
    textfield.value = "";
    textfield.style.width = "80%";

    
    div.appendChild(textfield)
    div.appendChild(buttonDoldur)
    var list = document.getElementById("Table29");
    list.insertBefore(div, list.childNodes[0]);

    buttonDoldur.onclick = function(){
        var tablo=document.getElementById("dgListem")
        var input = tablo.getElementsByClassName("frmInput2"); 
        var res = textfield.value.split(" ");
        for (i = 0; i < input.length; i++) {
            input[i].value=res[i]
                
    };
  };
}
yapistir()