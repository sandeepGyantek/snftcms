import React from "react";
import { Route , Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Feature from "./pages/feature/Feature";
import Footer from "./components/footer/Footer";
function App() {
  return (
      // <Login/>
      <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

      <Layout>
        <div style={{minHeight: '80vh', backgroundColor: '#f3f4f7'}}>
          <Route path='/user' exact> 
              <User />
            </Route>
            <Route path='/feature' exact>
              <Feature />
            </Route>
        </div>
          <Footer />
      </Layout>

      </Switch>
      </>  
  );
}

export default App;
