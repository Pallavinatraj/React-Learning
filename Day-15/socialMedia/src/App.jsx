import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import SideBar from "./Components/SideBar.jsx";
import CreatePost from "./Components/createPost.jsx";
import PostList from "./Components/PostList.jsx";
import PostListProvider from "./Store/PostListProvider.jsx";

function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />

          <div className="d-flex flex-column flex-grow-1">
            <Header />
            <main
              className="flex-grow-1 p-3"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              {selectTab === "Home" ? <PostList /> : <CreatePost />}
            </main>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
