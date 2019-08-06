import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionarypageComponent} from './dictionarypage/dictionarypage.component';
import {DictionarydetailComponent} from './dictionarydetail/dictionarydetail.component';

const routes: Routes = [{
  path: 'timelines',
  component: TimelinesComponent,
},
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }, {
    path: 'dictionaries',
    component: DictionarypageComponent,
    children: [{
      path: ':key',
      component: DictionarydetailComponent
    }]
  }, {
    path: 'dictionary',
    component: DictionaryComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
