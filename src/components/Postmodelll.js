import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../Action/index";




const PostModel = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");



  const handleChange = (e) => {
    const image = e.target.files[0];

    if (!image || image === "undefined") {
      alert(`Not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };



  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };


  const postArticle=(e)=>{

    e.preventDefault();
    
    if (e.target !== e.currentTarget) {
      return
      
    }
const payload={

image: shareImage,
video:videoLink,
user:props.user,
description:editorText,
timestamp:firebase.firestore.Timestamp.now(),

}
props.postArticle(payload);
reset(e);

  }



  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };




  





  

  return (
    <>
      {props.showModel === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close.svg" alt="Close" />
              </button>
            </Header>

            <ShareContent>
              <UserInfo>
                {props.user.photoURL ?(
                    <img src={props.user.photoURL}/>
                
                ):(
                    <img src="/images/user.svg"  />
                )
                }
                <span>{props.user.displayName}</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="Upload" />}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
                    </>
                  )
                )}
              </Editor>
            </ShareContent>

            <ShareCreation>
              <AttachAsset>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/photoo.svg" alt="Attach image" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/youtyob.svg" alt="Attach video" />
                </AssetButton>
              </AttachAsset>

              <ShareComment>
                <AssetButton>
                  <img src="/images/Comm.svg" alt="Comment" />
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false}
              onClick={(event)=>postArticle(event)}>
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};



const Container = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 9999;
color: black;
background-color: rgba(0,0,0,0.8);

`;

const Content = styled.div`
width: 100%;
height: 100%;
max-width: 552PX;
background-color: white;
max-width: 90%;
overflow: initial;
border-radius: 5PX;
position: relative;
display: flex;
flex-direction: column;
top: 32PX;
margin: 0 auto;
`;


const Header = styled.div`
padding: 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
line-height: 1.5;
font-size: 16px;
font-weight: 400;
display: flex;
justify-content: space-between;
align-items: center;

button{
height: 40px;
width: 40px;
color: rgba(0,0,0,0.15);
svg,
img{
pointer-events: none;
}

}

`;

const ShareContent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
padding: 8px 12px ;

`;

const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
img{

width: 48px;
border-radius: 50%;
background-clip: content-box;
}

span{
font-size: 16px;
font-weight: bold;
margin-left: 10px;
line-height: 1.5;
}
`;


const ShareCreation = styled.div`
display: flex;
justify-content: space-between;
padding:  12PX 24PX 12PX 16PX;

`;

const AssetButton = styled.button`
display: flex;
align-items: center;
height: 40px;
min-width: auto;
width: 40px;
color: aliceblue(0,0,0,0.5);
`;


const AttachAsset = styled.div`
align-items: center;
display: flex;
padding-right: 8px;
padding-bottom: 30px;
`;


const ShareComment = styled.div`
padding-left: 8px;
margin-right: auto;

border-left: 1px solid rgba(0,0,0,0.5);
${AssetButton}{
  
  svg{

    margin-right: 5px;
  }

}
`;



const PostButton = styled.button`
min-width: 60px;
border-radius:20px;
background-color: #0a66c2;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 15px;

background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#a66c2")};
color: white;
&:hover{
  background: #004182;
}
`;


const Editor = styled.div`
padding: 12px 24px ;

textarea{
width: 100%;
resize: none;
min-height: 100px;
}
input{
width: 100%;
height: 40px;
font-size: 20px;
margin-bottom: 10px;
}

`;



const UploadImage = styled.div`
align-items: center;
img{
    width: 100%;
    height: 100%;
}



`;


const mapStateToProps= (state)=>{

return{

    user:state.userState.user,
}
}


const mapDispatchToProps=(dispatch)=>({ 

  postArticle: (payload)=> dispatch(postArticleAPI(payload))


})



export default connect (mapStateToProps, mapDispatchToProps)(PostModel)