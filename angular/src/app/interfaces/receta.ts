export interface Receta {
    id: number;
    title: string;
    image: string;
    extendedIngredients: Ingrediente[];
    analyzedInstructions: Instruction[];

  }
  export interface Ingrediente {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
  }
  
  export interface Instruction {
    name: string;
    steps: Step[];
  }

  export interface Step {
    number: number;
    step: string;
    ingredients: { id: number; name: string; localizedName: string; image: string }[];
    equipment: { id: number; name: string; localizedName: string; image: string }[];
    length: { number: number; unit: string };
  }
  