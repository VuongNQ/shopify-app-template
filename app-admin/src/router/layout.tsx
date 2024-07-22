import QueryProvider from "@/components/providers/QueryProvider";
import AuthApp from "@/middleware/authApp";
import { EAppRouter } from "@/types/app";
import { NavMenu } from "@shopify/app-bridge-react";
import { AppProvider, Box } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { Link, Outlet } from "react-router-dom";

/**
 * @readonly In case you want to using navigate UI menu app bridge CDN,
 * please use this code at: https://github.com/Shopify/shopify-app-bridge/issues/240#issuecomment-1850491644
 */
const Layout = () => {
  return (
    <AppProvider i18n={enTranslations}>
      <QueryProvider>
        <AuthApp>
          <NavMenu>
            <Link to={EAppRouter.root} rel="home" />
            <Link to={EAppRouter.list}>List timer</Link>
            <Link to={EAppRouter.account}>Accounts</Link>
          </NavMenu>
          <Box paddingBlockEnd={"800"}>
            <Outlet />
          </Box>
        </AuthApp>
      </QueryProvider>
    </AppProvider>
  );
};

export default Layout;
