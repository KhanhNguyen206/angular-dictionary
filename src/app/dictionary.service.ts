import {Injectable} from '@angular/core';

export interface Words {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public words: Words[] = [
    {key: 'dog', meaning: 'con cho'},
    {key: 'cat', meaning: 'con meo'},
    {key: 'black', meaning: 'mau den'},
    {key: 'sky', meaning: 'bau troi'},
    {key: 'blue', meaning: 'mau xanh da troi'},
    {key: 'green', meaning: 'mau xanh la cay'},
  ];
  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const wordValue = this.words.find(item => item.key === word.toLowerCase());
    if (wordValue) {
      return wordValue.meaning;
    }
    return 'Not found';
  }

  getAll(): Words[] {
    return this.words;
  }
}
