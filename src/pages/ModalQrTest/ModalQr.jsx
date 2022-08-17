import React from "react";
import "./modal.css";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import Header from "../../duckku-ui/ResponsiveHeader";
import { AiOutlineLeft } from "react-icons/ai";

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.6);
`;

const BackWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const SingerNameSection = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

const PhotoCardSection = styled.img`
  width: 326px;
  height: 466px;
  background-image: url(${(props) => props.PhotoCard});
  background-size: cover;
  border-radius: 48px;
  border: none;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CardInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const QrSection = styled.div`
  width: 100%;
  height: 403px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const QrCodeWrapper = styled.div`
  width: 326px;
  height: 326px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(55deg, #5e3ab6 6.14%, #e13194 94.68%);
  border-radius: 48px;
`;

const Qrcode = styled.img`
  width: 276px;
  height: 276px;
  background-image: url("https://itwiki.kr/images/b/b5/IT%EC%9C%84%ED%82%A4_QR_%EC%BD%94%EB%93%9C.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border: none;
  border-radius: 24px;
`;

const ModalQr = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modalQr" : "modalQr"}>
      {open ? (
        <section>
          <Margin width="340" height="18" />
          <BackWrapper>
            <button className="close" onClick={close}>
              <Header back />
            </button>
          </BackWrapper>

          <Margin width="340" height="18" />
          <SingerNameSection>
            <Typography color="white" bold24>
              {props.SingerName}
            </Typography>
          </SingerNameSection>
          <CardWrapper>
            <PhotoCardSection PhotoCard={props.PhotoCard} />
          </CardWrapper>

          <Margin width="340" height="40" />
          <CardInfoWrapper>
            <Typography color="white" regular16>
              등록일
            </Typography>
            <Typography color="white" regular16>
              {props.RegistDay}
            </Typography>
          </CardInfoWrapper>

          <Margin width="340" height="100" />
          <QrSection>
            <Typography color="white" bold24>
              실물 QR코드
            </Typography>
            <QrCodeWrapper>
              <Qrcode />
            </QrCodeWrapper>
          </QrSection>

          <Margin width="340" height="200" />
        </section>
      ) : null}
    </div>
  );
};

export default ModalQr;
