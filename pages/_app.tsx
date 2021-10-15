import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden dark:bg-gray-background">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
