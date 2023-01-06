export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = []; // Assim ou da forma de baixo
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[] { // Assim ou da forma de baixo
    lista() {
        return this.negociacoes;
    }
}
