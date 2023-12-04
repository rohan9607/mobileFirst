"use client";
import { store } from "./store";
import { Provider } from "react-redux";

interface IProvidersProps {
  children: React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;


