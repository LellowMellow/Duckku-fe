import React from "react";
import styled from "styled-components";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Button from "../../duckku-ui/Button";
import CardCarousel from "./components/cardCarousel";
import { Toast } from "./../../duckku-ui/Toast/index";

// 버튼 만들기
const ButtonWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  gap: 18px;
  margin-bottom: 56px;
  position: fixed;
  bottom: 0;
`;

const Payment = () => {
  return (
    <Layout>
      <Header back title="결제수단 관리" />
      <CardCarousel />
      <ButtonWrapper>
        <Button onClick={() => Toast("현재 결제수단 추가가 불가능합니다.")}>
          + 결제수단 등록
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Payment;
