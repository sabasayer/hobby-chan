export type Writable<T> = { -readonly [K in keyof T]: T[K] };

export interface HobbyCategory {
  id: string;
  hobbyType: string;
  name: string;
}
