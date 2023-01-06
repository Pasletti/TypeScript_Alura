import { Negociacao } from './negociacao.js';

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = []; // Assim ou da forma de baixo
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] { // Assim ou da forma de baixo
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
