import { MainContent } from "../styles/MainContentStyles";
import Fetch from "../utilities/fetch";

const HomePage: React.FC = () => {
  return (
    <MainContent>
      <Fetch />
    </MainContent>
  );
};

export default HomePage;
