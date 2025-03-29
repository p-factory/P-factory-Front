import { FooterTypeStyles, SearchTypeStyles } from '@/Model/Mapping';
import { Search, Footer } from '@shared/components';
import { ReactNode } from 'react';

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Search
        styles={SearchTypeStyles}
        image=''
        searchImage=''
        onOpenModal={() => null}
      />
      {children}
      <Footer styles={FooterTypeStyles} />
    </>
  );
};

export default BaseLayout;
