import { Route, Routes } from "react-router-dom";
import Authentication from "./components/authentication/authentication.component";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>hi iam shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
