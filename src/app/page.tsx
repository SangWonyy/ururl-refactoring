import URURLDropdownInput from "@src/component/input/URURLDropdownInput";

const Home = () => {
  return (
    <div>
      <URURLDropdownInput
        itemList={[
          { id: 1, value: "test" },
          { id: 2, value: "test" },
          { id: 3, value: "test" },
          { id: 4, value: "test" },
          { id: 6, value: "test" },
          { id: 5, value: "test" },
          { id: 7, value: "test" },
          { id: 8, value: "test" },
          { id: 9, value: "test" },
          { id: 12, value: "test" },
          { id: 139, value: "test" },
          { id: 149, value: "test" },
        ]}
      />
    </div>
  );
};

export default Home;
