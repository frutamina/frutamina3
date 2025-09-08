// modal-produtos.js – Modal com TODOS os produtos e navegação via setas
console.log("[MODAL] modal-produtos.js carregado – Todos os produtos");

// ===== TODOS OS PRODUTOS =====
const produtosData = {
    itaueira: [
        {
            titulo: "Melão Amarelo Rei",
            descricao: "Doce, suculento e sempre pronto para consumo imediato.",
            imagem: "assets/img/produtos/am-rei.jpg",
            galeria: [
                "assets/img/produtos/am-rei.jpg",
                "assets/img/produtos/am-rei.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        },
        {
            titulo: "Melão Amarelo Cepi",
            descricao: "Variedade selecionada, com textura macia e frescor prolongado.",
            imagem: "assets/img/produtos/amarelo-cepi.jpg",
            galeria: [
                "assets/img/produtos/amarelo-cepi.jpg",
                "assets/img/produtos/amarelo-cepi.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor suave" },
                { icon: "bi-sun", texto: "Cultivo especial" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        },
        {
            "titulo": "Melão Sapo Rei",
            "descricao": "Clássico e refrescante, ideal para consumo diário.",
            "imagem": "assets/img/produtos/sapo-rei.jpg",
            "galeria": [
                "assets/img/produtos/sapo-rei.jpg",
                "assets/img/produtos/sapo-rei.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor refrescante" },
                { "icon": "bi-droplet", "texto": "Textura suculenta" },
                { "icon": "bi-award", "texto": "Linha premium" }
            ]
        },
        {
            "titulo": "Melão Sapo Cepi",
            "descricao": "Variedade diferenciada, com frescor marcante e textura firme.",
            "imagem": "assets/img/produtos/sapo-cepi.jpg",
            "galeria": [
                "assets/img/produtos/sapo-cepi.jpg",
                "assets/img/produtos/sapo-cepi.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor intenso" },
                { "icon": "bi-sun", "texto": "Cultivo selecionado" },
                { "icon": "bi-award", "texto": "Qualidade superior" }
            ]
        },
        {
            "titulo": "Melão Matisse Rei",
            "descricao": "Fruto sofisticado, com sabor adocicado e aroma marcante.",
            "imagem": "assets/img/produtos/matisse-rei.jpg",
            "galeria": [
                "assets/img/produtos/matisse-rei.jpg",
                "assets/img/produtos/matisse-rei.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor sofisticado" },
                { "icon": "bi-brightness-high", "texto": "Boa durabilidade" },
                { "icon": "bi-award", "texto": "Linha premium" }
            ]
        },
        {
            "titulo": "Melão Matisse Cepi",
            "descricao": "Exclusivo e delicado, perfeito para quem busca qualidade e frescor.",
            "imagem": "assets/img/produtos/matisse-cepi.jpg",
            "galeria": [
                "assets/img/produtos/matisse-cepi.jpg",
                "assets/img/produtos/matisse-cepi.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor marcante" },
                { "icon": "bi-sun", "texto": "Cultivo especial" },
                { "icon": "bi-award", "texto": "Qualidade premium" }
            ]
        },
        {
            "titulo": "Melão Galia Rei",
            "descricao": "Doce e aromático, com sabor que conquista no primeiro corte.",
            "imagem": "assets/img/produtos/galia-rei.jpg",
            "galeria": [
                "assets/img/produtos/galia-rei.jpg",
                "assets/img/produtos/galia-rei.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor doce" },
                { "icon": "bi-droplet", "texto": "Muito suculento" },
                { "icon": "bi-award", "texto": "Premium" }
            ]
        },
        {
            "titulo": "Melão Galia Cepi",
            "descricao": "Variedade de alta qualidade, com frescor e aroma únicos.",
            "imagem": "assets/img/produtos/galia-cepi.jpg",
            "galeria": [
                "assets/img/produtos/galia-cepi.jpg",
                "assets/img/produtos/galia-cepi.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor delicado" },
                { "icon": "bi-sun", "texto": "Cultivo controlado" },
                { "icon": "bi-award", "texto": "Qualidade superior" }
            ]
        },
        {
            "titulo": "Melão Cantaloupe Rei",
            "descricao": "Intensamente aromático, com sabor doce e textura macia.",
            "imagem": "assets/img/produtos/cantaloupe-rei.jpg",
            "galeria": [
                "assets/img/produtos/cantaloupe-rei.jpg",
                "assets/img/produtos/cantaloupe-rei.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor marcante" },
                { "icon": "bi-droplet", "texto": "Textura cremosa" },
                { "icon": "bi-award", "texto": "Linha premium" }
            ]
        },
        {
            "titulo": "Melão Cantaloupe Cepi",
            "descricao": "Com sabor intenso e aroma tropical, é perfeito para ocasiões especiais.",
            "imagem": "assets/img/produtos/cantaloupe-cepi.jpg",
            "galeria": [
                "assets/img/produtos/cantaloupe-cepi.jpg",
                "assets/img/produtos/cantaloupe-cepi.jpg"
            ],
            "impactCharacters": [
                { "icon": "bi-emoji-smile", "texto": "Sabor tropical" },
                { "icon": "bi-sun", "texto": "Cultivo especial" },
                { "icon": "bi-award", "texto": "Qualidade premium" }
            ]
        },

        {
            titulo: "Melancia Magali",
            descricao: "Refrescante, doce e perfeita para compartilhar em momentos especiais.",
            imagem: "assets/img/produtos/sem-semente.jpg",
            galeria: [
                "assets/img/produtos/sem-semente.jpg",
                "assets/img/produtos/sem-semente.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente suculenta" },
                { icon: "bi-emoji-laughing", texto: "Sabor marcante" },
                { icon: "bi-award", texto: "Seleção premium" }
            ]
        },
        {
            titulo: "Melancia Cepi",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/img/produtos/melancia-cepi.jpg",
            galeria: [
                "assets/img/produtos/melancia-cepi.jpg",
                "assets/img/produtos/melancia-cepi.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        },
        {
            titulo: "Melancia Cepi Branca",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/img/produtos/branca.jpg",
            galeria: [
                "assets/img/produtos/branca.jpg",
                "assets/img/produtos/branca.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        },

        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/img/produtos/pamarelo.jpg",
            galeria: [
                "assets/img/produtos/pamarelo.jpg",
                "assets/img/produtos/pamarelo.jpg"
            ],
            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { icon: "bi-box-seam", texto: "Categoria especial" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/img/produtos/pvermelho.jpg",
            galeria: [
                "assets/img/produtos/pvermelho.jpg",
                "assets/img/produtos/pvermelho.jpg"
            ],
            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { icon: "bi-award", texto: "Selecionado premium" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/img/produtos/plaranja.jpg",
            galeria: [
                "assets/img/produtos/plaranja.jpg",
                "assets/img/produtos/plaranja.jpg"
            ],
            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-check-circle", texto: "Alta qualidade" }
            ]
        },

        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/img/produtos/melb.jpg",
            galeria: [
                "assets/img/produtos/melb.jpg",
                "assets/img/produtos/melb.jpg"
            ],
            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { icon: "bi-box-seam", texto: "Embalagem segura" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/img/produtos/melv.jpg",
            galeria: [
                "assets/img/produtos/melv.jpg",
                "assets/img/produtos/melv.jpg"
            ],
            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { icon: "bi-recycle", texto: "Embalagem sustentável" }
            ]
        }
    ],
    melancia: [
        {
            titulo: "Melancia Magali",
            descricao: "Refrescante, doce e perfeita para compartilhar em momentos especiais.",
            imagem: "assets/img/produtos/sem-semente.jpg",
            galeria: [
                "assets/img/produtos/sem-semente.jpg",
                "assets/img/produtos/sem-semente.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente suculenta" },
                { icon: "bi-emoji-laughing", texto: "Sabor marcante" },
                { icon: "bi-award", texto: "Seleção premium" }
            ]
        },
        {
            titulo: "Melancia Cepi",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/img/produtos/melancia-cepi.jpg",
            galeria: [
                "assets/img/produtos/melancia-cepi.jpg",
                "assets/img/produtos/melancia-cepi.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        },
        {
            titulo: "Melancia Cepi Branca",
            descricao: "Com equilíbrio perfeito entre doçura e frescor.",
            imagem: "assets/img/produtos/branca.jpg",
            galeria: [
                "assets/img/produtos/branca.jpg",
                "assets/img/produtos/branca.jpg"
            ],
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { icon: "bi-award", texto: "Linha premium" }
            ]
        }
    ],
    melao: [
        {
            titulo: "Melão Amarelo",
            descricao: "Doce, suculento e sempre pronto para consumo imediato. Ideal para cafés da manhã e sobremesas leves.",
            imagem: "assets/img/produtos/amarelo.jpg",
            galeria: [
                "assets/img/produtos/amarelo.jpg",
                "assets/img/produtos/amarelo.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Marca premium" }
            ]
        },
        {
            titulo: "Melão Pele de Sapo",
            descricao: "Casca verde rajada e polpa branca adocicada. Versátil, ideal para consumo in natura ou em saladas de frutas.",
            imagem: "assets/img/produtos/sapo.jpg",
            galeria: [
                "assets/img/produtos/sapo.jpg",
                "assets/img/produtos/sapo.jpg"
            ],
            impactCharacters: [
                { icon: "bi-bag-check", texto: "Aceito no atacado" },
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-globe", texto: "Popular internacional" }
            ]
        },
        {
            titulo: "Melão Matisse",
            descricao: "De aparência marcante e polpa doce, é valorizado pela qualidade premium e sabor único.",
            imagem: "assets/img/produtos/matisse.jpg",
            galeria: [
                "assets/img/produtos/matisse.jpg",
                "assets/img/produtos/matisse.jpg"
            ],
            impactCharacters: [
                { icon: "bi-patch-check", texto: "Selo premium" },
                { icon: "bi-gem", texto: "Sabor único" },
                { icon: "bi-trophy", texto: "Alta valorização" }
            ]
        },
        {
            titulo: "Melão Gália",
            descricao: "Casca amarelada com polpa esverdeada clara, textura macia e sabor suave. Excelente para dias quentes.",
            imagem: "assets/img/produtos/galia.jpg",
            galeria: [
                "assets/img/produtos/galia.jpg",
                "assets/img/produtos/galia.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-sunglasses", texto: "Refrescante" },
                { icon: "bi-droplet-half", texto: "Polpa leve" },
                { icon: "bi-bag-heart", texto: "Aceito no varejo" }
            ]
        },
        {
            titulo: "Melão Cantaloupe",
            descricao: "Um dos mais aromáticos. Casca rendada e polpa firme e doce. Ideal para cafés da manhã.",
            imagem: "assets/img/produtos/charentais.jpg",
            galeria: [
                "assets/img/produtos/charentais.jpg",
                "assets/img/produtos/charentais.jpg"
            ],
            impactCharacters: [
                { icon: "bi-flower3", texto: "Aroma marcante" },
                { icon: "bi-egg-fried", texto: "Pratos sofisticados" },
                { icon: "bi-cup-hot", texto: "Café da manhã" }
            ]
        },
        {
            titulo: "Melão Orange",
            descricao: "Polpa alaranjada, doce e levemente aromática. Rico em vitaminas, perfeito para sucos tropicais.",
            imagem: "assets/img/produtos/orange.jpg",
            galeria: [
                "assets/img/produtos/orange.jpg",
                "assets/img/produtos/orange.jpg"
            ],
            impactCharacters: [
                { icon: "bi-star", texto: "Cor vibrante" },
                { icon: "bi-cup-straw", texto: "Ideal para sucos" },
                { icon: "bi-heart", texto: "Rico em nutrientes" }
            ]
        }
    ],
    pimentao: [
        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/img/produtos/pamarelo.jpg",
            galeria: [
                "assets/img/produtos/pamarelo.jpg",
                "assets/img/produtos/pamarelo.jpg"
            ],
            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { icon: "bi-box-seam", texto: "Categoria especial" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/img/produtos/pvermelho.jpg",
            galeria: [
                "assets/img/produtos/pvermelho.jpg",
                "assets/img/produtos/pvermelho.jpg"
            ],
            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { icon: "bi-award", texto: "Selecionado premium" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/img/produtos/plaranja.jpg",
            galeria: [
                "assets/img/produtos/plaranja.jpg",
                "assets/img/produtos/plaranja.jpg"
            ],
            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-check-circle", texto: "Alta qualidade" }
            ]
        }
    ],
    mel: [
        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/img/produtos/melb.jpg",
            galeria: [
                "assets/img/produtos/melb.jpg",
                "assets/img/produtos/melb.jpg"
            ],
            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { icon: "bi-box-seam", texto: "Embalagem segura" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/img/produtos/melv.jpg",
            galeria: [
                "assets/img/produtos/melv.jpg",
                "assets/img/produtos/melv.jpg"
            ],
            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { icon: "bi-recycle", texto: "Embalagem sustentável" }
            ]
        }
    ],
    uva: [
        {
            titulo: "Uva Y",
            descricao: "Mesa clássica, baga grande e firme, sabor doce e levemente ácido. Ideal para consumo in natura.",
            imagem: "assets/img/produtos/uva1.jpg",
            galeria: [
                "assets/img/produtos/uva1.jpg",
                "assets/img/produtos/uva1.jpg"
            ],
            impactCharacters: [
                { icon: "bi-apple", texto: "Boa firmeza" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
        {
            titulo: "Uva X",
            descricao: "Sem sementes, baga verde-clara, doçura intensa. Perfeita para sucos e decoração.",
            imagem: "assets/img/produtos/uva2.jpg",
            galeria: [
                "assets/img/produtos/uva2.jpg",
                "assets/img/produtos/uva2.jpg"
            ],
            impactCharacters: [
                { icon: "bi-x-circle", texto: "Sem sementes" },
                { icon: "bi-cup-straw", texto: "Ótima para sucos" },
                { icon: "bi-palette", texto: "Visual limpo" }
            ]
        }
    ],
    abacaxi: [
        {
            titulo: "Abacaxi Pérola",
            descricao: "Fruta pequena, coroa curta, polpa amarelo-clara, doce e aromática. Ideal para consumo in natura e sucos.",
            imagem: "assets/img/produtos/abacaxi.jpg",
            galeria: [
                "assets/img/produtos/abacaxi.jpg",
                "assets/img/produtos/abacaxi.jpg"
            ],
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
            descricao: "Pele verde mesmo madura, polpa firme, doce e sem fibras. Perfeita para saladas e sobremesas.",
            imagem: "assets/img/produtos/keitt.jpg",
            galeria: [
                "assets/img/produtos/keitt.jpg",
                "assets/img/produtos/keitt.jpg"
            ],
            impactCharacters: [
                { icon: "bi-check-circle", texto: "Sem fibras" },
                { icon: "bi-egg-fried", texto: "Ideal para saladas" },
                { icon: "bi-heart", texto: "Doçura intensa" }
            ]
        },
        {
            titulo: "Manga Palmer",
            descricao: "Pele avermelhada, polpa suculenta e sabor equilibrado. Excelente para mesa e polpas.",
            imagem: "assets/img/produtos/palmer.jpg",
            galeria: [
                "assets/img/produtos/palmer.jpg",
                "assets/img/produtos/palmer.jpg"
            ],
            impactCharacters: [
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Sucesso no varejo" }
            ]
        }
    ],
    morango: [
        {
            titulo: "Morango San Andreas",
            descricao: "Variedade de alto rendimento, com sabor adocicado e excelente firmeza. Ideal para transporte e consumo in natura.",
            imagem: "assets/img/produtos/morango.jpg",
            galeria: [
                "assets/img/produtos/morango.jpg",
                "assets/img/produtos/morango.jpg"
            ],
            impactCharacters: [
                { icon: "bi-graph-up", texto: "Alta produtividade" },
                { icon: "bi-truck", texto: "Bom transporte" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        },
        {
            titulo: "Morango Albion",
            descricao: "Fruto de coloração intensa, formato alongado e aroma marcante. Muito utilizado em confeitaria e sobremesas.",
            imagem: "assets/img/produtos/morango-albion.jpg",
            galeria: [
                "assets/img/produtos/morango-albion.jpg",
                "assets/img/produtos/morango-albion.jpg"
            ],
            impactCharacters: [
                { icon: "bi-brush", texto: "Cor intensa" },
                { icon: "bi-cake2", texto: "Perfeito para doces" },
                { icon: "bi-flower1", texto: "Aroma marcante" }
            ]
        },
        {
            titulo: "Morango Camino Real",
            descricao: "Morangos firmes, grandes e de coloração vibrante. Ótima resistência no transporte e conservação.",
            imagem: "assets/img/produtos/morango-caminoreal.jpg",
            galeria: [
                "assets/img/produtos/morango-caminoreal.jpg",
                "assets/img/produtos/morango-caminoreal.jpg"
            ],
            impactCharacters: [
                { icon: "bi-bounding-box", texto: "Frutos grandes" },
                { icon: "bi-hourglass-split", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Resistente ao transporte" }
            ]
        },
        {
            titulo: "Morango Monterey",
            descricao: "Variedade muito doce e produtiva, perfeita para consumo direto e ideal para climas mais quentes.",
            imagem: "assets/img/produtos/morango-monterey.jpg",
            galeria: [
                "assets/img/produtos/morango-monterey.jpg",
                "assets/img/produtos/morango-monterey.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-heart-eyes", texto: "Extremamente doce" },
                { icon: "bi-sun", texto: "Adaptado a calor" },
                { icon: "bi-bar-chart", texto: "Alta produtividade" }
            ]
        },

    ],
    caqui: [
        {
            titulo: "Caqui Fuyu",
            descricao: "Fruta firme, doce e de coloração laranja intensa. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/img/produtos/caqui.jpg",
            galeria: [
                "assets/img/produtos/caqui1.jpg",
                "assets/img/produtos/caqui1.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-apple", texto: "Fruta firme" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    pera: [
        {
            titulo: "Pera X",
            descricao: "Fruta suculenta, de polpa macia e sabor doce. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/img/produtos/pera.jpg",
            galeria: [
                "assets/img/produtos/pera1.jpg",
                "assets/img/produtos/pera1.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e delicado" },
                { icon: "bi-apple", texto: "Textura macia" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    laranja: [
        {
            titulo: "Laranja Kinkan",
            descricao: "Fruta pequena, doce e levemente ácida, com casca fina e comestível. Perfeita para consumo in natura e decoração de pratos.",
            imagem: "assets/img/produtos/kinkan.jpg",
            galeria: [
                "assets/img/produtos/laranja1.jpg",
                "assets/img/produtos/laranja1.jpg"
            ],
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-apple", texto: "Casca fina e comestível" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    nespera: [
  {
    titulo: "Nêspera Tradicional",
    descricao: "Fruta de polpa macia, doce e levemente ácida. Ideal para consumo in natura, sobremesas e compotas.",
    imagem: "assets/img/produtos/nespera1.jpg",
    galeria: [
      "assets/img/produtos/nespera1.jpg",
      "assets/img/produtos/nespera1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
      { icon: "bi-apple", texto: "Textura macia" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  },
],
maracuja: [
  {
    titulo: "Maracujá Granadilha",
    descricao: "Fruta de polpa aromática, sabor equilibrado entre doce e ácido. Ideal para sucos, sobremesas e uso culinário em geral.",
    imagem: "assets/img/produtos/maracuja1.jpg",
    galeria: [
      "assets/img/produtos/maracuja1.jpg",
      "assets/img/produtos/maracuja1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Polpa aromática" },
      { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
mirtilo: [
  {
    titulo: "Mirtilo Clássico",
    descricao: "Fruta pequena, sabor doce e levemente ácido, com coloração azul intensa. Ideal para consumo in natura, saladas e sobremesas.",
    imagem: "assets/img/produtos/mirtilo.jpg",
    galeria: [
      "assets/img/produtos/mirtilo1.jpg",
      "assets/img/produtos/mirtilo1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Doce e suculento" },
      { icon: "bi-palette", texto: "Cor intensa" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
pitaya: [
  {
    titulo: "Pitaya Vermelha",
    descricao: "Fruta exótica de polpa suculenta e sabor levemente adocicado. Ideal para consumo in natura, sucos e sobremesas decorativas.",
    imagem: "assets/img/produtos/pitaya.jpg",
    galeria: [
      "assets/img/produtos/pitaya1.jpg",
      "assets/img/produtos/pitaya1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
      { icon: "bi-palette", texto: "Cor vibrante" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
cupuacu: [
  {
    titulo: "Cupuaçu Tradicional",
    descricao: "Fruta de polpa cremosa, sabor adocicado e aroma marcante. Ideal para sucos, sobremesas e produtos gourmet.",
    imagem: "assets/img/produtos/cupuacu.jpg",
    galeria: [
      "assets/img/produtos/cupuacu.jpg",
      "assets/img/produtos/cupuaci1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Polpa cremosa" },
      { icon: "bi-cup-straw", texto: "Ótimo para sucos e sobremesas" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
graviola: [
  {
    titulo: "Graviola Tradicional",
    descricao: "Fruta de polpa macia e suculenta, sabor doce com toque ácido. Ideal para sucos, sobremesas e consumo in natura.",
    imagem: "assets/img/produtos/graviola.jpg",
    galeria: [
      "assets/img/produtos/graviola.jpg",
      "assets/img/produtos/graviola1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
      { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
cacau: [
  {
    titulo: "Cacau Tradicional",
    descricao: "Fruta de polpa macia e sementes ricas em sabor. Ideal para produção de chocolate, sucos e doces artesanais.",
    imagem: "assets/img/produtos/cacau.jpg",
    galeria: [
      "assets/img/produtos/cacau1.jpg",
      "assets/img/produtos/cacau1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Polpa saborosa" },
      { icon: "bi-cup-straw", texto: "Perfeito para doces e chocolates" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
caju: [
  {
    titulo: "Caju Tradicional",
    descricao: "Fruta de polpa suculenta e sabor levemente ácido, rica em vitamina C. Ideal para consumo in natura, sucos e doces.",
    imagem: "assets/img/produtos/caju.jpg",
    galeria: [
      "assets/img/produtos/caju1.jpg",
      "assets/img/produtos/caju1.jpg"
    ],
    impactCharacters: [
      { icon: "bi-emoji-smile", texto: "Doce e suculento" },
      { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
      { icon: "bi-basket", texto: "Mesa premium" }
    ]
  }
],
    
};

// ===== VARIÁVEIS DE NAVEGAÇÃO =====
let categoriaAtual = null;
let indiceAtual = 0;
let ultimoProdutoAcesso = {}; // memória: categoria → índice

// ===== ELEMENTOS DO DOM =====
const modal = document.getElementById('modalProduto');
const titulo = document.getElementById('modalTitulo');
const descricao = document.getElementById('modalDescricao');
const imagem = document.getElementById('modalImagem');
const impactContainer = document.querySelector('.impact-characters');
const botoesWrapper = document.querySelector('.modal-botoes');



// ===== FUNÇÃO ABRIR MODAL =====
function abrirModal(categoria, indice = 0) {
    // Usa memória se existir
    if (ultimoProdutoAcesso[categoria] !== undefined) {
        indice = ultimoProdutoAcesso[categoria];
    }

    const produtos = produtosData[categoria];
    const produto = produtos?.[indice];
    if (!produto) return;

    categoriaAtual = categoria;
    indiceAtual = indice;
    ultimoProdutoAcesso[categoria] = indice; // guarda memória

    // Fade out antes de trocar
    titulo.style.opacity = 0;
    descricao.style.opacity = 0;
    imagem.style.opacity = 0;

    setTimeout(() => {
        titulo.textContent = produto.titulo;
        descricao.textContent = produto.descricao;
        imagem.src = produto.imagem;

        // Impact characters
        impactContainer.innerHTML = '';
        produto.impactCharacters.forEach(char => {
            const div = document.createElement('div');
            div.className = 'character';
            div.innerHTML = `<i class="bi ${char.icon}"></i><span>${char.texto}</span>`;
            impactContainer.appendChild(div);
        });

        // Atualiza progresso
        document.getElementById('progressoTexto').textContent = `${indice + 1}/${produtos.length}`;

        // Mostra/esconde botões
        if (botoesWrapper) botoesWrapper.style.display = produtos.length > 1 ? 'flex' : 'none';

        // Fade in
        titulo.style.transition = 'opacity 0.3s ease';
        descricao.style.transition = 'opacity 0.3s ease';
        imagem.style.transition = 'opacity 0.3s ease';
        titulo.style.opacity = 1;
        descricao.style.opacity = 1;
        imagem.style.opacity = 1;
    }, 150);

    // Abre modal
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

// ===== FECHAR MODAL =====
function fecharModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ===== NAVEGAÇÃO =====
function anteriorProduto() {
    if (!categoriaAtual) return;
    const produtos = produtosData[categoriaAtual];
    if (!produtos || produtos.length === 0) return;
    indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
    ultimoProdutoAcesso[categoriaAtual] = indiceAtual;
    abrirModal(categoriaAtual, indiceAtual);
}

function proximoProduto() {
    if (!categoriaAtual) return;
    const produtos = produtosData[categoriaAtual];
    if (!produtos || produtos.length === 0) return;
    indiceAtual = (indiceAtual + 1) % produtos.length;
    ultimoProdutoAcesso[categoriaAtual] = indiceAtual;
    abrirModal(categoriaAtual, indiceAtual);
}

// --- Fullscreen / zoom robusto ---
function abrirImagemFullscreen(src) {
    document.querySelector('.img-fullscreen')?.remove();

    const overlay = document.createElement('div');
    overlay.className = 'img-fullscreen';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagem em tela cheia';

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // trava scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function fechar() {
        overlay.remove();
        document.body.style.overflow = prevOverflow || '';
        document.removeEventListener('keydown', onKey);
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target === img) fechar();
    });

    function onKey(e) {
        if (e.key === 'Escape') fechar();
        if (e.key === 'ArrowLeft') anteriorProduto();
        if (e.key === 'ArrowRight') proximoProduto();
    }
    document.addEventListener('keydown', onKey);
}

// --- Ativa fullscreen ao clicar na imagem do modal ---
(function setupModalImageZoom() {
    const imgEl = document.getElementById('modalImagem');
    if (!imgEl) return;

    imgEl.style.cursor = 'zoom-in';

    // antes de adicionar, remove o antigo se existir
    imgEl.removeEventListener('click', imgEl._zoomHandler || (() => { }));

    const handler = () => abrirImagemFullscreen(imgEl.src);
    imgEl.addEventListener('click', handler);

    // guardamos a referência para conseguir remover no futuro
    imgEl._zoomHandler = handler;
})();


// ===== TECLADO =====
document.addEventListener('keydown', (e) => {
    const modalVisivel = modal && modal.style.display === 'flex';
    if (!modalVisivel) return;

    switch (e.key) {
        case 'Escape':
            fecharModal();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            anteriorProduto();
            break;
        case 'ArrowRight':
            e.preventDefault();
            proximoProduto();
            break;
    }
});

// ===== CLIQUE FORA FECHA =====
modal?.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});

// ===== GLOBAIS =====
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.anteriorProduto = anteriorProduto;
window.proximoProduto = proximoProduto;

// ===== FUNÇÃO FULLSCREEN =====
function abrirImagemFullscreen(src) {
    // Se já existir, remove antes de criar
    document.querySelector('.img-fullscreen')?.remove();

    const overlay = document.createElement('div');
    overlay.className = 'img-fullscreen';

    const img = document.createElement('img');
    img.src = src;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // Fechar clicando fora ou na imagem
    overlay.addEventListener('click', () => overlay.remove());

    // Fechar com ESC
    document.addEventListener('keydown', function escListener(e) {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escListener);
        }
    });
}

// Ativa fullscreen ao clicar na imagem do modal
imagem.addEventListener('click', () => {
    abrirImagemFullscreen(imagem.src);
});



