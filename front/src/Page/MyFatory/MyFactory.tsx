import { MyFactory as Factory } from '../../View/components';
import { MyFactoryApi } from '../../Controller';

const StudyFactory = () => {
  return (
    <Factory>
      <MyFactoryApi />
    </Factory>
  );
};
export default StudyFactory;
