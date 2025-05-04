import { FooterTypeStyles, SearchTypeStyles } from '@/Model/Mapping';
import { Search, Footer } from '@shared/components';
import { ReactNode } from 'react';
import { backIcon } from '@assets';
import { useNavigate } from 'react-router-dom';
const BaseLayout = ({
  children,
  image = '',
  searchImage = '',
  placeholder = '공장 검색',
  backImage = false,
  backUrl = '',
}: {
  children: ReactNode;
  image?: string;
  searchImage?: string;
  placeholder?: string;
  backImage?: boolean;
  backUrl?: string;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginTop: '64px',
        }}
      >
        {backImage ? (
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => {
              navigate(`${backUrl}`);
            }}
          >
            <img src={backIcon} alt='back' />
          </div>
        ) : null}
        <div style={{ width: '100%' }}>
          <Search
            styles={SearchTypeStyles}
            image={image}
            searchImage={searchImage}
            onOpenModal={() => null}
            placeholder={placeholder}
          />
        </div>
      </div>
      {children}
      <Footer styles={FooterTypeStyles} />
    </>
  );
};

export default BaseLayout;
