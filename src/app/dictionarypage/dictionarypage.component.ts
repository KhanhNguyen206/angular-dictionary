import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionarypage',
  templateUrl: './dictionarypage.component.html',
  styleUrls: ['./dictionarypage.component.scss']
})
export class DictionarypageComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
