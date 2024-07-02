// file: src/components/Dashboard/Dashboard.tsx

import React, { useEffect, useState } from "react";
import Filter from "./components/filter/filter";
import ProductCard from "./components/product-card/card";
import "./dashboard.scss";
import { getAllPosts, getAllUsers } from "./service";

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filterPosts, setFilterPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

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

  //   useEffect(() => {

  //   }, [])

  console.log("users", users);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);

    const filterData = posts.filter((data: any) => data.userId === value);
    setFilterPosts(filterData);
    setValue(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  //   useEffect(() =>  {
  //     (async () => {
  //         try {

  //           setPosts(data);
  //           setLoading(false);
  //         } catch (err: unknown) {
  //           setLoading(false);
  //           console.log("error", err.message);
  //         }
  //       })();
  //   }, [value])

  if (loading) {
    return <>Loading...</>;
  }

  const allPosts = filterPosts?.length ? filterPosts : posts;
  return (
    <>
      <div className="dashboard">
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
              return <ProductCard key={idx} {...item} />;
            })
          ) : (
            <>No Posts Found</>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
