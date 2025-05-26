
const languages = ['Breakfast','Lunch','Dinner'];
const colors = ['red','violet','skyblue'];

let gettxtani = document.querySelector('.textani');
let gettextlights = document.querySelectorAll('.text-lights')

let startbtn = document.querySelector('.start')

let display = document.querySelector('.display')



let signupbtn = document.querySelector('.signup')

let login = document.querySelector('.login')
let loginbtn = document.querySelector('.loginbtn')






// console.log(colors[languages.indexOf('Breakfast')]);


function* generator(){
    var idx = 0

    while(true){
        yield idx++;

        if(idx > 2){
            idx = 0
        }
    }
}

let testnumber = generator()
// console.log(testnumber.next().value);//next = object appear
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);
// console.log(testnumber.next().value);

function showwords(word){
    let x =0

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML= word
    // gettxtani.innerHTML+= word[0],//N

   let showinterval = setInterval(function(){
        if(x>=word.length){
            clearInterval(showinterval)

            deletewords()
        }else{
            gettxtani.innerHTML +=word[x]
            x++
        }
    },500)
}

function deletewords(){
    let getword = gettxtani.innerHTML;
    // console.log(getword);

    let getlastidx = getword.length-1;
    // console.log(getlastidx);

    let delinterval = setInterval(function(){


        if(getlastidx>=0){
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,getlastidx);

            getlastidx--
        }else{
            gettxtani.classList.remove(colors[languages.indexOf(getword)])
            showwords(languages[testnumber.next().value]);
            clearInterval(delinterval)
        }
    },500)
    
    
}

showwords(languages[testnumber.next().value]);

gettextlights.forEach(function(gettextlight){
    // console.log(gettextlight);
    

    let arrtexts = gettextlight.textContent.split('')

    // console.log(arrtexts);
    
    gettextlight.textContent = ''

    arrtexts.forEach(function(arrtext,idx){
        // console.log(arrtext);
        
        let newem =document.createElement('em')

        newem.textContent =arrtext;
        // console.log(newem);
        newem.style.animationDelay = `${idx * .1}s`
        gettextlight.append(newem)
        
    })
})

startbtn.onclick = function(){


   
    display.classList.remove('d-none')
    
    display.classList.add('d-block')
    
   
    startbtn.classList.add('d-none')
    
    let dataStrings = localStorage.getItem('data')

    if(dataStrings){
        display.classList.add('d-none')
        login.classList.add('d-block')
        login.classList.remove('d-none')
    }
    
    
}

signupbtn.onclick=function(){

let email = document.querySelector("#email").value
let city = document.querySelector("#city").value
let psw = document.querySelector("#psw").value
let conpsw = document.querySelector("#conpsw").value

let name = document.querySelector("#name").value
    console.log(name,email,city,psw,conpsw);

    let dataObj = {
        name: name,
        email: email,
        city: city,
        psw : psw,
        conpsw : conpsw
    }

    let dataString = localStorage.getItem('data');

    let dataArray;

    if(dataString == null){
        dataArray =[]
    }else{
        dataArray = JSON.parse(dataString)
    }
    
    dataArray.push(dataObj)

    let pushData = JSON.stringify(dataArray);
    // localStorage.setItem('data',pushData)

    if(name && email && city && psw && conpsw){
        localStorage.setItem('data',pushData)
        login.classList.add('d-block')
        login.classList.remove('d-none')
        display.classList.add('d-none')

      
    }else{
        alert('You can\'t create account')
    }



}

//  function(){
//     let dataStrings = localStorage.getItem('data')

    
//     let lemail = document.querySelector('#lemail').value
//     let lpsw = document.querySelector('#lpsw').value

//     if(dataStrings){
//         const userArray = JSON.parse(dataStrings)

//         console.log(userArray);

//         let p = document.querySelector('.p')
        

//         userArray.forEach(function(i,v){
//             let email = i.email
//             console.log(email);

//             if(lemail == email && lpsw == psw){
//                 window.location.href='item.html'

//             }else{
//                 p.textContent = 'Invalid email or psw'
//                 // p.style.backgroundColor = 'red'
//             }
            
            
//         })
//     }


    


    
    

//     // if(dataString)
// }

loginbtn.addEventListener('click',function(){
    let dataStrings = localStorage.getItem('data')
    

    
    let lemail = document.querySelector('#lemail').value
    let lpsw = document.querySelector('#lpsw').value

    console.log(lemail,lpsw);
    

    if(dataStrings){
        const userArray = JSON.parse(dataStrings)

        console.log(userArray);

        let p = document.querySelector('.p')
        

        userArray.forEach(function(i,v){
            let email = i.email

            let psw = i.conpsw
            console.log(email,psw);

            if(lemail == email && lpsw == psw){
                window.location.href='index.html'
                // alert('hwy')

            }else{
                p.textContent = 'Invalid email or psw'
                p.style.backgroundColor = 'red'
            }
            
            
        })
    }


}

   
       
       )