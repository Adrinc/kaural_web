import React, { useState, useEffect } from 'react';
import TopMenuStyle from './TopMenu.module.css';
import { useLocation } from 'react-router-dom';


const TopMenu = () => {
    const links = [
        { name: 'HOME', url: '/', alterurl:"/#home" },
        { name: 'ACP', url: '/#acp', alterurl:"/acp" },
        { name: 'PLAN', url: '/#plan', alterurl:"/#plan" },
        { name: 'HOW IT WORKS', url: '/howitworks', alterurl:"/howitworks" },
        { name: 'SUPPORT', url: '/support', alterurl:"/support/selfservice" },
        { name: 'ABOUT US', url: '/about', alterurl:"/about" },
       /*  { name: 'SERVICES', url: '/selfservices', alterurl:"/selfservices" }, */
        
    ];
    const location = useLocation();
    let currentPath = location.pathname;
    let currentHash = location.hash==="" ? currentPath : location.hash;


    const matchingLink = links.find(link => link.url.match(currentHash) || link.alterurl.match(currentHash));
    const initialLinkName = matchingLink ? matchingLink.name : 'HOME';
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedLink, setSelectedLink] = useState(initialLinkName);
    const toggleMenu = () => setShowMenu(!showMenu);
    
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    const handleLinkClick = (name) => {
        if(name.includes("acp")){
            setSelectedLink("ACP");
        }
        else if(name.includes("howitworks")){
            setSelectedLink("HOW IT WORKS");
        }
        else{
            setSelectedLink(name);
        
        }

    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const currentHash = location.hash.substring(1);
        if (currentHash) {
          const element = document.getElementById(currentHash);
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);


      useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setSelectedLink(entry.target.id);
            }
          });
        }, { threshold: 0.7 });
      
        links.forEach(link => {
          const element = document.getElementById(link.name);
          if (element) {
            observer.observe(element);
          }
        });
      
        return () => {
          links.forEach(link => {
            const element = document.getElementById(link.name);
            if (element) {
              observer.unobserve(element);
            }
          });
        };
      }, [links]);


    return (
        <>
                    {showMenu && (
                <div className="md:hidden flex flex-col gap-1 absolute justify-evenly top-0 left-0 w-[50vw] h-[100vh] shadow-lg z-50 bg-[#00000070] backdrop-filter backdrop-blur-lg border-x-2 border-tertiaryColor animate-fade-right animate-duration-500">
                    <div className='flex flex-row justify-end p-4 '>
              
                        <button aria-label="burger buttun close" onClick={toggleMenu} className=" border-2 rounded-lg text-primaryTextColor p-2  font-bold text-lg">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill='#ffffff' fillRule="evenodd" clipRule="evenodd">
                                <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-row justify-center p-2'>
                        <img
                        /* loading="lazy" */
                        src="/image/logos/logo1.png"
                        className={TopMenuStyle.imagemobile}
                        alt='uwifi logo'
                        width="100" height="50"
                        />

                 
                    </div>
                    <nav className="flex flex-col items-start  gap-6">
                    {links.map(link => (
                      <a 
                      key={link.name}
                      href={link.url} 
                      className={link.name === selectedLink ? TopMenuStyle['selected-link-mobile'] : TopMenuStyle.linkmobil}
                      onClick={() => handleLinkClick(link.name)}
                  >
                      {link.name}
                  </a>
                    ))}
                 
                    <div className="flex flex-row justify-center  items-center align-middle  w-[100%] mt-6 ">
                      <a className="inline-block buttom-shadow py-2 px-4 text-xl font-bold leading-5 text-green-50 buttom-text-shadow drop-shadow-sm bg-green-500  hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="https://uwifi-web.vercel.app/login">Login</a>
                      </div>
                    </nav>
                      <img
                    alt='small chatbot'
                    src="/image/logos/logo1.png"
                    className={TopMenuStyle.chatbot2}
                />
                </div>
                )}

            <div className={TopMenuStyle.mainContainer}>
            

                <img
                 
                 src="/image/logos/logo1.svg"
                    alt='uwifi logo'
                    width="100" height="50"
                    className={TopMenuStyle.image}
                />
                <span className={TopMenuStyle.description}><span className={TopMenuStyle.boltext}>CALL NOW! </span> (123)456-789-000</span>
         

                {isMobile && (
                        <button aria-label="Burger button" className="navbar-burger self-center md:hidden" onClick={toggleMenu}>
                        <svg width="35" height="35" viewBox="0 0 32 32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                          <rect className="text-coolGray-50" width="32" height="32" rx="6" fill="#ffffff"></rect>
                          <path className="text-coolGray-500" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path>
                        </svg>
                      </button>
                )}
      

                <nav className={`${TopMenuStyle.navigation} ${isMobile && showMenu ? !TopMenuStyle.showMenu : ''}`}>
                    {links.map(link => (
                        <a 
                            key={link.name}
                            href={link.url} 
                            className={link.name === selectedLink ? TopMenuStyle['selected-link'] : TopMenuStyle.link}
                            onClick={() => handleLinkClick(link.name)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block ">
                    <div className="flex items-center justify-end"><a className="inline-block buttom-shadow py-2 px-4 text-xl font-bold leading-5 text-green-50 buttom-text-shadow drop-shadow-sm bg-green-500  hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="https://uwifi-web.vercel.app/login">Login</a></div>
                </div>
                <img
                    alt='small chatbot'
                    src="/image/chatbotsmall.svg"
                    className={TopMenuStyle.chatbot}
                />
            </div>
        </>
    );
};

export default TopMenu;