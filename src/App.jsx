import { useContext } from "react";
import { DataContext } from "./Strore/DataProvidingStore";
import DataContextProvider from "./Strore/DataProvidingStore";
import ProfileComp from "./Component/ProfileComp";
import MainComp from "./Component/MainComp";
import CreatePost from "./Component/CreatePost";
import DownBar from "./Component/DownBar";
import SlideBar from "./Component/SlideBar";
import Header from "./Component/Header";

function AppContent() {
  const { openClose } = useContext(DataContext);

  return (
    <div id="box" className="flex flex-row h-[100%] w-full dark:bg-black">
      <div>
        <div className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-white border-r border-gray-300 z-20 dark:bg-black">
          <SlideBar />
        </div>
        <div className="block md:hidden">
          <DownBar />
        </div>
      </div>

      <div className="flex md:ml-[500px] md:mr-30 sm:ml-5 w-[100%]">
        <Header />
        <span className="mt-40">
          <ProfileComp />
        </span>
        <MainComp />

        {/* CreatePost Modal */}
        {openClose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center  border-8 bg-black/50">
            <CreatePost />
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <DataContextProvider>
      <AppContent />
    </DataContextProvider>
  );
}

export default App;
