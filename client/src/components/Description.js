import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Description = () => {
  return (
    <div>
      <Title>Volunteer Tracker</Title>
      <Paragraph>
        Add or delete your name to the dates you are volunteering. Currently
        showing only sundays.
      </Paragraph>
    </div>
  );
};

export default Description;
