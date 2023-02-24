list = [5, 2, 4, 6, 1, 3];

function clear() {
    var clear = document.getElementById("form").reset();
/*
    if(clear.value != ""){
        clear.valor = "";
    }                      */
}

listItens = (list) => {
    document.getElementById("valor").innerHTML = "";
    let text = "<ul>";
    list.map((valor) =>{
    const itens = document.getElementById("valor");
       itens.innerHTML += valor + "<ul>";
    }
)
}

adicionar = () => {
  const value = document.getElementById("adc").value;
    if(value != ""){
        list.push(value);
        listItens(list);
    }else{
        alert("adicione um valor");
    }
}

selection = () =>{
  const selection = document.getElementById("select").value
  switch(selection){
    case"1":
    shuffle()
    break;

    case"2":
    selection_sort()
    break;

    case"3":
    quick_sort();
    break;
    
    default:
      alert("insira uma opção");
      break;
  }
}



shuffle = () => {
    const newList = list.sort(() => Math.random() - 0.5);
    listItens(newList);
  };
  
 
  bubble_sort = () => {
    var size = lista.length;
    for (var x = 0; x < size; x++) {
      for (var y = 0; y < size - x - 1; y++) {
        if (list[y] > list[y + 1]) {
          var aux = list[y];
          list[y] = list[y + 1];
          list[y+ 1] = aux;
        }
      }
    }
    ListItens(list);
  };
  



/*  selection_sort = () => {
    const n = list.length

    for(i = 0; i < n ; i++){
      let min = i ;

      for(var j = i+1; j < n; j++);{
          if(list [j] < list [min]) {
              min=j;}
          }
          if (min != i) {
            let tmp = list[i]; 
            list[i] = list[min];
            list[min] = tmp; }} 

            return  ListItens(list);
          }; */

      
    
    selection_sort = () =>{

      var n = 0;

      for( i = 0; i < list.length; i++)
       if(list[i] < list[n]){
         var n = i
       }
       var aux = list[0];
	     list[0] = list[n];
	     list[n] = aux;

       
  
      listItens(list)
    }


    quick_sort = () => {
      listItens(recursive(list));
    
      function recursive(list) {
        if (list.length <= 1) {
          return list;
        }
    
        const pivot = list[list.length - 1];
        const left = [];
        const right = [];
    
        for (let x = 0; x < list.length - 1; x++) {
          list[x] < pivot ? left.push(list[x]) : right.push(list[x]);
        }
    
        return [...recursive(left), pivot, ...recursive(right)];
      }
    }; 

    
             
        


    
            
 
  
  
 