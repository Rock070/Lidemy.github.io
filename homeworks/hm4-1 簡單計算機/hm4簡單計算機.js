let ans=null;
let calculator="";
let equal=true;
document.addEventListener('DOMContentLoaded',function(){

let selector=document.querySelectorAll('.btn')
let type=document.querySelector("#type")
for(i=0;i<selector.length;i++){
selector[i].addEventListener('click',function(e){
      
      if(!isNaN(parseInt(e.target.value,10)/2)){
        if(equal==false){
          type.value=null
          equal=true
        }
        type.value+=e.target.value
        
      }else{
         switch(e.target.value){
           
        case '+': 
            equal=true
            ans+=parseInt(type.value,10)
            console.log(ans)
            calculator='+'
            console.log(calculator)
            type.value=null
            break;
        case '-':
            if(ans==null || ans==0){
              ans+=parseInt(type.value,10)
            }else{
              ans-=parseInt(type.value,10)
            }
            equal=true
            calculator='-'
            console.log(calculator)
            type.value=null
            break;
        case '×':
            if(ans==null || ans==0){
              ans+=parseInt(type.value,10)
            }else{
              ans*=parseInt(type.value,10)
            }
            equal=true
            calculator='×'
            type.value=null
            break;
        case '÷':
            if(ans==null || ans==0){
              ans+=parseInt(type.value,10)
            }else{
              ans/=parseInt(type.value,10)
            }
            equal=true
            calculator='÷'
            type.value=null
            break;
        case '=': 
              if(calculator=="+" ){
                ans+=parseInt(type.value,10)
                console.log(ans)
              }else if(calculator=="-" ){
                ans-=parseInt(type.value,10)
                console.log(ans)
              }else if(calculator=="×" ){
                ans*=parseInt(type.value,10)
                console.log(ans)
              }else if(calculator=="÷" ){
                ans/=parseInt(type.value,10)
                console.log(ans)
              }
              type.value=ans
              ans=null
              calculator=null
              equal=false
              break;
             
        case 'AC':
            ans=null
            type.value=ans
            break;
          
      }
    
      }
      
})
}
})


// console.log(typeof(parseInt(''))/1)
// var selector=document.querySelectorAll(".rock")
// for(i=0;i<document.querySelectorAll(".rock").length;i++){
//   console.log(selector[i].value)
// }



// console.log(parseInt('1+2+3',10))
// console.log(parseInt('3+2',10))