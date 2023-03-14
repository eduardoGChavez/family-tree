import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Tree from "../containers/Tree";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tree" element={<Tree />} />
          {/* <Route exact path="/" element={<Home userData={userData}/>} />
                <Route exact path="/login" element={<Login userData={userData} setUserData={setUserData}/>} />
                {/* <Route exact path="/" element={<Login userData={userData} setUserData={setUserData}/>} /> * /}
                <Route exact path="/events" element={<Events />} />
                {/* <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/checkout/information" element={<Information />} />
                <Route exact path="/checkout/payment" element={<Payment />} />
                <Route exact path="/checkout/success" element={<Success />} />* /}
                <Route path='*' element={<NotFound />} />  */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;