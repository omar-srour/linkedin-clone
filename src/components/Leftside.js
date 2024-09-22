import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
const Leftside = (props) => {
  return (
    <Container>
<Artcard>
<UserInfo>
<Cardbackground/>
<a>
<Photo/>
<Link> <a href=''>wel come ,{props.user ? props.user.displayName :"there"}!</a></Link>
</a>

<a>

  <AddphotoText><a href=''>Add a photo</a></AddphotoText>
</a>

</UserInfo>
<Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
</Artcard>
<CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>

  )
}


const Container=styled.div`
grid-area: leftside;
padding-left: 3px;
`;
const Artcard=styled.div`
  text-align: center;
 overflow:hidden;
 margin-bottom:8px;
 background-color:#fff;
 border-radius:5px;
 transition: box-shadow 83ms;
 position: relative;
 border:none;
 
   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); 
`;


const UserInfo=styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding: 12px 12px 16px;

`;



const Cardbackground=styled.div`
 background: url("/images/card-bg.svg");
background-position:center;
background-size:462px;
height: 54px;
margin: -12px -12px 0;

`;


const  Photo =styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
height: 72px;
width: 72px;
background-repeat:no-repeat;
background-position: center;
margin : -38px auto 12px;
border: 2px solid white;
border-radius: 50%;
background-color: white;
background-size:70%;

`;


const Link =styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;

  &> a{

    text-decoration: none;
    color: black;
  }
`;




const AddphotoText=styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 15px;
  line-height: 1.33;
  font-weight: 400;
  &> a{

text-decoration: none;
color: #0a66c2;
}
  
`;


const Widget=styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding-top: 12px;
  padding-bottom: 12px;

  & > a{
text-decoration:none;
display:flex;
justify-content: space-between;
align-items: center;
padding: 4px 12px;
  }

  & > :hover{
    background-color: rgba(0, 0, 0, 0.08);

  }

  div{
display: flex;
flex-direction: column;
text-align: left;
span{
  font-size: 14px;
  line-height: 1.333;
  
&:first-child{
  color: rgba(0, 0, 0, 0.6);
}

&:nth-child(2){
  color: rgba(0, 0, 0, 1);
font-weight: bolder;
}
}
}

`;


const Item =styled.div`
text-align: start;
padding: 12px ;
font-weight: 600;
&:hover{
  background-color: rgba(0, 0, 0, 0.08);
}
`;


const CommunityCard=styled.div`
border: 1px solid rgba(0,0,0,0.15);
padding: 10px 2px;
display: flex;
flex-direction: column;
box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px #d1d9e6;

a{
font-size: 15px;
padding-bottom:3px;
&:hover {
      color: #0a66c2;
    }


 span{
display: flex;
justify-content: space-between;
padding-right:4px;

}


&:last-child {
color: rgba(0,0,0,0.6);
padding-top:3px;
border-top:1px solid rgba(0,0,0,0.15);
&:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
}
}


`;


const mapDispatchToProps=(state)=>{

return{

  user: state.userState.user,
}



}


export default connect(mapDispatchToProps) (Leftside)