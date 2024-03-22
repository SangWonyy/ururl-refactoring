import MyUrlTabContainer from "@src/container/mainBody/myUrlTab/MyUrlTabContainer";
import { GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const MyUrl = () => {
  return <MyUrlTabContainer />;
};

export default MyUrl;
