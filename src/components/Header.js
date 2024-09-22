import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { signInAPI, SignOutAPI } from '../Action';
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/Home'>
            <img src="/images/home-logo.svg" />
          </a>
        </Logo>


        <Search>
          <div>
            <input type='text' placeholder='search' />
          </div>

          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />

            </SearchIcon>
        </Search>


         <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList> 
            
            <User>
              <a>

                {props.user && props.user.photoURL ?(
                  <img src={props.user.photoURL} alt="" />
                ):(
                  <img src="\images\user.svg" alt="" />

                )}
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut onClick={()=>props.SignOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>

             <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" className='omar' />
                </span>
              </a>
            </Work>  
           </NavListWrap>
        </Nav>  
      </Content>
    </Container>
  )
}













const Container=styled.div`
border-bottom: 2PX solid rgb(0 ,0 ,0 ,0.09);
background-color:white;
padding: 0 24px;
margin-top:-13px;
position: fixed;
width: 100vw;
z-index: 1;

`;


const Content=styled.div`
display: flex;
align-items: center;
max-height: 100%;
max-width: 1128px;
margin:0 auto;
`;


const Logo=styled.div`
margin:0 15px;
font-size: 0;

`;




const Search  =styled.div`
opacity:1;
flex-grow:1;
position:relative;

& > div{
max-width:280px;

}

input{
border-radius: 2px;
border:none;
background-color: #eef3f8;
height: 34px;
padding: 0 8px 0 40px;
box-shadow: none;
font-size: 15px;
font-weight: bolder;
border-color: #dce6f1;
width: 218px;


}
`;

const SearchIcon =styled.div`
position:absolute;
top: 10px;
left:5px;

`;



const Nav=styled.div`
display: block;
margin-left:auto;


@media (max-width: 768px) {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  
background-color:white;
}
`;




const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;


const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps=(dispatch)=>({

SignOut: ()=> dispatch(SignOutAPI())


})

export default connect(mapStateToProps,mapDispatchToProps)(Header);




















































































































