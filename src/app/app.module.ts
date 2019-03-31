import { AppState } from './app.state';
import { Action } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { addReducer } from './reducers/block.reducer';
import { DisplayComponent } from './display/display.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AddItemEffect } from './effects/addItemEffect';
import { QuotesService } from './services/quotes.service';

const reducers: ActionReducerMap<any> = { block: addReducer }; //need parameter to type -watch docs

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
return localStorageSync({ keys: ['block'], rehydrate: true })(reducer);
}

const metaReducers: MetaReducer<AppState, Action>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AddItemEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
