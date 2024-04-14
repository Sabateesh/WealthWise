import Image from "next/image";
import Sidebar from "../components/sidebar";
const Page: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-blue-800 text-white fixed inset-y-0">
      <Sidebar />
    </aside>
  );
};

export default Page;