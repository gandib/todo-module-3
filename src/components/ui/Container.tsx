import { ReactNode } from "react";

type TContainerPrps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerPrps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
