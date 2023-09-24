export interface Product {
    nombre:     string;
    precio:     number;
    referencia: Referencia;
    foto:       string;
}

export enum Referencia {
    G40 = "G40",
}
