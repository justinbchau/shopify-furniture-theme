import Link from 'next/link';

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
          <div className='link-bar--links'>
            <span>shanjairaj@gmail.com</span>
            <span>(272) 471-2477</span>
          </div>
        </div>

        <div className='navbar'>
          <h1 className='navbar__title'>
            <Link href='/'>SELENTIAL</Link>
          </h1>

          <div className='list'>
            <ul className='nav-list'>
              <li className='active'>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/'>Shop</Link>
              </li>
              <li>
                <Link href='/'>Collections</Link>
              </li>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
