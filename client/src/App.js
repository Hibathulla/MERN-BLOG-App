import React, {Suspense} from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Home from "./pages/Home/Home";
import Layout from "./UI/Layout";
import HeadingBox from "./UI/HeadingBox";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

const LogIn = React.lazy(() => import("./pages/LogIn/LogIn"))
const SignUp = React.lazy(() => import("./pages/SignUp/Signup"))
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"))
const Write = React.lazy(() => import("./pages/Write/Write"))
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"))


function App() {

  return (
   <Layout>
   <Suspense fallback={<LoadingSpinner />}>
    <Switch>

  <Route path="/" exact>
    <Redirect to="/home" />
   </Route>

   <Route path="/signin" exact>
    <LogIn />
   </Route>

   <Route path="/signup" exact>
    <SignUp />
   </Route>

   <Route path="/home" exact>
    <HeadingBox />
    <Home />
   </Route>

   <Route path="/aboutus" exact>
    <AboutUs />
   </Route>

   <Route path="/home/post/:postId">
   <SinglePage />
   </Route>
     
   <Route path="/Write">
   <Write />
   </Route>
  
   </Switch>
   </Suspense>
   </Layout>
  );
}

export default App;
