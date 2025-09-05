// modal-produtos.js - Script isolado para modal de produtos
console.log("[MODAL] modal-produtos.js carregado");

// Dados dos produtos
const produtosData = {
  itaueira: [
    {
      titulo: "Família Itaueira",
      descricao: "Produtos premium da linha itaueira com qualidade superior.",
      imagem: "assets/img/produtos/am-rei.jpg",
      impactCharacters: [
        { icon: "bi-award", texto: "Linha premium" },
        { icon: "bi-star", texto: "Qualidade superior" },
        { icon: "bi-check-circle", texto: "Selecionado cuidadosamente" }
      ]
    }
  ],
  melao: [
    {
      titulo: "Melão Amarelo",
      descricao: "Doce, suculento e sempre pronto para consumo imediato.",
      imagem: "assets/img/produtos/amarelo.jpg",
      impactCharacters: [
        { icon: "bi-emoji-smile", texto: "Sabor doce" },
        { icon: "bi-brightness-high", texto: "Alta durabilidade" },
        { icon: "bi-box-seam", texto: "Marca premium" }
      ]
    }
  ],
  melancia: [
    {
      titulo: "Melancia Baby",
      descricao: "Prática e saborosa, perfeita para quem busca comodidade.",
      imagem: "assets/img/produtos/melancia.png",
      impactCharacters: [
        { icon: "bi-droplet", texto: "Altamente hidratante" },
        { icon: "bi-sun", texto: "Ideal para dias quentes" },
        { icon: "bi-house-heart", texto: "Presença garantida na mesa" }
      ]
    }
  ],
  pimentao: [
    {
      titulo: "Pimentão Amarelo",
      descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
      imagem: "assets/img/produtos/pamarelo.jpg",
      impactCharacters: [
        { icon: "bi-brightness-high", texto: "Cor vibrante" },
        { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
        { icon: "bi-box-seam", texto: "Categoria especial" }
      ]
    }
  ],
  mel: [
    {
      titulo: "Mel em Bisnaga 275g",
      descricao: "Prático e saboroso, ideal para o dia a dia.",
      imagem: "assets/img/produtos/melv.jpg",
      impactCharacters: [
        { icon: "bi-lightning", texto: "Praticidade no consumo" },
        { icon: "bi-heart", texto: "100% natural" },
        { icon: "bi-box-seam", texto: "Embalagem segura" }
      ]
    }
  ],
  uva: [
    {
      titulo: "Uva Premium",
      descricao: "Doce, fresca e ideal para consumo imediato.",
      imagem: "assets/img/produtos/uva1.jpg",
      impactCharacters: [
        { icon: "bi-apple", texto: "Boa firmeza" },
        { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
        { icon: "bi-basket", texto: "Mesa premium" }
      ]
    }
  ],
  abacaxi: [
    {
      titulo: "Abacaxi Pérola",
      descricao: "Fruta pequena, coroa curta, polpa amarelo-clara, doce e aromática.",
      imagem: "assets/img/produtos/abacaxi.jpg",
      impactCharacters: [
        { icon: "bi-star", texto: "Sabor doce" },
        { icon: "bi-cup-straw", texto: "Ótimo para sucos" },
        { icon: "bi-emoji-smile", texto: "Aroma marcante" }
      ]
    }
  ],
  manga: [
    {
      titulo: "Manga Keitt",
      descricao: "Pele verde mesmo madura, polpa firme, doce e sem fibras.",
      imagem: "assets/img/produtos/keitt.jpg",
      impactCharacters: [
        { icon: "bi-check-circle", texto: "Sem fibras" },
        { icon: "bi-egg-fried", texto: "Ideal para saladas" },
        { icon: "bi-heart", texto: "Doçura intensa" }
      ]
    }
  ],
  morango: [
    {
      titulo: "Morango San Andreas",
      descricao: "Variedade de alto rendimento, com sabor adocicado e excelente firmeza.",
      imagem: "assets/img/produtos/morango.jpg",
      impactCharacters: [
        { icon: "bi-graph-up", texto: "Alta produtividade" },
        { icon: "bi-truck", texto: "Bom transporte" },
        { icon: "bi-emoji-smile", texto: "Sabor doce" }
      ]
    }
  ]
};

// Funções do modal
function abrirModal(categoria, indice = 0) {
  console.log(`[MODAL] Abrindo modal: ${categoria}, índice: ${indice}`);
  
  const modal = document.getElementById('modalProduto');
  const titulo = document.getElementById('modalTitulo');
  const descricao = document.getElementById('modalDescricao');
  const imagem = document.getElementById('modalImagem');
  const impactContainer = document.querySelector('.impact-characters');

  const produto = produtosData[categoria]?.[indice];
  if (!produto) {
    console.warn(`[MODAL] Produto não encontrado: ${categoria}[${indice}]`);
    return;
  }

  // Preenche os dados
  titulo.textContent = produto.titulo;
  descricao.textContent = produto.descricao;
  imagem.src = produto.imagem;

  // Limpa e preenche impact characters
  impactContainer.innerHTML = '';
  produto.impactCharacters.forEach(char => {
    const div = document.createElement('div');
    div.className = 'character';
    div.innerHTML = `<i class="bi ${char.icon}"></i><span>${char.texto}</span>`;
    impactContainer.appendChild(div);
  });

  // Mostra o modal
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  const modal = document.getElementById('modalProduto');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function anteriorProduto() {
  console.log("[MODAL] Função anteriorProduto chamada");
  fecharModal();
}

function proximoProduto() {
  console.log("[MODAL] Função proximoProduto chamada");
  fecharModal();
}

// Garante que as funções estejam globalmente disponíveis
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.anteriorProduto = anteriorProduto;
window.proximoProduto = proximoProduto;

// Adiciona eventos ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log("[MODAL] DOM carregado, adicionando eventos");
  
  // Evento para fechar ao clicar fora
  const modal = document.getElementById('modalProduto');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        fecharModal();
      }
    });
  }
  
  // Evento para fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharModal();
    }
  });
});