export type Task = {
    id: string;
    name: string;
    active: boolean;
    frequency: FrequencyEnum;
    description?: string;
    duration?: number;
    inserted_at: string;
    lastUpdated: number;
    notes?: TaskNote[];
    noteObject?: NoteObject;
  }
  
  export type NoteObject = {
    [date: string]: string[];
  }
  export type TaskNote = {
    id: string;
    note: string;
    inserted_at: string;
    time?: number;
  }
  export enum CardViewControls {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    ALL = 'all'
  }
  export enum FrequencyEnum {
    DAILY = 0,
    WEEKLY = 1,
    MONTHLY = 2
  }
  export const Frequency = {
      0: 'Daily',
      1: 'Weekly',
      2: 'Monthly',
  }