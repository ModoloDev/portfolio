 sobreType = () => {
    new TypeIt(".sobreType", {
        speed: 50,
        loop: false,
        lifeLike: true,
        afterComplete: function (step, instance) {
            instance.destroy();
        }
    })
        
        .type('<span class="title">Bem-Vindo ao Meu Portifólio!</span>')
        .pause(300)
        .break()
        .pause(500)
        .break()
        .type('<span class="paragrath">Meu nome é Lucas Módolo Gonçalves.</span>')
        .break()
        .type('<span class="paragrath">Moro em São Paulo, tenho 19 anos.</span>')
        .break()
        .type('<span class="paragrath">Estudo Análise e Desenvolvimento de Sistemas na Fatec São Paulo.</span>')
        .break()
        .break()
        .type('<span class="paragrath">2021 será o meu último ano de faculdade.</span>')
        .break()
        .type('<span class="paragrath">Fiz diversos cursos durante esses anos, clique na seta abaixo para conferir algumas das habilidades que adquiri durante esse tempo.</span>')
        .pause(1000)

        .go();
};

// certificadosType = () => {
//     new TypeIt(".certificados", {
//         speed: 50,
//         loop: false,
//         lifeLike: true,
//         waitUntilVisible: true,
//         afterComplete: function (step, instance) {
//             instance.destroy();
//           }
//     })

        
//         .type('<span class="paragrath">É claro que, apesar de ter aprendido bastante na faculdade, esse não foi o único meio pelo qual aprendi.</span>')
//         .break()
//         .type('<span class="paragrath">Fiz diversos cursos durante esse tempo.</span>')

    
    
//         .go();
// }

sobreType()

