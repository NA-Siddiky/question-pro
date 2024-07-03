import { Select } from "antd";
import React from "react";

declare type propsType = {
  onChange: any;
  onSearch: any;
  placeholder: string;
  data: any;
  searchOption: string;
  value: string;
};

const Filter: React.FC<propsType> = ({
  onChange,
  onSearch,
  placeholder,
  data,
  searchOption,
}) => {
  return (
    <Select
      showSearch
      allowClear
      defaultValue={"All"}
      placeholder={placeholder}
      optionFilterProp={searchOption}
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          label: "All",
          value: "all",
        },
        ...data,
      ]}
    />
  );
};

export default Filter;
