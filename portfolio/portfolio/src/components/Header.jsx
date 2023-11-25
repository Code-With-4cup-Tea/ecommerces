import React from 'react'

const Header = () => {
  return (
   
       <nav>
        <NavContent />
      </nav>
   
  )
}

const NavContent = ({ setMenuOpen }) => (
    <>
      <h2>Rajesh.</h2>
      <div>
        <a  href="#home">
          Home
        </a>
        <a  href="#skill">
          Skill
        </a>
        <a  href="#projects">
          Projects
        </a>
        <a  href="#contact">
          Contact
        </a>
      </div>
      <a href="mailto:raj223958@gamil.com">
        <button>Email</button>
      </a>
    </>
  );



export default Header