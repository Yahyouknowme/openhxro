import styled from 'styled-components';

export const WrapperContentMarket = styled.div`
  height: 100%;
  border: 1px solid #262c2e;
  overflow: hidden;
  position: relative;
  background-color: #14081f;
  border-radius:10px;
  margin:2px;
  width:560px;
`;
export const WrapperLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff0f;

  .style-icon-loading {
    width: 52px;
    height: 52px;
  }
`;
