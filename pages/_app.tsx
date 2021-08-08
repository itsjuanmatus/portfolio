import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
