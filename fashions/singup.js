$(document).ready(function(){
    count()
    

   
        
    
    $('.btn').click(function(){
        let name = $('.name').val();

        console.log(name);
        

        let email =$('.email').val();

        let psw = $('.psw').val();

        let gender = $('.gender').val()
       
       
        
     

        // if(name!==''&& psw!==''&& email!==''){
        //     localStorage.setItem('data',pushData)
            
        // }else{
        //     alert('nooooooooooooooooooooo')
            
        // }

        // console.log(name);

        
        let dataObj = {
            name : name,
            email : email,
            psw : psw,
           gender : gender
        }
        
        // alert('mg mg')

        let dataString = localStorage.getItem('data');

        let dataArray;

        if(dataString == null){
            dataArray = []
        }else{
            dataArray = JSON.parse(dataString)
        }

        dataArray.push(dataObj)

        console.log(dataArray);

        let pushData = JSON.stringify(dataArray);

        console.log(pushData);

     

        if(name && email && psw && gender){
            // $('.singupbox').hide()
            // $('.singinbox').show()
            localStorage.setItem('data',pushData)
            
      
        
            
            
            
            
        }else{
            alert("You can't account")
        }

        

        

        // console.log(data);


        
        

        // if(name==null){
        //     localStorage.removeItem('data')
        // }
       
     

       
        let secemail = $('.singemail')

        let secpsw = $('.singpsw')

        secemail.val(email)

        secpsw.val(psw)


console.log(secemail);




        let btnsec = $('.btnsec')

        let btn = $(this)

        // btnsec.removeClass('active')

        // btn.addClass('active')

    
        count()
        
        
    })
  function count(){
            
        let dataString = localStorage.getItem('data')

        if(dataString){
            $('.singupbox').hide()
            $('.btn').hide()

            $('.singinbox').show()
            $('.btnsec').addClass('active')
            $('.btn').removeClass('active')

        }else{
            $('.singinbox').hide()
        }
    }
  
 


    $('.btnsec').click(function(){

       let dataString = localStorage.getItem('data');

       let dataArray = JSON.parse(dataString);
       

       
       
       $.each(dataArray,function(i,v){
        let email = v.email;
       let psw = v.psw

       let signemail = $('.singemail').val()
       let signpsw = $('.singpsw').val()

       if(email == signemail && psw == signpsw){
        window.location.href='index.html'

        $.each(dataArray,function(i,v){
           
            if(v.gender=="female"){
                window.location.href='gfashion.html'
            }else{
                window.location.href = 'index.html'
            }
        })
        
        
        
       }else{
        console.log('false');
       }

       console.log(email);
       
       })
        
    })
})