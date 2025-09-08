// ✅ TEMA: salvar e aplicar ao carregar
const html = document.documentElement;
const toggleThemeBtn = document.getElementById('toggleTheme');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.setAttribute('data-theme', 'dark');
  toggleThemeBtn.classList.remove('bi-sun');
  toggleThemeBtn.classList.add('bi-moon');
} else {
  html.removeAttribute('data-theme');
  toggleThemeBtn.classList.remove('bi-moon');
  toggleThemeBtn.classList.add('bi-sun');
}

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener('click', function () {
    if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      toggleThemeBtn.classList.remove('bi-moon');
      toggleThemeBtn.classList.add('bi-sun');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      toggleThemeBtn.classList.remove('bi-sun');
      toggleThemeBtn.classList.add('bi-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
}

/* SCROLL */

// script.js
// Scrollspy com IntersectionObserver (recomendado)
// ===== Scrollspy (substituir o bloco antigo) =====
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  // seleciona apenas anchors do menu que linkam para hash (#)
  const navLinks = document.querySelectorAll('a.menu-link[href^="#"]');
  const header = document.getElementById('header');

  function onScroll() {
    // soma a altura do header fixo para compensar o offset
    const offset = (header ? header.offsetHeight : 100) + 10;
    const scrollY = window.scrollY + offset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        const targetLink = document.querySelector(`a.menu-link[href="#${sectionId}"]`);
        if (targetLink) targetLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  // chama uma vez no carregamento para marcar a seção inicial (útil se abrir com hash ou estiver no topo)
  onScroll();
});



// ✅ MENU MOBILE
const menuHamburger = document.getElementById('menuHamburger');
const menuMobile = document.getElementById('menuMobile');

if (menuHamburger && menuMobile) {
  menuHamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    menuMobile.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (
      menuMobile.classList.contains('active') &&
      !menuMobile.contains(e.target) &&
      e.target !== menuHamburger
    ) {
      menuMobile.classList.remove('active');
    }
  });

  menuMobile.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => menuMobile.classList.remove('active'));
  });
}

/* CONTATO */

/* NUMERO E MAIL */
  const form = document.getElementById("formContato");
  const emailInput = document.getElementById("email");
  const telInput = document.getElementById("telefone");
  const emailError = document.getElementById("emailError");
  const telError = document.getElementById("telError");

  // Regex genérico para e-mail válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regex para telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  const telRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

  // --- Validação do formulário ---
  form.addEventListener("submit", function (e) {
    let valid = true;

    // Validação e-mail
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add("error");
      emailError.style.display = "block";
      emailError.textContent = "Digite um e-mail válido (ex: usuario@dominio.com)";
      valid = false;
    } else {
      emailInput.classList.remove("error");
      emailError.style.display = "none";
    }

    // Validação telefone
    if (!telRegex.test(telInput.value.trim())) {
      telInput.classList.add("error");
      telError.style.display = "block";
      telError.textContent = "Digite um telefone válido (ex: (11) 91234-5678)";
      valid = false;
    } else {
      telInput.classList.remove("error");
      telError.style.display = "none";
    }

    if (!valid) {
      e.preventDefault(); // impede envio
    }
  });

  // --- Máscara dinâmica para telefone BR ---
  telInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

    if (value.length <= 10) {
      // Formato fixo (XX) XXXX-XXXX
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
      // Formato celular (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }

    e.target.value = value;
  });
// ====== Contato (Formspree) ======
(function () {
  const form = document.getElementById("formContato");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");
  const btn = document.getElementById("btnEnviar");
  const btnText = btn ? btn.querySelector(".btn-texto") : null;

  function showAlert(type, msg) {
    if (!alertBox) return;
    alertBox.className = "form-alert " + type; 
    alertBox.textContent = msg;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validação simples
    if (!form.checkValidity()) {
      showAlert("error", "Por favor, preencha os campos obrigatórios.");
      return;
    }

    // Estado de carregando
    if (btn) {
      btn.disabled = true;
      if (btnText) btnText.textContent = "Enviando...";
    }

    try {
      const endpoint = form.getAttribute("action"); // https://formspree.io/f/SEU_ID
      const data = Object.fromEntries(new FormData(form));

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        showAlert("success", "Mensagem enviada com sucesso! Em breve entraremos em contato.");
        form.reset();
      } else {
        showAlert("error", "Não foi possível enviar agora. Tente novamente em instantes.");
        console.error("Formspree error", await res.text());
      }
    } catch (err) {
      showAlert("error", "Falha de conexão. Verifique sua internet e tente novamente.");
      console.error(err);
    } finally {
      if (btn) {
        btn.disabled = false;
        if (btnText) btnText.textContent = "Enviar Mensagem";
      }
    }
  });
})();


/* BARRA DE PESQUISA PÁGINA DE PRODUTOS */
function filtrarProdutos() {
  let input = document.getElementById("pesquisaProduto").value.toLowerCase();
  let cards = document.querySelectorAll(".produto-card");
  let mensagem = document.getElementById("mensagemNaoEncontrado");
  let botao = document.getElementById("botaoContatoNaoEncontrado");

  let encontrou = false;

  cards.forEach(card => {
    let titulo = card.querySelector(".produto-titulo").innerText.toLowerCase();

    if (titulo.includes(input)) {
      card.style.display = "flex";
      encontrou = true;
    } else {
      card.style.display = "none";
    }
  });

  // Mostra mensagem e botão apenas se não encontrar nada E houver texto digitado
  if (!encontrou && input.trim() !== "") {
    mensagem.style.display = "flex";
    botao.style.display = "flex";
  } else {
    mensagem.style.display = "none";
    botao.style.display = "none";
  }
}

function atualizarProgresso() {
  const produtos = produtosData[categoriaAtual];
  const progressoTexto = document.getElementById('progressoTexto');
  const progressBar = document.querySelector('.modal-progress-bar');

  if (progressoTexto) {
    progressoTexto.textContent = `${indiceAtual + 1}/${produtos.length}`;
  }

  if (progressBar) {
    const percent = ((indiceAtual + 1) / produtos.length) * 100;
    progressBar.style.width = percent + '%';
  }
}