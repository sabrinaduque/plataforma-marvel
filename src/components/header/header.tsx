import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useDeviceSize } from 'react-device-sizes'
import {
  Container,
  Logo,
  NavItems,
  DropdownWrapper,
  Dropdown,
  DropdownIcon,
  DropdownMenu,
  DropdownItem,
  DropdownLink
} from './styles'

const Header: React.FC = () => {
  const screenSize = useDeviceSize()

  const location = useLocation()
  const { pathname } = location

  const items = [
    { label: 'Personagens', to: '/characters' },
    { label: 'Filmes', to: '/movies' },
    { label: 'HQs', to: '/comics' },
    { label: 'Sair', to: '/' },
  ]

  return (
    <Container>
      <Logo>MARVEL</Logo>

      {screenSize.mdUp &&
        <NavItems>
          {items.map(item => 
            <Link key={item.label} to={item.to}>
              <span className={`${pathname === item.to ? 'items item-active' : 'items'}`}>
                {item.label}
              </span>
            </Link>
          )}
        </NavItems>
      }

      {screenSize.mdDown &&
        <DropdownWrapper>
          <Dropdown>
            <DropdownIcon />
            <DropdownIcon />
            <DropdownIcon />

            <DropdownMenu>
              {items.map(item => 
                <div key={item.label}>
                  <DropdownItem>
                    <Link to={item.to}>
                      <DropdownLink>
                        <span className={`${pathname === item.to ? 'item-active' : ''}`}>
                          {item.label}
                        </span>
                      </DropdownLink>
                    </Link>
                  </DropdownItem>
                </div>
              )}
            </DropdownMenu>
          </Dropdown>
        </DropdownWrapper>
      }
    </Container>
  )
}

export default Header
