import { Platform, Text } from 'react-native';
import { SearchStylesLocal } from '../type';

const Search = ({
  styles,
  searchImage,
  createImage,
}: {
  styles: SearchStylesLocal;
  searchImage: string;
  createImage: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.contents}>
          <div className={styles.group}>
            <input placeholder='공장 검색' type='text' />
            <div id={styles.image}>
              <img src={searchImage} alt='search' />
            </div>
          </div>
          <div className={styles.group}>
            <div id={styles.button}>
              <img src={createImage} alt='create' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Search;
