import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs';
import {AuthService} from '../services/auth.service';

/**
 * Provides Guard to validate access to restricted routes (Logged user level):
 * * If user is not logged, they will be redirected to `/login`
 * * If user is logged, he can access route (Customer View)
 */
export const CustomerGuard = () =>
	inject(AuthService).isLoggedIn$.pipe(
		map(value =>
			!value
				? inject(Router)
						.navigate(['/login'])
						.catch(err => console.error('Failed to navigate to [Login]', err))
				: true
		)
	);
