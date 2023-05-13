import React from "react"
import { Route, Routes } from "react-router-dom";
import FormCake from "./composants/FormCake";
import FormReact from "./composants/FormReact";
import Header from "./composants/headers/Header";
 import Home from "./composants/Home";
// const LazyLoading = React.lazy(()=> import("./composants/Home"))
import Produit from "./composants/Produit";
import Service from "./composants/Service";
import UserDetail from "./composants/UserDetail";
import Users from "./composants/Users";
import UserProvider from "./contexts/UserContext";
const App = () => {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produit />} />
          <Route path="/services" element={<Service />}>
            <Route index element ={<FormReact />} />
            <Route path="form-react"  element={<FormReact />}/>
            <Route path="form-cake"  element={<FormCake />}/>
          </Route>
          <Route  path="/users" element={<Users />} />
          <Route  path="/users/:userId/:admin" element={<UserDetail />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
         
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
