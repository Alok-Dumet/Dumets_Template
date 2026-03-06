import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from "./pages/home";

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
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Home />}/> {/*create an */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
