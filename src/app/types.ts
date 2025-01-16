export interface ListProject {
    id: number;
    slug: string;
    name: string;
    documentId: string;
    summary: string;
};

export interface ListItem {
    id: number;
    text: string;
}

export interface RepoListItem {
    id: number;
    url: string;
    linkText: string;
}

export interface SpecificProject extends ListProject {
    description: string;
    challenges: ListItem[];
    lessons: ListItem[];
    repos?: RepoListItem[]
};