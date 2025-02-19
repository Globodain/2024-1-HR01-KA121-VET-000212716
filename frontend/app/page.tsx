import Image from "next/image";

// Components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}
