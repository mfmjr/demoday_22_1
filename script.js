const body = document.querySelector("body");
const container = document.querySelector(".container");
let index = 0;

const getCard = async () => {
  for (let i = 0; i < 17; i++) {
    await pullStudents();
    index++;
  }
};

const showCard = (data) => {
  const studentsEl = document.createElement("div");

  studentsEl.innerHTML = `
    <div class="main-card">
          <div class="cover-photo"></div>
          <div class="photo">
            <img
              src="${data[index].img}"
              alt=""
            />
          </div>
  
          <div class="content">
            <h2 class="name">${data[index].name}</h2>
            <h3 class="fullstack">
              Full Stack Development<br />
              <a
                href="https://www.youracclaim.com/badges/e678fb12-49ea-4609-8d97-622d7416880d"
                class="certified"
                target="_blank"
                >Somos Tera</a
              >
            </h3>
            <h3 class="">
              <a href="mailto:abbassi.abdeladhim31791@gmail.com"
                >abbassi.abdeladhim31791@gmail.com</a
              >
            </h3>
          </div>
        </div>
        <div class="contact">
              <ul>
                  <a href="${data[index].linkedin}" target="_blank">
                      <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="${data[index].github}" target="_blank">
                      <i class="fa fa-github"></i>
                  </a>
                  <a href="https://codepen.io/Adhouma/" target="_blank">
                      <i class="fa fa-codepen"></i>
                  </a>
              </ul>
          </div>
      </div>
        `;

  container.appendChild(studentsEl);
};

const pullStudents = async () => {
  const url = "./api/api.json";
  const res = await fetch(url);
  const data = await res.json();
  showCard(data);
};

getCard();
