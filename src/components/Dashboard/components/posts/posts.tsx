import React, { useEffect, useState } from "react";
import { getAllPosts, getAllUsers } from "../../service";
import Filter from "../filter/filter";
import ProductCard from "../product-card/card";
import "./posts.scss";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filterPosts, setFilterPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setValue] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getAllPosts();
        const users = await getAllUsers();

        setUsers(users.data);

        setPosts(data);
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

  const allPosts = filterPosts?.length ? filterPosts : posts;
  return (
    <div className="all__posts--filter">
      <div className="status__bar">
        <div className="dashboard__title">Posts</div>
        <div className="filter">
          <Filter
            placeholder="Select a user"
            onChange={onChange}
            onSearch={onSearch}
            data={users}
            searchOption="label"
          />
        </div>
      </div>
      <div className="all__posts">
        {allPosts?.length ? (
          allPosts.map((item: any, idx) => {
            return (
              <ProductCard key={idx} title={item.title} body={item.body} />
            );
          })
        ) : (
          <>No Posts Found</>
        )}
      </div>
    </div>
  );
};

export default Posts;