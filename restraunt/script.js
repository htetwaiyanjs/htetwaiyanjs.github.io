document.addEventListener('DOMContentLoaded', function () {
  auto();
  clock();
  // weather(); // Uncomment this line to run weather fetch

  const container = document.querySelector('.weather-container');

  // Add to cart when clicking elements with data-id
  document.querySelectorAll('[data-id]').forEach(function (element) {
    element.addEventListener('click', function () {
      let id = this.dataset.id;
      let kind = this.dataset.kind;
      let price = this.dataset.price;

      let dataObj = {
        id: id,
        kind: kind,
        price: price,
        qty: 1
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      let existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push(dataObj);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      console.log("Saved to cart:", dataObj);

      count()
    });
  });
});

function auto() {
  let dataStrings = localStorage.getItem('data');
  if (dataStrings == null) {
    window.location.href = "signup.html";
  }
}

function clock() {
  let bf = document.querySelector(".bf");
  let lun = document.querySelector(".lun");
  let alc = document.querySelector(".alc");
  let first = document.querySelector(".first");
  let two = document.querySelector(".two");
  let third = document.querySelector(".third");

  let date = new Date();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hour = date.getHours();

  if (hour >= 18) {
    bf.classList.remove("d-block");
    alc.classList.remove('d-none');
    alc.classList.add('d-block');
    first.classList.remove("d-block");
    two.classList.remove("d-block");
    third.classList.remove('d-none');
    third.classList.add('d-block');
  } else if (hour <= 10) {
    alc.classList.remove("d-block");
    lun.classList.remove("d-block");
    bf.classList.remove("d-none");
    bf.classList.add('d-block');
    third.classList.remove("d-block");
    two.classList.remove("d-block");
    first.classList.remove('d-none');
    first.classList.add('d-block');
  } else if (hour <= 14) {
    alc.classList.remove("d-block");
    bf.classList.remove("d-block");
    lun.classList.remove("d-none");
    lun.classList.add('d-block');
    third.classList.remove("d-block");
    first.classList.remove("d-block");
    two.classList.remove('d-none');
    two.classList.add('d-block');
  }

  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  let periods = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;

  let stringclock = `${hour}:${minute}:${second} ${periods}`;
  let clo = document.querySelector('.clock');
  clo.textContent = stringclock;

  // Update every second
  setTimeout(clock, 1000);
}

async function weather() {
  try {
    let dataStrings = localStorage.getItem('data');
    let userArray = JSON.parse(dataStrings);

    const apikey = 'ff8c9b19e9f9319afb2add90ae2bcccc';
    const container = document.querySelector('.weather-container');
    container.innerHTML = '';

    for (const user of userArray) {
      const city = user.city;
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`);
      const data = await response.json();

      const location = data.location.name;
      const temp = data.current.temperature;
      const icon = data.current.weather_icons[0];
      const situation = data.current.weather_descriptions[0];

      // if (situation === 'Light rain shower') {
      //   alert('h5');
      // }

      const card =` 
        <div class="weather-card">
            <div class="sec-card">
                <h3>City: ${location}</h3>
                <h3 class="temp ms-auto">${temp}°C</h3>
            </div>
            <img src="${icon}" alt="Weather icon" class="w-icon">
        </div>`
      ;
      container.innerHTML += card;
    }

  } catch (error) {
    console.log(error);
  }

  count()
}

weather()


let logout = document.querySelector(".logout")


logout.addEventListener('click', function () {
  window.location.href = "signup.html";

})



function count() {
  let dataString = localStorage.getItem('cart');
  let cartElement = document.querySelector('.cart');

  if (dataString) {
      let dataArray = JSON.parse(dataString);
      let count = 0;

      dataArray.forEach(function(v) {
          if (v.qty != 0) {
              count += v.qty;
          }
      });

      cartElement.textContent = count;
  } else {
      cartElement.textContent = 0;
  }

  
}