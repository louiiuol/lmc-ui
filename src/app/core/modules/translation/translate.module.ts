import {HttpClient} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {
	TranslateModuleConfig,
	TranslateLoader,
	TranslateModule as NgxTranslateModule,
	TranslateService as NgxTranslateService,
} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {TranslateService} from './services/translate.service';

/**
 * @internal
 */
const translateOptions: TranslateModuleConfig = {
	defaultLanguage: 'fr',
	loader: {
		provide: TranslateLoader,
		useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
		deps: [HttpClient],
	},
};

registerLocaleData(localeFr);

/**
 * Provides all services related to translation. Uses `@ngx-translate` under the hood
 * to translate all content displayed on the application.
 *
 * > This module is injected directly into AppModule to ease its integration. You should not have to import it
 * > in any modules, nor provides services, they already injected and available anywhere !
 * @internal
 */
@NgModule({
	imports: [NgxTranslateModule.forRoot(translateOptions)],
	providers: [
		NgxTranslateService,
		TranslateService,
		{provide: LOCALE_ID, useValue: 'fr-FR'},
	],
	exports: [NgxTranslateModule],
})
export class TranslateModule {}
