import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const BgVideoContainer = styled.div`
  height: 60vh;
  width: 100%;
  background: pink;
`;

const VideoComp = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HomeHeaderComp = styled.div``;

function HomeHeader(props) {
  return (
    <HomeHeaderComp>
      <Navbar />
      <BgVideoContainer>
        <VideoComp autoplay mute loop autobuffer>
          <source src="/videos/header-video.mp4" type="video/mp4" /> Your
          browser is not supported.
        </VideoComp>
      </BgVideoContainer>
    </HomeHeaderComp>
  );
}

export default HomeHeader;
