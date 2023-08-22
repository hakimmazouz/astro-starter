import { importPageModules } from "../helpers";
import page from "./page";

export default [page, ...importPageModules()];
