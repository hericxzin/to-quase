const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "É permitido sair da escola durante o recreio?",
        alternativas: [
            {
                texto:'Sim',
                afirmacao: 'É possível com autorização do responsavél'
            },
            {
                texto:'Não',
                afirmacao: 'Nâo e possível sem uma autorização'
            }
            
        ]
    },
    {
        enunciado: "Na escola é permitido o porte de arma?",
        alternativas: [
            {
                texto:'Sim',
                afirmacao: 'Errado, não e permitido o uso de qualquer tipo de arma'
            },
            {
                texto:'Não',
                afirmacao: 'Correto somente no exercito e permitido, o uso de armas para combate '
            }
            
        ]
    },
    {
        enunciado: "É possivél ter aula no sabádo e domingo nas escolas?",
        alternativas: [
            {
                texto:'Sim',
            afirmacao: 'sim, Mas somente para eventos ou cursos na escola'
            },
            {
                texto:'Não',
                afirmacao: 'Em algumas escolas nem eventos ou cursos a escola abre'
            }
            
        ]
    },
    {
        enunciado: "Quais regras nas escolas Cívico militar",
        alternativas: [
            {
                texto:'todos desorganizados,sem roupa do colégio qualquer corte de cabelo?',
                afirmacao: 'Errado, todos devem estar nos conformes das regras da escola '
            },
            {
                texto:'Corte de cabelo padrão militar,vestidos com as fardas escolares e organizados',
                afirmacao: 'Correto, Assim todos ficam nos conformes das regras da escola'
            }
            
        ]
    },
    {
        enunciado: "É permitido o uso de celular no colégio",
        alternativas: [
            {
                texto:'Sim',
                afirmacao: 'Sim,é permitido em horas vagas como exemplo o recreio'
            },
            {
                texto:'Não',
                afirmacao: 'Não e permitido o uso de celular nas aulas sem autorização do professor'
            }
            
        ]
     }
    ]

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}


function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
        }
    }
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + ' ';
        atual++;
        mostraPergunta()
    }

    function mostraResultado(){
        caixaPerguntas.textContent = ' Início do texto...'
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = '';
    }

mostraPergunta();