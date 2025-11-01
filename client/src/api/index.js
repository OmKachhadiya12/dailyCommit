import axios from "axios";

const url = "http://localhost:1212/posts";

export const fetchPosts = () => axios.get(url);