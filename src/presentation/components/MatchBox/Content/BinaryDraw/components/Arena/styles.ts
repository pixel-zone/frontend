import styled from '@emotion/styled';
import Image from 'next/image';

const Slot = styled.div`
  width: 20rem;
  height: 14rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral['01']};
    opacity: 0.5;
  }
`;

const ImageNinja = styled(Image)`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: contain;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(17, 17, 5, 0.8);

  svg {
    circle {
      stroke: ${({ theme }) => theme.colors.primary['03']};
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -35px;

  p {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 500;
    font-size: 0.75rem;
  }

  button {
    width: 90px;
    height: 25px;
  }
`;

export const ArenaStyles = {
  Slot,
  ImageNinja,
  Loading,
  Header
};
