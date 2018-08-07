export interface Dictionary<T> {
  [name: string]: T;
}

export interface ReadonlyDictionary<T> {
  readonly [name: string]: T;
}

export class UniqueArray<T> extends Array<T> {
  push(t: T): number {
    if (!this.includes(t)) {
      this.push(t);
    }
    return this.length;
  }
}
