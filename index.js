const perguntas = [
    {
      pergunta: "O que é Javascript?",
      respostas: [
        "Uma linguagem de programação para construir páginas web",
        "Um sistema operacional",
        "Um tipo de café",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação usado para verificar igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento Objeto de Modelo",
        "Desenvolvedor Orientado a Manipulação",
        "Domingo Oficial Mundial",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console em JavaScript?",
      respostas: [
        "console.log()",
        "alert()",
        "print()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dados de um array em JavaScript?",
      respostas: [
        "Array",
        "List",
        "Object",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um elemento no início do array",
        "Adiciona um elemento ao final do array",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "+=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle de fluxo usada para tomar decisões em JavaScript?",
      respostas: [
        "if...else",
        "for",
        "switch",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
  
  
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }