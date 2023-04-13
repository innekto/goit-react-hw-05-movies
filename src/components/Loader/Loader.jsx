import { Oval } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerContainer>
      <Oval
        height={160}
        width={160}
        color="#4d9da9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#2a4d99"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </SpinnerContainer>
  );
};

export default Loader;
