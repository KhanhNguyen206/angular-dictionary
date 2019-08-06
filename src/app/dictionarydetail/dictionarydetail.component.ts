import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService, Words} from '../dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionarydetail',
  templateUrl: './dictionarydetail.component.html',
  styleUrls: ['./dictionarydetail.component.scss']
})
export class DictionarydetailComponent implements OnInit, OnDestroy {
  word: Words;
  sub: Subscription;

  constructor(private activatedRouter: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const keyDetail = paramMap.get('key');
      const mean = this.dictionaryService.search(keyDetail);
      this.word = {
        key: keyDetail,
        meaning: mean
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
