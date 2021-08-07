import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  margin: 15px 10px;
  display: flex;
  background-color: rgba(20, 20, 20, 0.8);
`;
const List = styled.li`
  padding: 10px 15px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  transition: all 300ms ease-in-out;
  border-bottom: 5px solid
    ${(props) => (props.current ? 'white' : 'transparent')};
`;

function Header({location: {pathname}}) {
  return (
    <Ul>
      <List current={pathname === '/'}>
        <Link to="/">Home</Link>
      </List>
      <List current={pathname === '/search'}>
        <Link to="/search">Search</Link>
      </List>
      <List current={pathname === '/show'}>
        <Link to="/show">Shows</Link>
      </List>
    </Ul>
  );
}

export default withRouter(Header);
