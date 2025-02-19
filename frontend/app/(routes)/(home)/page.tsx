// Components
import MainInfoContainer from "@/components/MainInfo";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <MainInfoContainer />
      </div>
      <Footer />
    </main>
  );
}