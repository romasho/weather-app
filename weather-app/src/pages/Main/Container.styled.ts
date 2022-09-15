import styled from 'styled-components';

const ColumnBox = styled.div`
  max-width: 100vw;
  padding: 5vh 3%;
  background-color: ${(props) => props.theme.colors.main};
  background: center/cover;
  background-blend-mode: multiply;
  transition: background-image 1s ease-in-out;
`;

const BackgroundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: center/cover, rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  transition: background-image 1s ease-in-out;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;
  min-height: 30vh;

  @media (max-width: 878px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export { ColumnBox, BackgroundBox, Section };
