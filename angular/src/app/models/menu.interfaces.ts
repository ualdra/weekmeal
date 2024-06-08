// src/app/models/menu.interfaces.ts

export interface MenuSemanal {
    week: {
        [key: string]: Dia;
    };
}

export interface Dia {
    meals: Comida[];
    nutrients: {
        calories: number;
        protein: number;
        fat: number;
        carbohydrates: number;
    };
}

export interface Comida {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}
