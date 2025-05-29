import React, { ReactNode } from "react";
import ReactQueryProvider from "./reactquery.provider";

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
