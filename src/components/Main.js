import  {useState ,useEffect} from 'react'
import styled from 'styled-components'
import  Postmodelll from "./Postmodelll"
import { connect } from 'react-redux'
import { getArticlesAPI } from '../Action';
import ReactPlayer from 'react-player';

const Main = (props) => {

  const[showModel,setShowModel]=useState("close")
useEffect(()=>{
 
props.getArticles();
},[]);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return
    }
    switch (showModel) {
      case "open":
        setShowModel("close")
        break;
      case "close":
        setShowModel("open")
        break;
      default:
        setShowModel("close")
        break;
    }
  }

  
  return (
    <>
    { props.articles.length === 0 ? (
      
    <p>There are no articles</p>
  ) : (

      <Container>
        <ShareBox>
          <div>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} />
            ) : (
              <img src='/images/user.svg' alt='' />
            )}
            <button onClick={handleClick} disabled={props.loading ? true : false}> Start a post</button>
          </div>



          <div>
            <button>
              <img src='/images/photoo.svg' alt='' />
              <span>photo </span>
            </button>

            <button>
              <img src='/images/video.svg' alt='' />
              <span>video </span>
            </button>

            <button>
              <img src='/images/event.svg' alt='' />
              <span>Event </span>
            </button>

            <button>
              <img src='/images/artical.svg' alt='' />
              <span>artical </span>
            </button>
          </div>
        </ShareBox>

        <Content>
        {props.loading && <img src="./images/spain.svg" />}
       {props.articles.length > 0 ? (
       props.articles.map((article, key) => (
        
       <Article key={key}> 
    
    <ShareActor>
  <a>
    <img src={article.actor.image}  />
    <div>
      <span>{article.actor.title}</span>
      <span>{article.actor.description}</span>
      <span>{new Date(article.actor.date.seconds * 1000).toLocaleDateString()}</span> 
    </div>
  </a>
  <button><img src='/images/dots.svg' alt="options" /></button>
</ShareActor>


  <Description>{article.description}</Description>

  <SharedImge>
    <a>
      {!article.shareImage && article.video ? (
        <ReactPlayer width={'100%'} url={article.video} />
      ) : (
        article.sharedImg &&  <img width="100%"  src={article.sharedImg  } />
      )}
    </a>
  </SharedImge>

  <SocialCount>
    <li>
      <button>
        <img src='/images/like.svg' />
        <img src='/images/hart.svg' />
        <span>75</span>
      </button>
    </li>
    <li><a>{article.comments}</a></li>
  </SocialCount>

  <SocialAction>
    <button>
      <img src='/images/like.svg' />
      <span>like</span>
    </button>
    <button>
      <img src='/images/Comm.svg' />
      <span>comment</span>
    </button>
    <button>
      <img src='/images/share.svg' />
      <span>share</span>
    </button>
    <button>
      <img src='/images/send.svg' />
      <span>send</span>
    </button>
  </SocialAction>
  </Article>
  ))
) : (
  <p>No articles available</p>
)}

</Content>

        
        <Postmodelll showModel={showModel} handleClick={handleClick} />
        
      </Container>
      
   )}    
 
    </>

  );
};


 



















const Container = styled.div`
grid-area: main;
`;

const CommonCard=styled.div`
text-align: center;
overflow: hidden;
background-color: #fff;
border-radius: 5px;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 0 rgb(0 0 0 / 20%);
position: relative;
`;

const ShareBox =styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 12PX;
background-color: white ;

div{
 
button{
outline:  none;
font-size: 14px;
min-height: 48px;
border: none;
display: flex;
align-items: center;
font-weight: 600;
background:transparent;
}

&:first-child{
display: flex;
align-items: center;
margin-right: 8px;

img{
width: 48px;
border-radius: 50%;
margin-right: 15px;
margin-left:8px;
}

button{
margin: 4px 0;
padding-left: 16px;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 35px;
text-align: left;
width: 100%;
font-size: 13px;
color:rgba(0, 0, 0, 0.50);
}
}

&:nth-child(2){
display: flex;
justify-content: space-around;
flex-wrap:wrap;


button{
img{
margin: 0 4px 0 -2px;
color: #70b5f9;
width: 30px;
width: 18px;

}
span{

  color: #70b5f9;
}
}
}
}
`;


const Article=styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`;

const ShareActor= styled.div`
display: flex;
padding-right: 40px;
flex-wrap: nowrap;
align-items: center;
margin-bottom: 8px;
padding: 12px 16px;

a{

display: flex;
margin-right: 15px;
overflow: hidden;
flex-grow: 1;

img{
width: 48px;
height: 48px;
border-radius: 50%;
align-items: center;
}
& > div{
display: flex;
flex-direction: column;
flex-grow: 1;
text-align: left;
margin-left: 10px;
font-size: 14px;
color: rgba(0 , 0 ,0, 0.70);
font-weight: 600;
}

}

button{
background-color: transparent;
border: none;
width: 30px;
position: absolute;
top:0;
right: 12px;
}
`;


const Description= styled.div`
padding: 0 16px;
text-align: left;
font-size:16px;
padding-bottom: 20px;

`;


const SharedImge= styled.div`
width: 100%;

`;



const SocialCount= styled.ul`
list-style: none;
display: flex;
margin-left: 10px;
border-bottom: 1px solid #e9e5df;
padding: 8px 0;
list-style: none;
align-items: flex-start;

li{
margin-right: 10px;

button{
display: flex;
border: none;
padding-top: 4px;
background-color: white;

}

}

`;

const SocialAction= styled.div`
display: flex;



img{
width: 20%;
height: 100%;
}
button{

display: flex;
width: 100%;
/* height: 100%; */
background-color: white;
margin-left: 2px;
border: 1px solid rgba(0, 0, 0, 0.15);
margin-bottom: 10px;
color: #0a66c2;
}

`;


const Content= styled.div`
align-items: center;

&>img{
width: 30px;

}

`;


const mapStateToProps=(state)=>{

  return{
loading:state.articleState.loading,
user: state.userState.user,
articles:state.articleState.articles,
  }

}


const mapDispatchToProps=(dispatch)=>({

  getArticles: ()=> dispatch(getArticlesAPI())


})

export default connect (mapStateToProps ,mapDispatchToProps)(Main)
































