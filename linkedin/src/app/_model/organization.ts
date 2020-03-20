export interface Organization{
    id: string;
    title: string;
    logoURL?: string;
    location?: string;
    followersCount?: number;
    type?: string;
    cause?: string;
    description?: string;
}