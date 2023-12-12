import React from 'react'
import { Container } from "react-bootstrap";
import CreatePostForm from "../components/CreatePostForm";
import Post from "../components/Post"

function Knowledgebase() {
  return (

    <div className='knowledgebase'>

      <CreatePostForm></CreatePostForm>
      
      <div className='posts' style={{ paddingTop: '60px', height: 'fit-content' }}>
          <Post postID={null} userID={null} userEmail={"elguezabala@merrimack.edu"} createTime={null} updateTime={null} initValue={'<p># Hello *world* \n this is line two</p>'} title="Example Post" tags={null} resources={null} comments={null} />  
      </div>

    </div>

    
  )
}

export default Knowledgebase
