$(document).ready(function(){
    count()

    $('.btn').click(function(){
        let id = $(this).data('id');
        let kind = $(this).data('kind');
        let price = $(this).data('price');

        let dataObj = {
            id : id,
            kind : kind,
            price : price,
            qty : 1
        }

        let dataString = localStorage.getItem('shop')
        let dataArray;

        if (dataString==null){
            dataArray = []
        }else{
            dataArray = JSON.parse(dataString)
        }

        let status = false;
        $.each(dataArray,function(i,v){
            if(id == v.id){
               v.qty++;
                status = true
            }

           
        })
        if(status == false){
            dataArray.push(dataObj)
        }


        let dataPush = JSON.stringify(dataArray)
        localStorage.setItem('shop',dataPush)

        count()
    })


    function count(){
        let dataString = localStorage.getItem('shop');

        if(dataString){
            let dataArray=JSON.parse(dataString);
            let count =0;

            $.each(dataArray,function(i,v){
                if(dataArray!==0){
                    count+=v.qty;
                    $('.cart').text(count)
                }else{
                    $('.cart').text(0)
                }
            })
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