
    cbtn = document.querySelector('.button0') ; 
    cta = document.querySelector('.ta0');
    cdiv = document.querySelector('#cdiv') ; 
    btn = document.querySelector('.button1') ; 
    ta = document.querySelector('.ta1') ; 
    para = document.querySelector('.mydiv') ; 
    allbtn = document.querySelectorAll('.btn1');

    
////////////////////////////////////////////////////////////////////

    let i = 0,j =0 ; 
    function AddCategory(){
        let txt = cta.value; 
        if(txt === '') return;
        console.log(cdiv);
        j= j + 1;
        let node = document.createElement('div') ; 

        node.innerHTML = '<div class = "mydiv" id = "bdiv' + j +'"> <textarea class = "ta1"  id = "bta' + j + '" placeholder="Add ' + txt + ' Todos"></textarea> <button class = "btn1" id = "bbutton' + j + '"> + </button>'
        cdiv.appendChild(node) ; 
        cta.value ='' ; 
        localStorage.setItem('cnode' + j + '', (node.innerHTML));
        var myObject = (localStorage.getItem('cnode' + j + ''));
        console.log('Added Category') ;

        console.log(myObject);
    }
    

    function AddBoard(){
        let txt = ta.value; 
        if(txt === '') return;
        i = i + 1;
        console.log('adding board') ; 
        console.log(txt) ; 
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

       
    }
    
    
 function AddNewBoard(){
     console.log('this');
 }
    
////////////////////////////////////////////////////////////////////


    console.log('A journey begins!!') 
    btn.addEventListener('click', AddBoard); 
    cbtn.addEventListener('click', AddCategory); 
    for(i =0 ; i< allbtn.length ; i++){
        allbtn[i].addEventListener('click',AddNewBoard);
    }
    // allbtn.forEach(element => {
    //     console.log('element');
    //     element.addEventListener('click',AddNewBoard)  ;
    // });
