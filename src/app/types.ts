export interface ListProject {
    id: number;
    slug: string;
    name: string;
    documentId: string;
    summary: string;
};

export interface SpecificProject extends ListProject {
    description: string;
    challenges: {item: [{id: number, text: string}]};
    lessons: {item: [{id: number, text: string}]};
};