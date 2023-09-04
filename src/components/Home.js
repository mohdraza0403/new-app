import React, { useState } from 'react';
import "./home.css";
import { Parallax } from "react-parallax";
import Sdata from "./Sdata";
import CommentSection from './CommentSection'; 

function Home() {
  const [likedItems, setLikedItems] = useState([]); 
  const [showComments, setShowComments] = useState(Array(Sdata.length).fill(false)); 

  
  const toggleLike = (index) => {
    if (likedItems.includes(index)) {
    
      setLikedItems(likedItems.filter((item) => item !== index));
    } else {
      
      setLikedItems([...likedItems, index]);
    }
  };

  // Function to toggle comment section visibility for a specific item
  const toggleCommentVisibility = (index) => {
    const updatedShowComments = [...showComments];
    updatedShowComments[index] = !updatedShowComments[index];
    setShowComments(updatedShowComments);
  };

  // Function to add a comment for a specific item
  const addComment = (index, comment) => {
   
    console.log(`Comment added for item ${index}: ${comment}`);
  };

  return (
    <div className="Home">
      {Sdata.map((item, index) => (
        <Parallax key={index} strength={600} bgImage={item.img}  >
          <div className="content">
            <h2 className="title">{item.title}</h2>
            <p className="desc">{item.desc} <button className='btn'>Read more</button> </p>
                 
            <div className="icons">
              <h1 className="like">
                <i
                  className={`fa-solid fa-heart ${likedItems.includes(index) ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                ></i>
              </h1>
              <h1 className="cmt">
                <i
                  className="fa-regular fa-comment"
                  onClick={() => toggleCommentVisibility(index)}
                ></i>
              </h1>
              <h1 className="share"><i className="fa-solid fa-share"></i></h1>
              <h1 className="save"><i className="fa-solid fa-bookmark"></i></h1>
            </div>
            {showComments[index] && (
              <CommentSection
                comments={[]} // Pass comments for this item here
                onAddComment={(comment) => addComment(index, comment)}
              />
            )}
          </div>
        </Parallax>
      ))}
    </div>
  );
}

export default Home;






