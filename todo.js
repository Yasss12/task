let button = document.querySelector("#ajout");

      let liste = document.querySelector("#todo");

      let input = document.querySelector("input");

      button.addEventListener("click", addTodo);
      input.addEventListener("onkeypress", addTodo);
      let counter=1;

      function addTodo() {
       if (input.value!="") 
        {
            //liste.innerHTML += `<li> ${input.value} </li>`;
            let id="l"+counter;
            let id2="cb"+counter;
            let id3="a"+ counter;
            liste.innerHTML +=`<li id=${id}> <input type='checkbox' id=${id2} 
             value='option1' onclick='valider(${counter})'><a id=${id3}>${input.value}</a><button onclick='supp(${counter})'>delete</button> </li>`
        input.value="";
        counter++;
    }
      else{alert("veuillez saisir une tache")}

      }
      function supp(num){

        document.getElementById("l"+ num).remove();
      }
      function valider(num){

        cb=document.getElementById("cb"+ num);
        if(cb.checked){
            
            document.getElementById("a"+ num).className="newclass"
        }
        else{
            document.getElementById("a"+ num).className="";
            //alert("not checked");
        }
      }