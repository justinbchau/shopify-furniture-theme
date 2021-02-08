import Link from 'next/link';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='box'>
            <h1 className='footer__title'>
              <Link href='/'>SELENTIAL</Link>
            </h1>
            <div className='link-bar__socials'>
              <a href='#'>
                <img
                  src='/facebook.svg'
                  alt='Dropdown Icon'
                  className='link-bar__icons'
                />
              </a>
              <a href='#'>
                <img
                  src='/twitter.svg'
                  alt='Dropdown Icon'
                  className='link-bar__icons'
                />
              </a>
              <a href='#'>
                <img
                  src='/instagram.svg'
                  alt='Dropdown Icon'
                  className='link-bar__icons'
                />
              </a>
              <a href='#'>
                <img
                  src='/youtube.svg'
                  alt='Dropdown Icon'
                  className='link-bar__icons'
                />
              </a>
            </div>
          </div>

          <div className='box'>
            <h2 className='box__title'>More Links</h2>
            <ul>
              <li>
                <a href='/'>My Account</a>
              </li>
              <li>
                <a href='/'>Tack your order</a>
              </li>
              <li>
                <a href='/'>FAQs</a>
              </li>
              <li>
                <a href='/'>Payment Methods</a>
              </li>
              <li>
                <a href='/'>Shipping Guide</a>
              </li>
              <li>
                <a href='/'>Products Support</a>
              </li>
              <li>
                <a href='/'>Gift Card Balance</a>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2 className='box__title'>Explore the page</h2>
            <ul>
              <li>About Us</li>
              <li>Our Guarantees</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div className='box'>
            <h2 className='box__title'>Contact Us</h2>
            <ul>
              <li>shanjairaj@gmail.com</li>
              <li>(272) 471-2477</li>
            </ul>

            <h2 className='box__title'>Our Location</h2>
            <ul>
              <li>2411 Columbia Boulevard Baltimore, MD</li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='left'>
            <p>{date} &copy; All rights reserved</p>
          </div>
          <div className='right'></div>
        </div>
      </footer>
    </>
  );
}
