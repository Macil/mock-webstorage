/* @flow */

export default class MockStorage {
  _keys: Array<string> = [];
  _data: {[k: string]: string} = Object.create(null);

  get length(): number {
    return this._keys.length;
  }

  key(i: number) {
    i = Number(i);
    return this._keys[i];
  }

  getItem(k: string) {
    k = String(k);
    return (k in this._data) ? this._data[k] : null;
  }

  setItem(k: string, v: string) {
    k = String(k);
    if (!(k in this._data)) {
      this._keys.push(k);
    }
    this._data[k] = String(v);
  }

  removeItem(k: string) {
    k = String(k);
    if (k in this._data) {
      const i = this._keys.indexOf(k);
      if (i < 0) throw new Error('Should not happen');
      this._keys.splice(i, 1);
      delete this._data[k];
    }
  }

  clear() {
    this._keys = [];
    this._data = Object.create(null);
  }
}
