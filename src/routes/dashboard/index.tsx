import { BLOGS_ROUTES } from "./blogs";
import { USERS_ROUTES } from "./users";

export const DASHBOARD_ROUTES = [...USERS_ROUTES, ...BLOGS_ROUTES];
