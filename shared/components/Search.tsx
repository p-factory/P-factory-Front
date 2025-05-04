import { Platform, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { SearchStylesLocal } from '../style';

interface SearchFormData {
  searchQuery: string;
}

const Search = ({
  styles,
  searchImage,
  image,
  backImage = '',
  placeholder = '공장 검색',
  onOpenModal,
}: {
  styles: SearchStylesLocal;
  searchImage?: string;
  image?: string;
  backImage?: string;
  placeholder?: string;
  onOpenModal: () => void;
}) => {
  const { register, handleSubmit, setValue } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    console.log('검색어:', data.searchQuery);
  };

  if (Platform.OS === 'web') {
    return (
      <form id={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div id={styles.contents}>
          {backImage !== '' ? (
            <div className={styles.group}>
              <img src={backImage} alt='back' />
            </div>
          ) : null}
          <div className={styles.group}>
            <input
              placeholder={placeholder}
              type='text'
              {...register('searchQuery', { required: true })}
              onChange={(e) => setValue('searchQuery', e.target.value)}
            />
            <div id={styles.image} onClick={handleSubmit(onSubmit)}>
              {searchImage !== '' ? (
                <img src={searchImage} alt='search' />
              ) : null}
            </div>
          </div>
          {image !== '' ? (
            <div className={styles.group}>
              <button type='button' id={styles.button} onClick={onOpenModal}>
                {image !== '' ? <img src={image} alt='build' /> : null}
              </button>
            </div>
          ) : null}
        </div>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Search;
