import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// 1 create context
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// 2 useContext
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// const {loading} = useLoading() // useNavigate()
// 3 Provider
export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{ loading, setLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
