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
             <div class="team">Turma 22.1</div>
               Full Stack Development<br />
              <a
                href=""
                class="certified"
                target="_blank"
                >
               </a
              >
            </h3>
            
            <div class="about">${data[index].about}</div>  
            </div> 
              <div class="footer"> 
                <ul >
                    <li>AS</li>
                    <li>BA</li>
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
