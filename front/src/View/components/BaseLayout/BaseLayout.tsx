import { FooterTypeStyles, SearchTypeStyles } from '@/Model/Mapping';
import { Search, Footer } from '@shared/components';
import { ReactNode } from 'react';

const BaseLayout = ({
  children,
  image = '',
  searchImage = '',
}: {
  children: ReactNode;
  image?: string;
  searchImage?: string;
}) => {
  return (
    <>
      <div style={{ marginTop: '64px' }}>
        <Search
          styles={SearchTypeStyles}
          image={image}
          searchImage={searchImage}
          onOpenModal={() => null}
        />
      </div>
      {children}
      <Footer styles={FooterTypeStyles} />
    </>
  );
};

export default BaseLayout;
