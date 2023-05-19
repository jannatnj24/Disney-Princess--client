import { FaFacebook, FaGift, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-fuchsia-300 text-black-content">
  <div>
   <img className="w-[100px]" src={`https://i.ibb.co/m5r510q/logoo.png`} alt="" />
    <p>Sign up for our emails to get the inside <br /> scoop on special offers and new products.</p>
    <p>Login with</p>
   <div className='flex gap-2 w-[100px]'> <p><FaFacebook></FaFacebook> </p>
   <p><FaGithub></FaGithub></p><p><FaTwitter></FaTwitter></p><p><FaGoogle></FaGoogle></p></div>
    
  </div> 
  <div>
    <span className="footer-title">Characters</span> 
    <a className="link link-hover">Disney</a> 
    <a className="link link-hover">Star Wars</a> 
    <a className="link link-hover">Pixar</a> 
    <a className="link link-hover">Avengers</a>
  </div> 
  <div>
    <span className="footer-title">Disney Gift Cards</span> 
    <a className="link link-hover">About shopDisney</a> 
    <a className="link link-hover">Disney® Visa® Card</a> 
    <a className="link link-hover">Personalization Shop</a> 
    <a className="link link-hover">Account Info</a>
  </div> 
  <div>
    <span className="footer-title">Disney World </span> 
    <a className="link link-hover">Legal</a>
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    Copyright © 2023 - All right reserved by Disney World
  </div>
  
</footer>

    );
};

export default Footer;