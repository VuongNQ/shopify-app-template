import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { EAppRouter } from "../types/app";
import ErrorBoundary from "./errorBoundary";
import Layout from "./layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={EAppRouter.root} element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index lazy={() => import("@/features/dashboard")} />
      <Route path={EAppRouter.list} lazy={() => import("@/features/list")} />
      <Route path={EAppRouter.account} lazy={() => import("@/features/account")} />
    </Route>
  )
);
