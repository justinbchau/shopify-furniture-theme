import Link from 'next/link';
import Socials from './socials';

export default function Header() {
  return (
    <header className='header'>
      <nav>
        {/* Top Bar */}
        <div className='link-bar'>
          <p>
            Free shipping worldwide for orders over{' '}
            <span className='link-bar--color'>$200</span>
          </p>
          <div className='link-bar__links'>
            <img src='/mail.svg' alt='Mail Icon' className='link-bar__icons' />
            <span>shanjairaj@gmail.com</span>
            <img
              src='/phone.svg'
              alt='Phone Icon'
              className='link-bar__icons'
            />
            <span>(272) 471-2477</span>
            <img
              src='/divider.svg'
              alt='Divider'
              className='link-bar__icons divider'
            />
            <Link href='/'>
              <a className='link-bar__language'>USD</a>
            </Link>
            <img
              src='/dropdown.svg'
              alt='Dropdown Icon'
              className='link-bar__dropdown'
            />
            {/* Social Links */}
            <Socials />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='navbar'>
          <div className='navbar__container'>
            <h1 className='navbar__title'>
              <Link href='/'>SELENTIAL</Link>
            </h1>

            {/* List Items */}
            <div className='nav-list'>
              <button className='active nav-list__item'>
                <Link href='/'>Home</Link>
              </button>

              <button className='nav-list__item'>
                <Link href='/'>Shop</Link>
                <img
                  src='/black-dropdown.svg'
                  alt='Dropdown Icon'
                  className='nav-list__dropdown'
                />
              </button>

              <button className='nav-list__item'>
                <Link href='/'>Collections</Link>
                <img
                  src='/black-dropdown.svg'
                  alt='Dropdown Icon'
                  className='nav-list__dropdown'
                />
              </button>

              <button className='nav-list__item'>
                <Link href='/'>Contact Us</Link>
              </button>
            </div>

            <div>
              <a href='/'>
                <img
                  src='/search.svg'
                  alt='Dropdown Icon'
                  className='navbar__search'
                />
              </a>
              <a href='/'>
                <img
                  src='/cart.svg'
                  alt='Dropdown Icon'
                  className='navbar__cart'
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
