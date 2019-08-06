import {Component, OnInit} from '@angular/core';
import {DictionaryService, Words} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  word: Words;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
  }

  search(word: string) {
    const mean = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: mean};
  }

}
