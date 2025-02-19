// Components
import MainInfoContainer from "@/components/MainInfo";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <MainInfoContainer />
      </div>
    </main>
  );
}
