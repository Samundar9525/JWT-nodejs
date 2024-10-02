import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  api = 'https://jwt-nodejs.onrender.com'

  public authenticateUser(data:any){
    return this.http.post<any>(this.api+'/login',data).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage='';
        if (error.error) {
          errorMessage = error.error.error;
        } else if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        this.snackBar.open(errorMessage, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snackbar-error'],
        });
        window.location.reload();
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  checkAuthDashboard(page: any): Observable<any> {
    return this.http.get<any>(this.api + `/${page}`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        // Check for 403 Forbidden status
        if (error.status === 403) {
          errorMessage = error.error.message || 'You do not have permission to access this page.';
        } else if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.snackBar.open(errorMessage, 'Close', {
          duration: 50000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snackbar-error'],
        });

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
