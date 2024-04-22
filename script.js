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
    // Quando o texto estiver completamente digitado, adicione a barra piscante
    textElement.innerHTML += '<span id="blinking-cursor">|</span>';
    clearInterval(typingInterval);
    setInterval(blinkCursor, 500); // Inicia a função para fazer a barra piscar
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
    // Se o checkbox estiver marcado, define o caminho do arquivo relativo ao href do botão
    meuBotao.href = 'PowerProSitev2/PowerPro.rar.zip';
  } else {
    alert('Por favor, autorize clicando na caixa de seleção antes de prosseguir.');
  }
});


