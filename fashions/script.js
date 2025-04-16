$(document).ready(function(){

    
    if(localStorage.getItem('data')==null){
        window.location.href = 'singup.html'
    }
        count()


       
        
    $('.btn').click(function(){
        let id = $(this).data('id');
        let kind = $(this).data('kind');
        let price = $(this).data('price');

      
       
        

        console.log(id);

        let dataObj = {
             id : id,
             kind : kind,
             price : price,
             qty : 1
        }

        console.log(dataObj);
        
        let dataString = localStorage.getItem('shop')
        let dataArray;

        if(dataString==null){
            dataArray = []
        }else{
            dataArray = JSON.parse(dataString)
        }

        let status = false

        $.each(dataArray,function(i,v){
            if(id==v.id){
               v.qty++;
                status = true
            }
        })

        if(status==false){
            dataArray.push(dataObj)
        }

        let dataPush = JSON.stringify(dataArray);
        localStorage.setItem('shop',dataPush)

        console.log(dataPush);
        count()
        
    })

    function count(){
        let dataString = localStorage.getItem('shop')
        if(dataString){
            let dataArray = JSON.parse(dataString)
        let count = 0

        $.each(dataArray,function(i,v){
            if(dataArray != 0){
                count += v.qty;
                $('.cart').text(count)
            }else{
                $('.cart').text(0)
            }
        })
        }

        getData()
    }

    function getData(){
        let dataString = localStorage.getItem('shop')

        if(dataString){
            let dataArray = JSON.parse(dataString)
            let data = '';
            let no =1
            let total = 0

            $.each(dataArray,function(i,v){
                let kind = v.kind;
                let price = v.price;
                let qty = v.qty;

                console.log(qty*price);

                data+= `<tr>
                            <td>${no}</td>
                            <td>${kind}</td>
                            <td>${price}</td>
                              <td>
                               <button class="min"> - </button>
                                ${qty}
                               <button class="max"> + </button>
                             </td>
                             <td>${price*qty}</td>
                        </tr>`

                        total += price*qty
                    
            })

            data += `<tr>
            <td colspan="4" algin="right">Total</td>

            <td>${total}</td>
        </tr>`

        $('tbody').html(data)
            
            
        }
    }

    $(".logout").click(function(){
        localStorage.removeItem('data')

        let dataString = localStorage.getItem('data');

        if(dataString==null){
            window.location.href = 'singup.html'
        }
    })
})

   