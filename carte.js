function ajouter(id,a,b,c,){
    let x=document.getElementById(id)
  
    let mydiv=`<tr class="tr">
    <td><img height="100px" width="160px" src ="${document.getElementById(a).src}"></td>
    <td style="text-align:center">${document.getElementById(b).innerHTML}</td>
    <td style="text-align:center">${document.getElementById(c).innerHTML}</td>
    
    <td>
    <button  class="btn1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg></button>
    <input type="number" class="inp" placeholder='0' >
    <button class="btn2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
  </svg></button></td>
    
    <td style="text-align:center" type="number" class="prix">
     </td>
    <td  >
    <button class="btns" margin-right="100px" >
    <svg  width="4.5em" height="1.5em" viewBox="0 0 16 16" class="bi-bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    </button>
    </td>   
   `
    let z=document.createElement('tbody')
    z.setAttribute('class','new')
    z.innerHTML=mydiv
    x.append(z)

    let btn1=document.getElementsByClassName('btn1')
    for (let i=0;i<btn1.length;i++){
        btn1[i].addEventListener('click',function increment (){
            let inp=document.getElementsByClassName('inp')
            for (let j=0;j<inp.length;j++){
              if(i==j){
                let val=inp[j].value
                val++
                inp[i].value=val
                
                let prix=document.getElementsByClassName('prix')
                for (let k=0;k<prix.length;k++){
                    if(k==i){
                        let p=(document.getElementById(c).innerHTML)
                        
                        console.log(p)
                        prix[k].innerHTML=Number(prix[k].innerHTML)+Number(p)    
                        
                }  
                  }
                  
                }
                      
              } 
              
            })
           
        }
    
    let btn2=document.getElementsByClassName('btn2')
    for (let i=0;i<btn2.length;i++){
        btn2[i].addEventListener('click',function increment (){
            let inp=document.getElementsByClassName('inp')
            for (let j=0;j<inp.length;j++){
                if (i==j){
                    let val=inp[j].value
                    if(val>0){
                        val--
                    }
                    inp[i].value=val

                    let prix=document.getElementsByClassName('prix')
                    for (let k=0;k<prix.length;k++){
                        if(k==i){
                            let p=(document.getElementById(c).innerHTML)
                            
                            console.log(p)
                            prix[k].innerHTML=Number(prix[k].innerHTML)+Number(p)
                        } 
                      
                    }
                    
                    }
                   
                }
            })
        }

        let removeCartItemButtons = document.getElementsByClassName('btns')
        console.log(removeCartItemButtons.length)
        
        for (let i=0; i<removeCartItemButtons.length; i++){
            let button =removeCartItemButtons[i]
            console.log(button)
           button.addEventListener('click', function(event){
                console.log(event.target)
               let rmdv=document.getElementsByClassName('tr')
               console.log(rmdv)
               console.log(i)
               for (let j=0;j<rmdv.length;j++){
                   if (i===j){
                       rmdv[j].style.display="none"
                   }
               }
      })
           
            
    }
    } 
function heart(y){
// let f=document.getElementById(y)
// f.classList.toggle('red')
    let f=document.getElementById(y)
    console.log(f)
    if(f.style.color=="black"){
        f.style.color='red'
    }else {
        f.style.color="black"
    }
}
