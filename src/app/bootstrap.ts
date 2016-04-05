///< reference path="../../typings/main.d.ts">
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import 'rxjs/Rx'

const APPLICATION_PROVIDERS = [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS
];

const APPLICATION_DIRECTIVES = [
    ROUTER_DIRECTIVES
];

bootstrap(AppComponent, [
    ...APPLICATION_PROVIDERS,
    ...APPLICATION_DIRECTIVES
]);