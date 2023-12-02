import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private location: Location, private snackBar: MatSnackBar) { }

  back() {
    this.location.back();
  }

  success(message: any, action: any) {
    this.snackBar.open(message, action, { duration: 2500 , verticalPosition: 'top', horizontalPosition: 'right'}
    );
  }

  public error(message: any, action: any) {
    this.snackBar.open(message, action,  { duration: 2500 , verticalPosition: 'top', horizontalPosition: 'right'});
  }

  refreshPage(router: Router, route: ActivatedRoute) {
    router.navigate(
      [],
      {
        relativeTo: route,
        queryParamsHandling: 'merge'
      }
    );
  }
}
