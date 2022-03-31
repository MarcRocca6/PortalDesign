import styled from 'styled-components/macro';

const StyledHome = styled.div`

#calenderText {
  top: 230px;
  right: 170px;
  // position: absolute;
  color: #A768CF;
  font-weight: 600;
}

#calender {
  top: 270px;
  right: 120px;
  // position: absolute;
  width: 330px;
  height: 280px;
}

#headingBox {
  top: 230px;
  background-color: grey;
  height: 25vw;
  border-radius: 10px;
}

.bodyHeading {
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #000000;
  padding-top: 30px;
}

#nameHeading {
  body-heading;
  height: 100%;
  color: white;
  font-weight: 600;
  text-align: left;
  padding-left: 45px;
  padding-bottom: 40px;
  z-index: 1;
  margin-top: 6px;
  position: relative;
  padding-top: 20px;
  font-family: Montserrat;
}

#smallHeading {
  body-heading;
  font-size: 14px;
  cursor: pointer;
  color: rgba(0,0,0,0.6);
  text-decoration: underline;
}

#pageContent {
  display: flex;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background: rgb(245, 245, 245);
}

#assetRow {
  padding: 10px;
  padding-bottom: 00px;
  // paddingTp: 20px
}

#assetCol {
  padding-left: 10px;
  padding-right: 10px;
}

#assetColContent {
  height: 80px;
  width: 240px;
  cursor: pointer;
  background: rgba(200;200;200;0.7)
}

#headButtonRow {
  padding-top: 25px;
  margin-left: -60px;
  padding-right: 60px;
}

@media (max-width: 110px) {
  #headButtonRow {
      display: none;
  }
  #nameHeading {
    margin-right: -200px;
  }
}

#headButtons {
  font-size: 12px;
  color: #A768CF;
  background-color: rgb(250,250,250);
  width: 140px;
  height: 70px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#newsBox {
  background-color: rgb(230;230;230);
  flex: 1;
  height: 38vh;
  margin-bottom: -70px;
  position: absolute;
  width: 440px;
  margin-top: -30px;
  right: 0;
  
}

#leftnewsBox {
  background-color: rgb(130;230;230);
  flex: 1;
  height: 15vh;
  width: 120vw;
  margin-bottom: -70px;
  position: fixed;
  right: 0;
  margin-right: -20vw;
  opacity: 0.9;
}

#banner {
  height: 32vh;
  position: fixed;
  top: 50px;
  left: 0;
  rigth: 0;
}

#assets {
  height: 32vh;
  position: absolute;
  bottom: -50px;
  left: 40px;
}

#pinnedHeaders {
  position: absolute;
  left: 550px;
}

.middle {
  margin-left: auto;
  margin-right: auto;
}

`;

export default StyledHome;