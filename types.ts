export type Employe = {
    id: string;
    email: string;
    poste: string;
    entreprise: string;
    ville: string;
    codePostal: string;
    rue: string;
    numeroRue: string;
    entreprisePhoto: string;
    description: string;
    date: string;
    telephone: string;
    salaireAnnuel: number;
};
export type PageEmployes = {
    page: number;
    results: Array<Employe>;
};
