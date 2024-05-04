function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "css/imagens/icons/menu-abertoPreto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "css/imagens/icons/botao-fecharPreto.png";
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
};


const benefitsItems = document.querySelectorAll('.benefits-list li');

  benefitsItems.forEach(item => {
  const title = item.querySelector('.benefit-title');

  title.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});



const text = "Descubra o PowerPro: Desenvolvimento de Aplicativos Simplificado para Todos.";
const textElement = document.getElementById("home-title");


let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text[index];
    index++;
  } else {
    textElement.innerHTML += '<span id="blinking-cursor">|</span>';
    clearInterval(typingInterval);
    setInterval(blinkCursor, 500);
  }
}

function blinkCursor() {
  const cursor = document.getElementById("blinking-cursor");
  cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

const typingInterval = setInterval(type, 90);




const autorizarCheckbox = document.getElementById('autorizarCheckbox');
const meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', function() {
  if (autorizarCheckbox.checked) {
    meuBotao.href = 'PowerProSitev2/PowerPro.rar.zip';
  } else {
    alert('Por favor, autorize clicando na caixa de seleção antes de prosseguir.');
  }
});



const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


var msgCookies = document.getElementById('cookies-msg')

function aceito() {
  localStorage.lgpd = 'sim'
  msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim') {
  msgCookies.classList.remove('mostrar')
}else{
  msgCookies.classList.add('mostrar')
}
