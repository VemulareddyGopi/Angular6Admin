import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService,
        private router: Router) { }
   model: any = {};
    loading = false;
    error = '';
  ngOnInit() {
  }

  onSubmit() {
     this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
            .pipe(first())
            .subscribe(
                data => {
                   this.router.navigate(['/dashboard']);
                     this.loading = false;
                },
                error => {
                     this.error = error;
                    this.loading = false;

                });
  }
}
