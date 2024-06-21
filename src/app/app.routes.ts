import { Routes } from '@angular/router';

import { GetUserComponent } from './components/get-user/get-user.component';
import { UserResumeComponent } from './components/user-resume/user-resume.component';

export const routes: Routes = [
    { path: 'getUser', component: GetUserComponent },
    { path: 'userResume', component: UserResumeComponent },
];
