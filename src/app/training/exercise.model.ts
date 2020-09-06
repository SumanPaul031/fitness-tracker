export interface Exercise{
    id: string;
    name: string;
    duration: number;
    calories: number;
    user_id?: string;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}