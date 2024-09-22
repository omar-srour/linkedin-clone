import React, { useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user) {
      navigate('/'); 
    }
  }, [props.user, navigate]);

  return (
   
    <Container>
      
     <Header />
    <Section>
      
      <h5>
        <a>Hiring in a hurry? - </a>
      </h5>
      <p>
        Find talented pros in record time with Upwork and keep business
        moving.
      </p>
    </Section>
    <Layout>
      <Leftside />
      <Main />
      <Rightside />
    </Layout>
  </Container>
  )
}


const Container=styled.div`
padding-top:12PX;
max-width:100%;

`;

const Section =styled.div`
display: flex;
text-align:center;
align-items:center;
justify-content:center;
padding-top:100px;
min-height: 50px;
box-sizing:content-box;
text-decoration:underline;

h5{
  color: #0a66c2;
    font-size: 14px;
    
    a{
  font-weight: 700;
}
}

p{
  font-size: 14px;
  color: #434649;
    font-weight: 600;

}

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 15PX 3px;
  line-height:0%;
}

`;


const Layout = styled.div`
display: grid;
grid-template-areas: "leftside  main  rightside";
grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px, 7fr);
column-gap:25px;
row-gap:25px;
margin: 25px 0;

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
return{
  user: state.userState.user,
}
};


export default connect( mapStateToProps)(Home);