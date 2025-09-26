"use client";

import { Provider } from "react-redux";
import { store } from "../store/store"; 

// This component wraps the app with Redux
export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
