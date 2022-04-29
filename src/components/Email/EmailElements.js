import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Container = styled.div`
//   min-height: 692px;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   top: 0;
//   z-index: 0;
//   overflow: hidden;
//   background: #152349;
// `;

// export const FormWrap = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media screen and (max-width: 400px) {
//     height: 80%;
//   }
// `;

export const Icon = styled(Link)`
  /* margin-left: 32px; */
  /* margin-top: 32px; */
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

// export const FormContent = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media screen and (max-width: 480px) {
//     padding: 10px;
//   }
// `;

// export const Form = styled.form`
//   background: #091127;
//   max-width: 800px;
//   height: auto;
//   width: 100%;
//   z-index: 1;
//   display: grid;
//   margin: 0 auto;
//   padding: 80px 32px;
//   border-radius: 4px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

//   @media screen and (max-width: 400px) {
//     padding: 32px 32px;
//   }
// `;

// export const FormH1 = styled.h1`
//   margin-bottom: 40px;
//   color: #fff;
//   font-size: 20px;
//   font-weight: 400;
//   text-align: center;
// `;

// export const FormLabel = styled.label`
//   margin-bottom: 8px;
//   font-size: 14px;
//   color: #fff;
// `;

// export const FormInput = styled.input`
//   padding: 16px 16px;
//   margin-bottom: 32px;
//   border: none;
//   border-radius: 4px;
// `;

// export const FormTextArea = styled.textarea`
//   padding: 16px 16px;
//   margin-bottom: 32px;
//   border: none;
//   border-radius: 4px;
// `;

// export const FormButton = styled.button`
//   background: #54607f;
//   padding: 16px 0;
//   border: none;
//   border-radius: 4px;
//   color: #fff;
//   font-size: 20px;
//   cursor: pointer;
// `;

// export const Text = styled.span`
//   text-align: center;
//   margin-top: 24px;
//   color: #fff;
//   font-size: 14px;
// `;

// export const Body = styled.div`
//   height: 100vh;
//   background: #152349;
// `;

export const Container = styled.div`
  color: #fff;
  background: #091127;
  width: 95%;
  min-width: 420px;
  padding: 35px 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10px;
`;

export const FormH1 = styled.h1`
  font-size: 30px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
  margin: 30px auto 0 auto;
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px 30px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
  font-weight: 500;
`;

export const FormButton = styled.button`
  background: #54607f;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 3px;
`;
