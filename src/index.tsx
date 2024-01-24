import { ApolloProvider } from "@apollo/client";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import Root from "Root";
import { client } from "utils/apollo";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<>loading...</>}>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <Root />
        </RecoilRoot>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>
);
