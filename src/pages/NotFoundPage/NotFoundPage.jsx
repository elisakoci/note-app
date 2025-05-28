import { Result, Button } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      icon={<RobotOutlined />}
      status="404"
      title="Oops! Page Not Found"
      subTitle="The robot looked everywhere, but couldn't find what you're looking for."
      extra={
        <Button
          type="primary"
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#FFD54F" }}
        >
          Go Back to Notes
        </Button>
      }
    />
  );
};

export default NotFoundPage;
