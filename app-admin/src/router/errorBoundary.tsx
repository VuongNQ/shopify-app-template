import { EmptyState, Page } from "@shopify/polaris";
import { useRouteError } from "react-router-dom";
import image404 from "@/assets/page404.png";

const ErrorBoundary = () => {
  const error = useRouteError();

  console.error("Something error", error);

  return (
    <Page>
      <EmptyState heading="" image={image404} imageContained></EmptyState>
    </Page>
  );
};

export default ErrorBoundary;
