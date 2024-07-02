import { Select } from "antd";
import React from "react";

declare type propsType = {
  onChange: any;
  onSearch: any;
  placeholder: string;
  data: any;
  searchOption: string;
};

const Filter: React.FC<propsType> = ({
  onChange,
  onSearch,
  placeholder,
  data,
  searchOption,
}) => {
  const datas = [];

  for (let i = 0; i < data?.length; i++) {
    datas.push({
      label: data[i]?.name,
      value: data[i]?.id,
    });
  }
  console.log("data", datas);
  return (
    <Select
      showSearch
      allowClear
      placeholder={placeholder}
      optionFilterProp={searchOption}
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          label: "All",
          value: "all",
        },
        ...datas,
      ]}
    />
  );
};

export default Filter;
