
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login";
import { getUserAuth } from "./Action";
import { connect } from "react-redux";



function App (props)  {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className='app'>
  
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Home' element={ <Header />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
