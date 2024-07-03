import React, { useEffect, useState } from "react";
import {
  getAllComments,
  getAllPosts,
  getCommentsByPostId,
} from "../../service";
import Filter from "../filter/filter";
import ProductCard from "../product-card/card";
import "./comments.scss";

const Comments: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filterPosts, setFilterPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const filterOptions: any[] = [];

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getAllComments();
        const posts = await getAllPosts();

        setComments(data);

        setPosts(posts.data);
        setLoading(false);
      } catch (err: unknown) {
        setLoading(false);
        console.log("error", err.message);
      }
    })();
  }, []);

  if (posts?.length) {
    for (let i = 0; i < posts?.length; i++) {
      filterOptions.push({
        label: posts?.[i]?.title,
        value: posts?.[i]?.id,
      });
    }
  }

  const onChange = async (value: string) => {
    if (!value) {
      return setFilterPosts([]);
    }

    try {
      setLoading(true);
      const { data } = await getCommentsByPostId(value);

      setFilterPosts(data);
      setValue(value);

      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      console.log("error", err.message);
    }
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // if (loading) {
  //   return <>Loading...</>;
  // }

  const allPosts = filterPosts?.length ? filterPosts : comments;

  return (
    <div className="all__posts--filter">
      <div className="status__bar">
        <div className="dashboard__title">Comments</div>
        <div className="filter">
          {posts?.length ? (
            <Filter
              placeholder="Select a posts"
              onChange={onChange}
              onSearch={onSearch}
              data={filterOptions}
              searchOption="label"
            />
          ) : null}
        </div>
      </div>
      <div className="all__posts">
        {allPosts?.length ? (
          allPosts.map((item: any, idx) => {
            return <ProductCard key={idx} title={item.name} body={item.body} />;
          })
        ) : (
          <>No Posts Found</>
        )}
      </div>
    </div>
  );
};

export default Comments;
