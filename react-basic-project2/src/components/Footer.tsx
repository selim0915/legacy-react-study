import React from 'react';
import styled from '@emotion/styled';

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`

const Section = styled.section`
  background-color: #1c1d1f;
`;

const Statistics = styled.section`
  background: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.span`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

const Emphasis = styled.em`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
`;

const Container = styled.section`
  background: #1c1d1f;
  padding: 20px 0 38px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;

const Left = styled.div``;

const TermsAndPolicy = styled.ul``;

const TermsAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
  }
`;

const Right = styled.div``;

const Footer: React.FC = () => {

 return (
   <Base>
     <Section>
       <Statistics>
         <Summary>
           지금까지&nbsp;
           <Emphasis>
             ★ 633,986,967 개의 평가가
           </Emphasis>
           &nbsp;쌓였어요.
         </Summary>
       </Statistics>
       <Container>
         <ContentWrapper>
           <Left>
             <TermsAndPolicy>
               <TermsAndPolicyItem>서비스 이용약관</TermsAndPolicyItem>
               <TermsAndPolicyItem>개인정보 처리방침</TermsAndPolicyItem>
               <TermsAndPolicyItem>회사 안내</TermsAndPolicyItem>
             </TermsAndPolicy>
           </Left>
           <Right />
         </ContentWrapper>
       </Container>
     </Section>
   </Base>
 )
}

export default Footer;
