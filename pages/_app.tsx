import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden dark:bg-gray-background lg:flex min-h-screen m-auto w-full">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
