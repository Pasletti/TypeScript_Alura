import { Negociacao } from './negociacao.js';

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = []; // Assim ou da forma de baixo
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] { // Assim ou da forma de baixo
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
