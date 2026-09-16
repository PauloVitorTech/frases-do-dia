// Lista com mais de 100 frases entre reflexão, tecnologia e motivação
const frases = [
    "A persistência é o menor caminho para o êxito.",
    "Linha por linha, o código perfeito começa a tomar forma.",
    "O melhor modo de prever o futuro é criá-lo.",
    "Erros são apenas degraus no caminho da programação e da vida.",
    "Faça o que puder, com o que tiver, onde estiver.",
    "O código mais limpo é aquele que não precisa de comentários.",
    "A inspiração existe, mas ela precisa te encontrar trabalhando.",
    "Simular a simplicidade é a forma mais sofisticada de genialidade.",
    "Não espere o momento perfeito, crie-o.",
    "Grandes aplicativos são construídos com pequenas linhas diárias.",
    "Sua atitude, não sua aptidão, determinará sua altitude.",
    "Foque em resolver o problema, o código é apenas a ferramenta.",
    "Seja curioso o suficiente para quebrar as coisas e inteligente para consertá-las.",
    "Acredite em você mesmo e todo o resto se encaixará.",
    "Todo expert em tecnologia já foi um iniciante perdido na documentação.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Errar rápido ajuda a aprender mais rápido.",
    "A melhor maneira de aprender a programar é programando.",
    "Mantenha seu código limpo e sua mente aberta.",
    "A criatividade é inteligência se divirtindo através do código.",
    "Quem tem paciência obtém o que deseja.",
    "O único limite para o seu crescimento é a sua própria mente.",
    "Construa hoje o site que você gostaria de usar amanhã.",
    "A disciplina bate o talento todas as vezes que o talento não se dedica.",
    "Otimize suas ações, reduza seus bugs mentais.",
    "Programar é a arte de dizer a outro ser (o computador) o que fazer.",
    "Pense duas vezes, codifique uma vez.",
    "A persistência realiza o impossível.",
    "Cada commit é um passo mais perto da sua melhor versão.",
    "O conhecimento é a única coisa que cresce quando é compartilhado.",
    "Transforme dificuldades em oportunidades de aprendizado.",
    "A simplicidade é o último grau de sofisticação.",
    "Seja a mudança que você quer ver no seu código.",
    "Não tenha medo de refatorar sua vida e seus objetivos.",
    "O segredo para progredir é começar.",
    "A prática constante supera qualquer talento natural.",
    "A tecnologia move o mundo, mas são as pessoas que dão propósito a ela.",
    "Pequenos hábitos diários geram resultados extraordinários.",
    "O foco é dizer 'não' para centenas de outras boas ideias.",
    "Construa pontes com o seu código, não barreiras.",
    "A curiosidade é o motor da inovação.",
    "O único código impossível de escrever é aquele que você desiste de tentar.",
    "Aprenda como se fosse viver para sempre, viva como se fosse morrer amanhã.",
    "Erros de compilação são apenas o compilador dizendo para você tentar de novo.",
    "A paciência é amarga, mas seu fruto é doce.",
    "Dê o seu melhor em cada projeto, mesmo nos menores.",
    "A inovação distingue um líder de um seguidor.",
    "Valorize o processo tanto quanto o resultado final.",
    "Quem ousa falhar grandemente pode alcançar grandes feitos.",
    "A energia flui para onde a atenção vai.",
    "Tudo parece impossível até que seja feito.",
    "Faça o difícil parecer fácil através da prática constante.",
    "O design não é apenas o que parece, é como funciona.",
    "Um erro é apenas uma oportunidade de entender o sistema melhor.",
    "A dedicação diária é o segredo dos grandes desenvolvedores.",
    "Sonhe grande, comece pequeno, mas comece agora.",
    "A clareza de pensamento precede a clareza de código.",
    "Aprenda com o ontem, viva para o hoje, espere pelo amanhã.",
    "O hábito da leitura e da prática diária constrói mestres.",
    "Não pare quando estiver cansado, pare quando tiver terminado.",
    "A tecnologia ideal é aquela que resolve problemas sem ser notada.",
    "O otimismo é a fé que leva à realização.",
    "Teste sempre, confie desconfiando.",
    "O sucesso na tecnologia pertence aos persistentes.",
    "Mantenha sua curiosidade infantil e sua disciplina adulta.",
    "Ideias sem execução são apenas sonhos.",
    "O código limpo reflete uma mente organizada.",
    "A jornada de mil linhas começa com um simples `console.log`.",
    "O aprendizado contínuo é o superpoder do programador moderno.",
    "Aceite o desafio e descubra do que você é capaz.",
    "A persistência é irmã da excelência.",
    "Respire fundo e revise o seu código com calma.",
    "Grandes conquistas exigem tempo e consistência.",
    "Seja gentil com você mesmo durante o processo de aprendizado.",
    "O segredo da mudança é focar toda a sua energia não em lutar contra o velho, mas em construir o novo.",
    "Um bom programador é aquele que olha nos dois sentidos antes de atravessar uma via de mão única.",
    "A sabedoria começa na dúvida e termina na compreensão.",
    "Faça com paixão ou nem faça.",
    "A automação inteligente liberta o ser humano para criar mais.",
    "Cada bug resolvido é um troféu invisível.",
    "A simplicidade guarda a verdadeira elegância.",
    "Acredite no valor das suas ideias e coloque-as em prática.",
    "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
    "A prática leva à perfeição, mas a consistência traz os resultados.",
    "Encontre um trabalho que você ame e nunca mais precisará trabalhar na vida.",
    "O código é sua tela, a lógica é seu pincel.",
    "Errar faz parte do processo de expansão da mente.",
    "A persistência transforma o ordinário em extraordinário.",
    "Sua mente é um jardim: o que você planta nela, cresce.",
    "Aproveite cada desafio como uma chance de ouro para evoluir.",
    "O sucesso é construído com resiliência e foco.",
    "Não meça seu progresso com a régua dos outros.",
    "A inovação nasce da liberdade de errar.",
    "Cada dia é uma nova oportunidade para reescrever sua história.",
    "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    "A consistência supera a intensidade a longo prazo.",
    "Conecte suas paixões com suas habilidades e crie algo incrível.",
    "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem.",
    "Persista, insista e nunca desista dos seus objetivos."
];

const quoteText = document.getElementById("quote-text");
const btnGerar = document.getElementById("btn-gerar");

let ultimaFraseIndex = -1;

function gerarFraseAleatoria() {
    let indexAleatorio;

    // Garante que a frase gerada não seja exatamente a mesma da anterior
    do {
        indexAleatorio = Math.floor(Math.random() * frases.length);
    } while (indexAleatorio === ultimaFraseIndex && frases.length > 1);

    ultimaFraseIndex = indexAleatorio;

    // Adiciona animação de fade
    quoteText.classList.remove("fade");
    void quoteText.offsetWidth; // Força o navegador a reiniciar a animação
    quoteText.classList.add("fade");

    // Altera o texto para a frase sorteada
    quoteText.textContent = frases[indexAleatorio];
}

// Evento de clique no botão
btnGerar.addEventListener("click", gerarFraseAleatoria);

// Gera uma frase automaticamente assim que a página abre
window.onload = gerarFraseAleatoria;