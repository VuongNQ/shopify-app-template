import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

/**
 * Sets up the QueryClientProvider from @tanstack/react-query.
 * @desc See: https://@tanstack/react-query.tanstack.com/reference/QueryClientProvider#_top
 */
const QueryProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const client = new QueryClient({
    queryCache: new QueryCache(),
    mutationCache: new MutationCache(),
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};
export default QueryProvider;
