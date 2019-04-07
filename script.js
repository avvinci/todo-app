
    cbtn = document.querySelector('.button0') ; 
    btn = document.querySelector('.button1') ; 
    ta = document.querySelector('.ta1') ; 
    para = document.querySelector('div') ; 

    
////////////////////////////////////////////////////////////////////

    let i = 0,ci =0  ; 
    window.onload = function (){
    // localStorage.clear(); 
    for(it = 1 ;it < 100 ;it++){
        var myObject = localStorage.getItem('node' + it + '');
        // console.log(myObject );
        if(myObject === null) continue; 
        i = it ; 
        console.log('retreiving objests') ; 
        console.log(myObject );
        let node = document.createElement('div') ; 
        node.innerHTML = myObject; 
        para.appendChild(node);
     }

    function AddCategory(){
        let txt = ta.value; 
        if(txt === '') return;
        ci = ci + 1;
        let node = document.createElement('div'); 
        node.innerHTML = '' ; 
        console.log('Added Category' + txt ) ;

    }

    function AddBoard(){
        let txt = ta.value; 
        if(txt === '') return;
        i = i + 1;
        console.log('adding board' + txt) ; 
        let node = document.createElement('div') ; 
        node.innerHTML = 
        '<div   id="mydiv' + i + '" > <input type="checkbox" id="check' + i + '" name="check' +
        i + '"   onclick = "mychecked()"><label for="check' + 
        i + '" id = "lid'+ i +'"  >'+ txt +'</label> <button class = "button button2" onclick = "mydelete(' +
        i +  ')" id="bid' + i + '" > X </button>  </div>';
        // node.innerHTML = '<input type = "checkbox" id = "is1" onclick = "mychecked()"> < label for = "is1"' + txt + '</label>' ; 
        para.appendChild(node);
        localStorage.setItem('node' + i + '', (node.innerHTML));
        var myObject = (localStorage.getItem('node' + i + ''));
        console.log(myObject);
        ta.value = '';  
    }
    

    function mychecked(){
        console.log("checked");
    }

    function mydelete(i){
        console.log("deleted", i );

        let Lval = document.getElementById('lid' + i);
        let Bval = document.getElementById('bid' + i);
        let Cval = document.getElementById('check' + i);

        console.log(Lval) ;  
        localStorage.removeItem("node"+ i);
        document.getElementById("mydiv" + i ).removeChild(Lval);
        document.getElementById("mydiv" + i ).removeChild(Bval);
        document.getElementById("mydiv" + i ).removeChild(Cval);
        // val.innerHTML= '';

    }




       
    }
    
    
 
    
////////////////////////////////////////////////////////////////////


    console.log('A journey begins!!') 
    btn.addEventListener('click', AddBoard); 
    // cbtn.addEventListener('click', AddCategory); 
