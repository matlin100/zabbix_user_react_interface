// ZabbixDashboardt.styled.js
import styled from 'styled-components';

const sidebarWidth = '200px';
const marginFromTopAndBottom = '15px';
const SideBarTransition = '1s'

export const ZabbixDashboardtWrapper = styled.div`
  display: flex;

  .sidebar {
    display: flex;
    z-index: 1;
  }

  aside {
    position: fixed;
    top: ${marginFromTopAndBottom};
    left: ${(props) => (props.sidebarOpen ? marginFromTopAndBottom : `-${sidebarWidth}`)};
    height: calc(100% - 2 * ${marginFromTopAndBottom});
    width: ${sidebarWidth};
    border-radius:20px;
    background-color: #333;
    color: white;
    transition: left ${SideBarTransition} ease-in-out;

    &:hover {
     
    }
  }

  main {
    flex-grow: 1;
    padding: 20px;
    transition: margin-left ${SideBarTransition};
    margin-left: ${(props) => (props.sidebarOpen ? sidebarWidth : '0')};
  }

  .toggle-button {
    position: fixed;
    top: 20%;
    left: ${(props) => (props.sidebarOpen ? '215px' : '0')};
    background-color: #333;
    color: white;
    border: none;
    border-radius: 0 20px 20px 0;
    padding: 10px;
    cursor: pointer;
    transition: left ${SideBarTransition} ease-in-out, opacity 0.2s; /* Corrected transition syntax */
    &:hover {
      opacity: 0.6;
    }
  }
`;
