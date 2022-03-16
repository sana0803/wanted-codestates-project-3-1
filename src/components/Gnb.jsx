import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdFolderOpen } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';

const Gnb = () => {
  return (
    <Wrapper>
      <svg width="173" height="53" viewBox="0 0 110 34" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.86006 12.2326L5.68557 13.6876C7.07182 12.4922 8.53076 11.8945 10.0624 11.8945C11.8849 11.8945 13.402 12.5363 14.6138 13.8199C15.8256 15.1035 16.4314 16.7251 16.4314 18.6848C16.4314 20.8601 15.7383 22.6923 14.3521 24.1817C12.9755 25.6613 11.2645 26.401 9.21905 26.401C8.17209 26.401 7.31417 26.2345 6.64528 25.9013C5.9473 25.5682 5.20571 24.9656 4.42049 24.0935L3.21358 33.9997H0L2.64648 12.2326H5.86006ZM13.2171 18.8167C13.2171 17.5919 12.8682 16.5876 12.1702 15.8037C11.4722 15.0101 10.5804 14.6132 9.49461 14.6132C8.1956 14.6132 7.10988 15.0934 6.23741 16.0536C5.36494 17.0138 4.92871 18.1945 4.92871 19.5957C4.92871 20.8205 5.29708 21.8052 6.03383 22.5499C6.77059 23.3142 7.72059 23.6963 8.88389 23.6963C10.1053 23.6963 11.1329 23.226 11.9666 22.2854C12.8003 21.3251 13.2171 20.1689 13.2171 18.8167ZM31.4046 26.0777L33.0914 12.2326H29.8778L29.6597 14.0551C28.9326 13.2614 28.2201 12.7029 27.5221 12.3796C26.8339 12.0562 26.0002 11.8945 25.0211 11.8945C22.9465 11.8945 21.2452 12.6245 19.9171 14.0845C18.6084 15.5444 17.9541 17.4159 17.9541 19.6989C17.9541 21.6782 18.526 23.29 19.67 24.5344C20.8139 25.7788 22.2922 26.401 24.105 26.401C25.5785 26.401 27.0035 25.7935 28.3801 24.5785L28.191 26.0777H31.4046ZM29.1788 18.758C29.1788 17.5332 28.8298 16.5386 28.1318 15.7743C27.4338 15.0003 26.5323 14.6132 25.4272 14.6132C24.2251 14.6132 23.2169 15.0885 22.4026 16.0389C21.5883 16.9992 21.1812 18.1749 21.1812 19.5663C21.1812 20.7813 21.5204 21.7759 22.199 22.5499C22.8776 23.324 23.7501 23.711 24.8164 23.711C25.9991 23.711 27.0218 23.226 27.8846 22.256C28.7474 21.2663 29.1788 20.1003 29.1788 18.758ZM37.4202 34L49.8238 12.2329H46.1449L41.1864 21.0808L37.7983 12.2329H34.3666L39.2669 24.3584L33.7559 34H37.4202Z"
          fill="#112155"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.3043 13.4078L55.7874 1.25293H52.5739L49.5493 26.0771H52.7629L53.6499 18.8312C53.9892 16.0191 55.1864 14.613 57.2416 14.613C58.6763 14.613 59.3936 15.2303 59.3936 16.4649C59.3936 16.8275 59.3646 17.2341 59.3064 17.6848L58.2885 26.0771H61.5021L62.5054 17.8612C62.5539 17.4203 62.5927 17.0259 62.6218 16.678C62.6508 16.3302 62.6654 16.0191 62.6654 15.7447C62.6654 14.5983 62.2534 13.6724 61.4294 12.9669C60.6345 12.2516 59.5681 11.894 58.2303 11.894C56.9023 11.894 55.5936 12.3986 54.3043 13.4078ZM69.0873 22.8291C68.3893 22.1726 68.0403 21.3349 68.0403 20.3158H78.6262C78.6553 19.7867 78.6698 19.4046 78.6698 19.1694C78.6698 16.9158 78.0737 15.1178 76.8813 13.7754C75.7083 12.4428 74.1039 11.7765 72.0682 11.7765C69.9646 11.7765 68.2245 12.5163 66.8479 13.9959C65.4617 15.4852 64.7686 17.3371 64.7686 19.5516C64.7686 21.668 65.3987 23.3582 66.6589 24.6222C67.9191 25.8862 69.6107 26.5182 71.7337 26.5182C73.0715 26.5182 74.1863 26.288 75.0782 25.8274C75.9604 25.3767 76.8183 24.583 77.652 23.4464L75.2527 22.1089C74.4481 23.2456 73.2945 23.8139 71.7919 23.8139C70.6965 23.8139 69.7949 23.4856 69.0873 22.8291ZM75.4132 17.6993C75.0739 15.5633 73.9058 14.4953 71.9088 14.4953C70.0184 14.4953 68.7873 15.5633 68.2153 17.6993H75.4132ZM84.9756 13.4216L85.1211 12.231H81.9075L80.2207 26.0762H83.4343L84.2777 19.1683C84.3649 18.404 84.4837 17.7475 84.6339 17.1988C84.7842 16.6501 84.9732 16.2018 85.201 15.854C85.4288 15.5062 85.6978 15.2514 86.0081 15.0897C86.3183 14.9281 86.6769 14.8472 87.0841 14.8472C87.6754 14.8472 88.2668 15.102 88.8581 15.6115L90.9084 12.9365C90.1135 12.2212 89.2313 11.8636 88.2619 11.8636C87.1568 11.8636 86.0614 12.3829 84.9756 13.4216ZM93.4778 20.3158C93.4778 21.3349 93.8268 22.1726 94.5248 22.8291C95.2324 23.4856 96.134 23.8139 97.2294 23.8139C98.732 23.8139 99.8856 23.2456 100.69 22.1089L103.089 23.4464C102.256 24.583 101.398 25.3767 100.516 25.8274C99.6238 26.288 98.509 26.5182 97.1712 26.5182C95.0482 26.5182 93.3566 25.8862 92.0964 24.6222C90.8362 23.3582 90.2061 21.668 90.2061 19.5516C90.2061 17.3371 90.8992 15.4852 92.2854 13.9959C93.662 12.5163 95.4021 11.7765 97.5057 11.7765C99.5414 11.7765 101.146 12.4428 102.319 13.7754C103.511 15.1178 104.107 16.9158 104.107 19.1694C104.107 19.4046 104.093 19.7867 104.064 20.3158H93.4778ZM97.3458 14.4953C99.3428 14.4953 100.511 15.5633 100.85 17.6993H93.6523C94.2243 15.5633 95.4554 14.4953 97.3458 14.4953Z"
          fill="#6C84EE"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.853 9.23184C108.219 9.23184 107.705 8.71454 107.705 8.07786V2.30796H101.967C101.333 2.30796 100.819 1.79066 100.819 1.15398C100.819 0.517301 101.333 0 101.967 0H108.853C109.486 0 110 0.517301 110 1.15398V8.07786C110 8.71454 109.486 9.23184 108.853 9.23184Z"
          fill="#6C84EE"
        ></path>
      </svg>
      <ListWrap>
        <NavList>
          <NavLink to="/" activeclassname="active">
            <MdSearch size="24" />
            <span>Find repository</span>
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to="/issue" activeclassname="active">
            <MdFolderOpen size="24" />
            <span>Stored repository & issues</span>
          </NavLink>
        </NavList>
      </ListWrap>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--light-gray);
  width: 450px;
  max-width: 450px;
  height: 800px;
  > svg {
    margin: 35px 30px 115px 50px;
  }
`;

const ListWrap = styled.ul`
  margin-left: 50px;
`;

const NavList = styled.li`
  padding: 10px 0;
  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      color: var(--sub-blue);
    }

    span {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  .active {
    color: var(--main-blue);
  }
`;

export default Gnb;
