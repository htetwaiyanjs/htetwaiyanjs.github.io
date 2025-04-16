$(document).ready(function(){

    $('.addToCart').click(function(){
        
       let id = $(this).data('id');
       let name = $(this).data('name');
       let price = $(this).data('price');

       console.log(id,name,price);
       
       let itemsobj = {
             id:id,
             name:name,
             price:price
       }

       let itemsstring = localStorage.getItem('shop');
       let itemarr;

       if(itemsstring==null){
             itemarr=[];
       }else{
            itemarr=JSON.parse(itemsstring)
       }

       itemarr.push(itemsobj);

       let itemdata = JSON.stringify(itemarr)

       localStorage.setItem("shop",itemdata)

      $.each(itemarr,function(i,v){
        let data='';
        let id = v.id;
        let name = v.name;
        let price = v.price;

        console.log(id,name,price);
        
        data +=`
               <tr>
                  <td>${no}</td>
                             <td>${name}</td>
                             <td>${price}</td>
               </tr>`

               $('tbody').html(data)
      })
      


    })

 
})