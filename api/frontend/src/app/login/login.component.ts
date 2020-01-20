import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { finalize, sample } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService, untilDestroyed } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  errors: any;
  isLoading = false;
  hasError = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  login(data: NgForm) {
    const login = this.authenticationService.login(data.value);

    // login.pipe(

    // );

    console.log(data);
    // login.pipe(
    //   finalize(() =>{

    //   })
    // )
    // console.log(this.loginForm);
    // console.log(this.useremail);

    // const login = this.authenticationService.login(this.loginForm.value);

    // const login = this.authenticationService.login(this.loginForm.value);

    // login.subscribe

    // this.isLoading = true;
    // const login$ = this.authenticationService.login(this.loginForm.value);
    // login$
    //   .pipe(
    //     finalize(() => {
    //       this.loginForm.markAsPristine();
    //       this.isLoading = false;
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(
    //     credentials => {
    //       log.debug(`${credentials.username} successfully logged in`);
    //       this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
    //     },
    //     error => {
    //       log.debug(`Login error: ${error}`);
    //       this.error = error;
    //     }
    //   );
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
