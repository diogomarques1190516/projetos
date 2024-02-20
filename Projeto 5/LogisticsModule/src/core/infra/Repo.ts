
export interface Repo<T> {
  exists (t: T): Promise<boolean>;
  existsID (t: string): Promise<boolean>;
  save (t: T): Promise<T>;
}