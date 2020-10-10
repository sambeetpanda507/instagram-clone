import React, { useEffect, useState } from "react";
import Story from "../story/Story";
import Post from "../post/Post";
import "./mainBody.css";
import Suggestion from "../sugestion/Suggestion";
import axios from "axios";

function MainBody({ updatedData }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/postdata")
            .then((result) => {
                setPosts(result.data.posts);
            })
            .catch((err) => console.log(err));
    }, [posts.length]);

    useEffect(() => {
        if (updatedData) {
            setPosts((currentState) => [...currentState, updatedData]);
        }
    }, [updatedData]);

    return (
        <div className="container main__body">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <Story />
                    {posts
                        ? posts.map((value, index, arr) => {
                              return (
                                  <Post
                                      key={index}
                                      postId={value._id}
                                      username={value.userName}
                                      postImage={value.postImageURL}
                                      caption={value.caption}
                                      comments={value.comments}
                                      isLiked={value.isLiked}
                                      likeCounter={value.likeCounter}
                                  />
                              );
                          })
                        : []}
                </div>
                <div className="col-md-4 bg-secondary d-none d-sm-none d-md-none d-lg-block d-xl-block main__body__suggestion">
                    <Suggestion />
                </div>
            </div>
        </div>
    );
}

export default MainBody;
