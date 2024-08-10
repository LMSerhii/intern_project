import { lazy } from 'react';

export const HomePage = lazy(() => import('./home.page'));
export const LoginPage = lazy(() => import('./login.page'));
export const RegisterPage = lazy(() => import('./register.page'));
export const DashboardPage = lazy(() => import('./dashboard.page'));
export const TodoDetailsPage = lazy(() => import('./todo-details.page'));
export const TodoAddPage = lazy(() => import('./todo-add.page'));
export const TodoEditPage = lazy(() => import('./todo-edit.page'));
export const MyProfilePage = lazy(() => import('./my-profile.page'));
export const ForgotPasswordPage = lazy(() => import('./forgot-password.page'));
export const ResetPasswordPage = lazy(() => import('./reset-password.page'));
