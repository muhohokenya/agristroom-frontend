import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./react-redux-hooks";
import { Post } from "../types/types";
import { getPosts } from "../redux/actions/getPosts.action";

const useFetchPosts = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.post);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      let res: any = await dispatch(getPosts());
      setPosts(res.payload.posts);
      setLoading(false);
    };
    fetchPost();
  }, [post, dispatch]);

  return [posts, loading];
};

export default useFetchPosts;
