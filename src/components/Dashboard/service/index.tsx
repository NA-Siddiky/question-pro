import axios from "axios";

export const getAllPosts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getAllComments = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/comments");
};


export const getAllUsers = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  };


  export const getAllPostByUserId = async (id: number) => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  };