$(document).ready(function(){
    count();

    $('.addToCart').click(function(){
        // alert('hwy')
        count();
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');

        console.log(id,name,price);

        let items = {
                id : id,
                name:name,
                price:price,
                qty:1
        }
        
        let itemString = localStorage.getItem('shops');
        let itemArr;

        if (itemString == null){
            itemArr = [];
        }else {
            itemArr =JSON.parse(itemString);
        }


        let status = false
        $.each(itemArr,function(i,v){
            if (id ==v.id){
                v.qty++;
                status = true
            }
        })

        if(status==false){
            itemArr.push(items);
        }
       

        let itemData = JSON.stringify(itemArr);
        localStorage.setItem('shops',itemData)

        count();
    })

    function count(){
        let itemString = localStorage.getItem("shops");

        if(itemString) {
            let itemArr = JSON.parse(itemString);
            let count = 0

            $.each(itemArr,function(i,v){
                if (itemArr != 0) {
                    count +=v.qty;
                    $('#item-count').text(count)
                }else{
                    $('#item-count').text(0)
                }
                
            })
        }
    }
    getData()
    function getData (){
        let itemString = localStorage.getItem('shops')

        if (itemString){
            let itemArray = JSON.parse(itemString)

            let data = '';
            let no =1;
            let total = 0;

            $.each(itemArray,function(i,v){
                let name = v.name
                let price = v.price
                let qty = v.qty

                

                console.log(qty*price);
                

                data += `<tr>
                             <td>${no}</td>
                             <td>${name}</td>
                             <td>${price}</td>

                             <td>
                               <button class="min"> - </button>
                                ${qty}
                               <button class="max"> + </button>
                             </td>

                             <td>${price * qty}</td>

                            
                        </tr>`

                        total += price * qty
            })

            data += `<tr>
                        <td colspan="4" algin="right">Total</td>

                        <td>${total}</td>
                    </tr>`

                    $('tbody').html(data)
        }
    }
})