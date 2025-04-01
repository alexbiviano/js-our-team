const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const createMembersCard = (members) => {
  const card = `<div class="col-12 col-md-6 col-lg-4">
                    <div class="team-card mt-5">
                        <div class="card d-flex flex-row ">
                            <img src="${members.img}" class>
                            <div>
                                <h3 class="mb-1 mt-3 ms-2" id="nome">${members.name}</h3>
                                <p class="mb-1 ms-2" id="ruolo">${members.role}</p>
                                <p class="mb-0 ms-2" id="email"><a href="#">${members.email}</a></p>
                            </div>
                        </div>
                    </div>
                 </div>`;

  return card
}

const addMember = (members) =>{
  const nome = nameField.value;
  const ruolo = roleField.value;
  const email = rolField.value;
  const immagine = roleField.value; 
}

const newMember = {
  nome, 
  ruol,
  email,
  immagine
}

members.push(newMember);

const renderTeam = () => { 

  let cards = "";

  for (let i = 0; i < teamMembers.length; i++) {
    cards += createMembersCard(teamMembers[i]); 
  }

  document.getElementById("team-members").innerHTML = cards


}

renderTeam()