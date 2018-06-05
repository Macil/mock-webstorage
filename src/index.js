/* @flow */

export default class MockStorage {
  _keys: Array<string> = [];
  _data: {[k: string]: string} = (Object.create(null): any);

  get length(): number {
    return this._keys.length;
  }

  key(i: number): ?string {
    i = Math.floor(Number(i));
    return (i >= 0 && i < this._keys.length) ? this._keys[i] : null;
  }

  getItem(k: string): ?string {
    k = String(k);
    return (k in this._data) ? this._data[k] : null;
  }

  setItem(k: string, v: string): void {
    k = String(k);
    if (!(k in this._data)) {
      this._keys.push(k);
    }
    this._data[k] = String(v);
  }

  removeItem(k: string): void {
    k = String(k);
    if (k in this._data) {
      const i = this._keys.indexOf(k);
      if (i < 0) throw new Error('Should not happen');
      this._keys.splice(i, 1);
      delete this._data[k];
    }
  }

  clear(): void {
    this._keys = [];
    this._data = (Object.create(null): any);
  }
}
