import { FooterTypeStyles, SearchTypeStyles } from '@/Model/Mapping';
import { Search, Footer } from '@shared/components';
import { ReactNode } from 'react';

const BaseLayout = ({
  children,
  image = '',
  searchImage = '',
  placeholder = '공장 검색',
}: {
  children: ReactNode;
  image?: string;
  searchImage?: string;
  placeholder?: string;
}) => {
  return (
    <>
      <div style={{ marginTop: '64px' }}>
        <Search
          styles={SearchTypeStyles}
          image={image}
          searchImage={searchImage}
          onOpenModal={() => null}
          placeholder={placeholder}
        />
      </div>
      {children}
      <Footer styles={FooterTypeStyles} />
    </>
  );
};

export default BaseLayout;
