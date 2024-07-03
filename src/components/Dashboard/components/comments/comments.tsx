import React, { useEffect, useState } from "react";
import { getAllComments, getAllPosts } from "../../service";
import ProductCard from "../product-card/card";
import "./comments.scss";

const Comments: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filterPosts, setFilterPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setValue] = useState<number>(0);

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

  const onChange = (value: string) => {
    console.log(`selected ${value}`);

    const filterData = posts.filter((data: any) => data.userId === value);
    setFilterPosts(filterData);
    setValue(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  if (loading) {
    return <>Loading...</>;
  }

  const allPosts = filterPosts?.length ? filterPosts : comments;
  return (
    <div className="all__posts--filter">
      <div className="status__bar">
        <div className="dashboard__title">Comments</div>
        <div className="filter">
          {/* <Filter
            placeholder="Select a user"
            onChange={onChange}
            onSearch={onSearch}
            data={posts}
            searchOption="label"
          /> */}
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
