import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Tests } from 'pages/Tests';

export enum AppRoutes {
	MAIN = 'main',
	TESTS = 'tests',
	NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TESTS]: '/test',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.TESTS]: {
    path: RoutePath.tests,
    element: <Tests />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
