// // Write all your Javascript here!

let d= new Date();
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

$.ajax ({
  url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang`,
  success: function(data) {
    console.log(data);
    document.querySelector("#second-nav").innerHTML=
    `
    <a class="nav-link" href="#">${data.menuOptions[0].toUpperCase()}</a>
    <a class="nav-link" href="#">${data.menuOptions[1].toUpperCase()}</a>
    <a class="nav-link" href="#">${data.menuOptions[2].toUpperCase()}</a>
    <a class="nav-link" href="#">${data.menuOptions[3].toUpperCase()}</a>
    `
    document.querySelector(".card").innerHTML=
    `
    <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
    <div class="card-footer">
        <small class="card-date"><i class="fas fa-calendar-alt"></i> <span class="month">${months[d.getMonth()]}</span> <span class="date">${d.getDate()}</span>,
            <span class="year">${d.getFullYear()}</span>- <span class="hours">${d.getHours()}</span>h <span class="mins">${d.getMinutes()}</span>m <i class="fas fa-user"></i> by
             <span class="green">TechKaro Community</span></small>
    </div>
    <div class="card-body">
        <h5 class="card-title"><strong>${data.info.heading}</strong></h5>
        <p class="card-text">${data.info.description}</p>
    </div>
    `
    document.querySelector("#card").innerHTML=
    `
    <div class="card-body">
        <h5 id="heading" class="card-title">${data.sale.heading}</h5>
        <p class="card-text">${data.info.description}</p>
        </div>
    `
  }
})

function langCode(code) {
  $.ajax ({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${code}`,
    success: function(data) {
      console.log(data);
      document.querySelector("#second-nav").innerHTML=
      `
      <a class="nav-link" href="#">${data.menuOptions[0].toUpperCase()}</a>
      <a class="nav-link" href="#">${data.menuOptions[1].toUpperCase()}</a>
      <a class="nav-link" href="#">${data.menuOptions[2].toUpperCase()}</a>
      <a class="nav-link" href="#">${data.menuOptions[3].toUpperCase()}</a>
      `
      document.querySelector(".card").innerHTML=
      `
      <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
      <div class="card-footer">
          <small class="card-date"><i class="fas fa-calendar-alt"></i> <span class="month">${months[d.getMonth()]}</span> <span class="date">${d.getDate()}</span>,
              <span class="year">${d.getFullYear()}</span>- <span class="hours">${d.getHours()}</span>h <span class="mins">${d.getMinutes()}</span>m <i class="fas fa-user"></i> by
               <span class="green">TechKaro Community</span></small>
      </div>
      <div class="card-body">
          <h5 class="card-title"><strong>${data.info.heading}</strong></h5>
          <p class="card-text">${data.info.description}</p>
      </div>
      `
      document.querySelector("#card").innerHTML=
      `
      <div class="card-body">
          <h5 id="heading" class="card-title">${data.sale.heading}</h5>
          <p class="card-text">${data.info.description}</p>
          </div>
      `
    }
  })
}