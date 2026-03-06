import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import index from "./pages/home";

function App() {

  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={index}/>
            <Route path="*" element={index}/> {/*create an */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
