import { useEffect, useRef, useState } from 'react';
// icons
import searchIcon from '../assets/icons/searchIcon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModeModal from '../components/ModeModal';
import UserModal from '../components/UserModal';
import SearchModal from '../components/SearchModal';
import LoginModal from '../components/LoginModal';
import GetProModal from '../components/GetProModal';
import logo from '../assets/icons/logo.svg';
import logoName from '../assets/logo.svg';
import articlesIcon from '../assets/icons/articleIcon.svg';
import hireIcon from '../assets/icons/hireIcon.svg';
import screensIcon from '../assets/icons/screenIcon.svg';
import sponsoreIcon from '../assets/icons/sponsorIcon.svg';
import uiKitsIcon from '../assets/icons/ui-kitIcon.svg';
import ActiveLink from '../components/ActiveLink';

const Header = () => {
  // dark mode light mode implement
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const [isProModal, setProModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [navState, setNavState] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (e) => {
    console.log('clicked', e.target);
    setIsActive(true);
  };

  const handleClose = (e) => {
    console.log('closed', e.target);
    setIsActive(false);
  };

  // when i cick outside of card mode card are invisible

  const modeModalRef = useRef(null);
  const userModalRef = useRef(null);

  // Function to handle click outside mode modal
  const handleClickOutsideModeModal = (event) => {
    if (modeModalRef.current && !modeModalRef.current.contains(event.target)) {
      setMode(false);
    }
  };

  // Function to handle click outside user modal
  const handleClickOutsideUserModal = (event) => {
    if (userModalRef.current && !userModalRef.current.contains(event.target)) {
      setUser(false);
    }
  };

  // Add click event listeners when mode or user state changes
  useEffect(() => {
    if (mode) {
      document.addEventListener('mousedown', handleClickOutsideModeModal);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideModeModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModeModal);
    };
  }, [mode]);
  useEffect(() => {
    if (user) {
      document.addEventListener('mousedown', handleClickOutsideUserModal);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideUserModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideUserModal);
    };
  }, [mode, user]);

  // Toggle mode modal
  const handleModeToggle = () => {
    setMode(!mode);
  };

  // Toggle user modal
  const handleUserToggle = () => {
    setUser(!user);
  };

  useEffect(() => {
    const setDarkModePreference = (matches) => {
      setDarkMode(matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    setDarkModePreference(darkModeMediaQuery.matches);

    const darkModeChangeListener = (e) => setDarkModePreference(e.matches);
    darkModeMediaQuery.addListener(darkModeChangeListener);

    return () => darkModeMediaQuery.removeListener(darkModeChangeListener);
  }, []);

  const handleLightModeClick = () => {
    setDarkMode(false);
  };

  const handleDarkModeClick = () => {
    setDarkMode(true);
  };

  const handleSystemModeClick = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDarkMode(prefersDarkMode);
  };

  useEffect(() => {
    // Update document class based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [currentButton, setCurrentButton] = useState(0);
  const buttonsPerClick = 10;

  const buttons = ['All', 'Templates', 'Single Screens', 'Articles'];

  const totalPages = Math.ceil(buttons.length / buttonsPerClick);

  const handleNext = () => {
    setCurrentButton((prevPage) => prevPage + 1);
  };

  const visibleButtons = buttons.slice(
    currentButton * buttonsPerClick,
    currentButton * buttonsPerClick + buttonsPerClick
  );

  // modals
  // Watch for route changes and open modal if on '/login'
  useEffect(() => {
    console.log('Current Path:', location.pathname);
    if (location.pathname === '/login') {
      setLoginModal(true);
    } else {
      setLoginModal(false);
    }
  }, [location.pathname]);

  const openLoginModal = () => {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      loginModal.showModal();
    }
  };

  const closeLoginModal = () => {
    // Use Daisy UI modal method to close modal
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      navigate('/');
      loginModal.close();
    }
  };
  const openProModal = () => {
    // Use Daisy UI modal method to show modal
    const getProModal = document.getElementById('getProModal');
    if (getProModal) {
      getProModal.showModal();
    }
  };

  const closeProModal = () => {
    // Use Daisy UI modal method to close modal
    const getProModal = document.getElementById('getProModal');
    if (getProModal) {
      navigate('/');
      getProModal.close();
    }
  };

  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
  }, []);

  return (
    <>
      {/* laptop or desktop devices */}
      <div
        className={`sticky top-0 py-4 ${
          navState ? 'bg-white dark:bg-dark' : 'bg-transparent'
        } hidden md:flex justify-between items-center z-20`}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="absolute top-1/3 left-5"
          >
            <path
              d="M9.99984 3.41666C6.6312 3.41666 3.90039 6.14746 3.90039 9.51607C3.90039 12.8847 6.6312 15.6155 9.99984 15.6155C13.3684 15.6155 16.0993 12.8847 16.0993 9.51607C16.0993 6.14746 13.3684 3.41666 9.99984 3.41666ZM2.65039 9.51607C2.65039 5.45711 5.94084 2.16666 9.99984 2.16666C14.0588 2.16666 17.3493 5.45711 17.3493 9.51607C17.3493 11.7552 16.3479 13.7604 14.7686 15.1084L16.8931 17.8231C17.1058 18.0949 17.0579 18.4877 16.7861 18.7004C16.5143 18.9132 16.1214 18.8652 15.9088 18.5934L13.7516 15.8371C12.6533 16.4903 11.3704 16.8655 9.99984 16.8655C5.94084 16.8655 2.65039 13.5751 2.65039 9.51607Z"
              className="fill-dark dark:fill-secondary"
            />
          </svg>
          <input
            onClick={() => document.getElementById('my_modal_3').showModal()}
            className="py-[14px] pl-11
           pr-5 lg:w-[400px] rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary"
            type="text"
            placeholder="Search...."
          />
        </div>

        <div className="flex items-center gap-4">
          {/* mode section laptop or desktop devices */}
          <div className="relative" onClick={handleModeToggle}>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={() => setMode(!mode)}
              >
                <path
                  d="M10.53 3.67386C10.3735 3.70204 10.1662 3.76462 9.80484 3.87607C6.33418 4.94645 3.81348 8.17984 3.81348 12C3.81348 16.6944 7.61906 20.5 12.3135 20.5C15.1538 20.5 17.6688 19.1077 19.2136 16.9649C19.4062 16.6977 19.5092 16.5525 19.5719 16.4371C19.6192 16.3503 19.6162 16.3284 19.6158 16.3254C19.6155 16.2779 19.5719 16.1795 19.5358 16.1432C19.5228 16.1365 19.4784 16.1175 19.3707 16.0957C19.1887 16.0589 18.9367 16.0334 18.524 15.9933C14.2517 15.5777 11.7822 14.0061 10.6361 11.8104C9.51389 9.66028 9.78163 7.13137 10.4714 5.0388C10.6285 4.5621 10.7289 4.25496 10.7812 4.02613C10.8134 3.88544 10.8153 3.82092 10.815 3.8016C10.7898 3.74658 10.7248 3.68284 10.6718 3.66306C10.6718 3.66305 10.6718 3.66309 10.6718 3.66306C10.671 3.66273 10.668 3.66136 10.6554 3.66086C10.6377 3.66015 10.6003 3.66122 10.53 3.67386ZM10.2643 2.19759C10.5532 2.14558 10.8669 2.13474 11.1965 2.25782C11.6703 2.43473 12.0675 2.83967 12.2353 3.31679C12.3643 3.68377 12.3138 4.05303 12.2435 4.36062C12.1735 4.66649 12.0499 5.04126 11.907 5.47479L11.896 5.50836C11.2637 7.42658 11.1135 9.48312 11.9659 11.1163C12.7946 12.7039 14.6925 14.1135 18.6692 14.5003L18.7041 14.5037C19.0708 14.5393 19.4013 14.5715 19.6684 14.6255C19.9529 14.6832 20.2632 14.7827 20.5282 15.0182C20.8834 15.3338 21.1134 15.8425 21.1158 16.3177C21.1173 16.642 21.0214 16.9115 20.8897 17.1537C20.7759 17.363 20.615 17.5861 20.4511 17.8133L20.4303 17.8421C18.6158 20.3591 15.6563 22 12.3135 22C6.79063 22 2.31348 17.5229 2.31348 12C2.31348 7.50324 5.28101 3.70153 9.36277 2.44269C9.37466 2.43902 9.38652 2.43536 9.39836 2.43171C9.71138 2.33512 10.0071 2.24389 10.2643 2.19759Z"
                  className="fill-dark dark:fill-textSecondary"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="cursor-pointer"
                onClick={() => setMode(!mode)}
              >
                <path
                  d="M12 2.5C12.4142 2.5 12.75 2.83579 12.75 3.25V5.68421C12.75 6.09842 12.4142 6.43421 12 6.43421C11.5858 6.43421 11.25 6.09842 11.25 5.68421V3.25C11.25 2.83579 11.5858 2.5 12 2.5ZM4.92868 5.42892C5.22157 5.13602 5.69645 5.13602 5.98934 5.42892L7.35704 6.79662C7.64993 7.08951 7.64993 7.56438 7.35704 7.85728C7.06415 8.15017 6.58927 8.15017 6.29638 7.85728L4.92868 6.48958C4.63579 6.19668 4.63579 5.72181 4.92868 5.42892ZM19.0704 5.42892C19.3633 5.72181 19.3633 6.19668 19.0704 6.48958L17.7027 7.85728C17.4098 8.15017 16.9349 8.15017 16.642 7.85728C16.3491 7.56438 16.3491 7.08951 16.642 6.79662L18.0097 5.42892C18.3026 5.13602 18.7775 5.13602 19.0704 5.42892ZM7.35526 12.5C7.35526 9.93478 9.43478 7.85526 12 7.85526C14.5652 7.85526 16.6447 9.93478 16.6447 12.5C16.6447 15.0652 14.5652 17.1447 12 17.1447C9.43478 17.1447 7.35526 15.0652 7.35526 12.5ZM12 9.35526C10.2632 9.35526 8.85526 10.7632 8.85526 12.5C8.85526 14.2368 10.2632 15.6447 12 15.6447C13.7368 15.6447 15.1447 14.2368 15.1447 12.5C15.1447 10.7632 13.7368 9.35526 12 9.35526ZM2 12.5C2 12.0858 2.33579 11.75 2.75 11.75H5.18421C5.59842 11.75 5.93421 12.0858 5.93421 12.5C5.93421 12.9142 5.59842 13.25 5.18421 13.25H2.75C2.33579 13.25 2 12.9142 2 12.5ZM18.0658 12.5C18.0658 12.0858 18.4016 11.75 18.8158 11.75H21.25C21.6642 11.75 22 12.0858 22 12.5C22 12.9142 21.6642 13.25 21.25 13.25H18.8158C18.4016 13.25 18.0658 12.9142 18.0658 12.5ZM16.6576 17.1571C16.9505 16.8642 17.4254 16.8642 17.7183 17.1571L19.0713 18.5102C19.3642 18.803 19.3642 19.2779 19.0713 19.5708C18.7784 19.8637 18.3035 19.8637 18.0106 19.5708L16.6576 18.2178C16.3647 17.9249 16.3647 17.45 16.6576 17.1571ZM7.34242 17.1574C7.63531 17.4503 7.63531 17.9251 7.34242 18.218L5.98939 19.571C5.6965 19.8639 5.22163 19.8639 4.92873 19.571C4.63584 19.2782 4.63584 18.8033 4.92873 18.5104L6.28176 17.1574C6.57465 16.8645 7.04953 16.8645 7.34242 17.1574ZM12 18.5658C12.4142 18.5658 12.75 18.9016 12.75 19.3158V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.3158C11.25 18.9016 11.5858 18.5658 12 18.5658Z"
                  className="fill-dark dark:fill-textSecondary"
                />
              </svg>
            )}
          </div>
          <Link to="/login" onClick={openLoginModal} className="btn_primary_s">
            Log in
          </Link>
          <div>
            <button onClick={openProModal} className="btn_primary_a">
              Get Pro
            </button>
          </div>
          {/* user sections */}
          <div className="relative" onClick={handleUserToggle}>
            <button
              onClick={() => setUser(!user)}
              className="btn_primary_s group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12.5713 4C10.5625 4 8.93406 5.62845 8.93406 7.63724C8.93406 9.64603 10.5625 11.2745 12.5713 11.2745C14.5801 11.2745 16.2085 9.64603 16.2085 7.63724C16.2085 5.62845 14.5801 4 12.5713 4ZM7.43406 7.63724C7.43406 4.80002 9.73408 2.5 12.5713 2.5C15.4085 2.5 17.7085 4.80002 17.7085 7.63724C17.7085 10.4745 15.4085 12.7745 12.5713 12.7745C9.73408 12.7745 7.43406 10.4745 7.43406 7.63724ZM9.7537 14.5461H15.3902C16.4823 14.5461 17.3478 14.5461 18.0454 14.6031C18.7588 14.6614 19.3624 14.783 19.9136 15.0638C20.8074 15.5192 21.534 16.2459 21.9894 17.1397C22.2709 17.692 22.3921 18.3012 22.4502 19.0221C22.5072 19.7283 22.5072 20.6069 22.5072 21.7172V21.75C22.5072 22.1642 22.1714 22.5 21.7572 22.5C21.3429 22.5 21.0072 22.1642 21.0072 21.75C21.0072 20.5996 21.0066 19.7815 20.9551 19.1426C20.9042 18.5116 20.8075 18.1239 20.6529 17.8206C20.3413 17.2091 19.8442 16.7119 19.2326 16.4003C18.9282 16.2452 18.5439 16.1488 17.9233 16.0981C17.2939 16.0467 16.4896 16.0461 15.3572 16.0461H9.78672C8.65424 16.0461 7.84998 16.0467 7.2206 16.0981C6.59997 16.1488 6.21572 16.2452 5.91125 16.4003C5.29972 16.7119 4.80254 17.2091 4.49095 17.8206C4.33643 18.1239 4.23966 18.5116 4.18879 19.1426C4.13729 19.7815 4.13672 20.5996 4.13672 21.75C4.13672 22.1642 3.80093 22.5 3.38672 22.5C2.97251 22.5 2.63672 22.1642 2.63672 21.75V21.7172C2.63671 20.6069 2.63671 19.7283 2.69364 19.0221C2.75176 18.3012 2.87298 17.692 3.15444 17.1397C3.60984 16.2459 4.33649 15.5192 5.23026 15.0638C5.78144 14.783 6.38506 14.6614 7.09845 14.6031C7.79607 14.5461 8.66156 14.5461 9.7537 14.5461Z"
                  className="fill-primary dark:fill-secondary dark:group-hover:fill-secondary"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile devices */}
      <div className="md:hidden py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="flex items-center gap-4">
            {/* mode section */}
            <div>
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="cursor-pointer"
                  onClick={() => setMode(!mode)}
                >
                  <path
                    d="M10.53 3.67386C10.3735 3.70204 10.1662 3.76462 9.80484 3.87607C6.33418 4.94645 3.81348 8.17984 3.81348 12C3.81348 16.6944 7.61906 20.5 12.3135 20.5C15.1538 20.5 17.6688 19.1077 19.2136 16.9649C19.4062 16.6977 19.5092 16.5525 19.5719 16.4371C19.6192 16.3503 19.6162 16.3284 19.6158 16.3254C19.6155 16.2779 19.5719 16.1795 19.5358 16.1432C19.5228 16.1365 19.4784 16.1175 19.3707 16.0957C19.1887 16.0589 18.9367 16.0334 18.524 15.9933C14.2517 15.5777 11.7822 14.0061 10.6361 11.8104C9.51389 9.66028 9.78163 7.13137 10.4714 5.0388C10.6285 4.5621 10.7289 4.25496 10.7812 4.02613C10.8134 3.88544 10.8153 3.82092 10.815 3.8016C10.7898 3.74658 10.7248 3.68284 10.6718 3.66306C10.6718 3.66305 10.6718 3.66309 10.6718 3.66306C10.671 3.66273 10.668 3.66136 10.6554 3.66086C10.6377 3.66015 10.6003 3.66122 10.53 3.67386ZM10.2643 2.19759C10.5532 2.14558 10.8669 2.13474 11.1965 2.25782C11.6703 2.43473 12.0675 2.83967 12.2353 3.31679C12.3643 3.68377 12.3138 4.05303 12.2435 4.36062C12.1735 4.66649 12.0499 5.04126 11.907 5.47479L11.896 5.50836C11.2637 7.42658 11.1135 9.48312 11.9659 11.1163C12.7946 12.7039 14.6925 14.1135 18.6692 14.5003L18.7041 14.5037C19.0708 14.5393 19.4013 14.5715 19.6684 14.6255C19.9529 14.6832 20.2632 14.7827 20.5282 15.0182C20.8834 15.3338 21.1134 15.8425 21.1158 16.3177C21.1173 16.642 21.0214 16.9115 20.8897 17.1537C20.7759 17.363 20.615 17.5861 20.4511 17.8133L20.4303 17.8421C18.6158 20.3591 15.6563 22 12.3135 22C6.79063 22 2.31348 17.5229 2.31348 12C2.31348 7.50324 5.28101 3.70153 9.36277 2.44269C9.37466 2.43902 9.38652 2.43536 9.39836 2.43171C9.71138 2.33512 10.0071 2.24389 10.2643 2.19759Z"
                    className="fill-dark dark:fill-textSecondary"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="cursor-pointer"
                  onClick={() => setMode(!mode)}
                >
                  <path
                    d="M12 2.5C12.4142 2.5 12.75 2.83579 12.75 3.25V5.68421C12.75 6.09842 12.4142 6.43421 12 6.43421C11.5858 6.43421 11.25 6.09842 11.25 5.68421V3.25C11.25 2.83579 11.5858 2.5 12 2.5ZM4.92868 5.42892C5.22157 5.13602 5.69645 5.13602 5.98934 5.42892L7.35704 6.79662C7.64993 7.08951 7.64993 7.56438 7.35704 7.85728C7.06415 8.15017 6.58927 8.15017 6.29638 7.85728L4.92868 6.48958C4.63579 6.19668 4.63579 5.72181 4.92868 5.42892ZM19.0704 5.42892C19.3633 5.72181 19.3633 6.19668 19.0704 6.48958L17.7027 7.85728C17.4098 8.15017 16.9349 8.15017 16.642 7.85728C16.3491 7.56438 16.3491 7.08951 16.642 6.79662L18.0097 5.42892C18.3026 5.13602 18.7775 5.13602 19.0704 5.42892ZM7.35526 12.5C7.35526 9.93478 9.43478 7.85526 12 7.85526C14.5652 7.85526 16.6447 9.93478 16.6447 12.5C16.6447 15.0652 14.5652 17.1447 12 17.1447C9.43478 17.1447 7.35526 15.0652 7.35526 12.5ZM12 9.35526C10.2632 9.35526 8.85526 10.7632 8.85526 12.5C8.85526 14.2368 10.2632 15.6447 12 15.6447C13.7368 15.6447 15.1447 14.2368 15.1447 12.5C15.1447 10.7632 13.7368 9.35526 12 9.35526ZM2 12.5C2 12.0858 2.33579 11.75 2.75 11.75H5.18421C5.59842 11.75 5.93421 12.0858 5.93421 12.5C5.93421 12.9142 5.59842 13.25 5.18421 13.25H2.75C2.33579 13.25 2 12.9142 2 12.5ZM18.0658 12.5C18.0658 12.0858 18.4016 11.75 18.8158 11.75H21.25C21.6642 11.75 22 12.0858 22 12.5C22 12.9142 21.6642 13.25 21.25 13.25H18.8158C18.4016 13.25 18.0658 12.9142 18.0658 12.5ZM16.6576 17.1571C16.9505 16.8642 17.4254 16.8642 17.7183 17.1571L19.0713 18.5102C19.3642 18.803 19.3642 19.2779 19.0713 19.5708C18.7784 19.8637 18.3035 19.8637 18.0106 19.5708L16.6576 18.2178C16.3647 17.9249 16.3647 17.45 16.6576 17.1571ZM7.34242 17.1574C7.63531 17.4503 7.63531 17.9251 7.34242 18.218L5.98939 19.571C5.6965 19.8639 5.22163 19.8639 4.92873 19.571C4.63584 19.2782 4.63584 18.8033 4.92873 18.5104L6.28176 17.1574C6.57465 16.8645 7.04953 16.8645 7.34242 17.1574ZM12 18.5658C12.4142 18.5658 12.75 18.9016 12.75 19.3158V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.3158C11.25 18.9016 11.5858 18.5658 12 18.5658Z"
                    className="fill-dark dark:fill-textSecondary"
                  />
                </svg>
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              onClick={handleClick}
            >
              <path
                d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5H32C40.5604 0.5 47.5 7.43959 47.5 16V32C47.5 40.5604 40.5604 47.5 32 47.5H16C7.43959 47.5 0.5 40.5604 0.5 32V16Z"
                stroke="#F0F0F0"
              />
              <path
                d="M14 24C14 22.3086 15.3711 20.9375 17.0625 20.9375C18.7539 20.9375 20.125 22.3086 20.125 24C20.125 25.6914 18.7539 27.0625 17.0625 27.0625C15.3711 27.0625 14 25.6914 14 24ZM17.0625 22.4375C16.1996 22.4375 15.5 23.1371 15.5 24C15.5 24.8629 16.1996 25.5625 17.0625 25.5625C17.9254 25.5625 18.625 24.8629 18.625 24C18.625 23.1371 17.9254 22.4375 17.0625 22.4375ZM20.9375 24C20.9375 22.3086 22.3086 20.9375 24 20.9375C25.6914 20.9375 27.0625 22.3086 27.0625 24C27.0625 25.6914 25.6914 27.0625 24 27.0625C22.3086 27.0625 20.9375 25.6914 20.9375 24ZM24 22.4375C23.1371 22.4375 22.4375 23.1371 22.4375 24C22.4375 24.8629 23.1371 25.5625 24 25.5625C24.8629 25.5625 25.5625 24.8629 25.5625 24C25.5625 23.1371 24.8629 22.4375 24 22.4375ZM27.875 24C27.875 22.3086 29.2461 20.9375 30.9375 20.9375C32.6289 20.9375 34 22.3086 34 24C34 25.6914 32.6289 27.0625 30.9375 27.0625C29.2461 27.0625 27.875 25.6914 27.875 24ZM30.9375 22.4375C30.0746 22.4375 29.375 23.1371 29.375 24C29.375 24.8629 30.0746 25.5625 30.9375 25.5625C31.8004 25.5625 32.5 24.8629 32.5 24C32.5 23.1371 31.8004 22.4375 30.9375 22.4375Z"
                className="fill-dark dark:fill-textSecondary"
              />
            </svg>
          </div>
        </div>
        <div className="relative mt-4">
          <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
          <input
            onClick={() => document.getElementById('my_modal_3').showModal()}
            className="py-[14px] pl-11
           pr-5 w-full rounded-full bg-bgSecondary text-textPrimary outline-none dark:bg-darkSecondary"
            type="text"
            placeholder="Search...."
          />
        </div>
      </div>

      {/* mobile device slider */}
      <div
        className={`${
          isActive ? 'active grid gap-5' : 'closed'
        } offcanvas w-[250px] p-4 md:hidden h-full fixed z-50 top-0 right-[-250px] transition-all dark:bg-dark`}
      >
        <div className="flex justify-between">
          <img src={logoName} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={handleClose}
          >
            <path
              d="M11.9694 2H12.0306C13.52 2 14.6793 1.99999 15.6122 2.06889C16.559 2.13881 17.3317 2.28267 18.0358 2.60167C19.5274 3.27752 20.7225 4.47259 21.3983 5.96423C21.7173 6.66827 21.8612 7.44105 21.9311 8.38781C22 9.32065 22 10.48 22 11.9694V12.0306C22 13.52 22 14.6793 21.9311 15.6122C21.8612 16.559 21.7173 17.3317 21.3983 18.0358C20.7225 19.5274 19.5274 20.7225 18.0358 21.3983C17.3317 21.7173 16.559 21.8612 15.6122 21.9311C14.6793 22 13.52 22 12.0306 22H11.9694C10.48 22 9.32065 22 8.38781 21.9311C7.44105 21.8612 6.66827 21.7173 5.96423 21.3983C4.47259 20.7225 3.27752 19.5274 2.60167 18.0358C2.28267 17.3317 2.13881 16.559 2.06889 15.6122C1.99999 14.6793 2 13.52 2 12.0306V11.9694C2 10.48 1.99999 9.32066 2.06889 8.38781C2.13881 7.44105 2.28267 6.66827 2.60167 5.96423C3.27752 4.47259 4.47259 3.27752 5.96423 2.60167C6.66827 2.28267 7.44105 2.13881 8.38781 2.06889C9.32066 1.99999 10.48 2 11.9694 2ZM8.49829 3.56482C7.63466 3.6286 7.05961 3.75215 6.58329 3.96796C5.42313 4.49363 4.49363 5.42313 3.96796 6.58329C3.75215 7.05961 3.6286 7.63466 3.56482 8.49829C3.50048 9.36945 3.5 10.4736 3.5 12C3.5 13.5264 3.50048 14.6306 3.56482 15.5017C3.6286 16.3653 3.75215 16.9404 3.96796 17.4167C4.49363 18.5769 5.42313 19.5064 6.58329 20.032C7.05961 20.2479 7.63466 20.3714 8.49829 20.4352C9.36945 20.4995 10.4736 20.5 12 20.5C13.5264 20.5 14.6306 20.4995 15.5017 20.4352C16.3653 20.3714 16.9404 20.2479 17.4167 20.032C18.5769 19.5064 19.5064 18.5769 20.032 17.4167C20.2479 16.9404 20.3714 16.3653 20.4352 15.5017C20.4995 14.6306 20.5 13.5264 20.5 12C20.5 10.4736 20.4995 9.36945 20.4352 8.49829C20.3714 7.63466 20.2479 7.05961 20.032 6.58329C19.5064 5.42313 18.5769 4.49363 17.4167 3.96796C16.9404 3.75215 16.3653 3.6286 15.5017 3.56482C14.6306 3.50048 13.5264 3.5 12 3.5C10.4736 3.5 9.36945 3.50048 8.49829 3.56482ZM8.99478 8.99481C9.28767 8.70191 9.76254 8.70191 10.0554 8.99481L12 10.9394L13.9446 8.99481C14.2375 8.70191 14.7123 8.70191 15.0052 8.99481C15.2981 9.2877 15.2981 9.76257 15.0052 10.0555L13.0607 12L15.0052 13.9446C15.2981 14.2374 15.2981 14.7123 15.0052 15.0052C14.7123 15.2981 14.2374 15.2981 13.9445 15.0052L12 13.0607L10.0555 15.0052C9.76258 15.2981 9.28771 15.2981 8.99482 15.0052C8.70192 14.7123 8.70192 14.2374 8.99482 13.9446L10.9393 12L8.99478 10.0555C8.70188 9.76257 8.70188 9.2877 8.99478 8.99481Z"
              className="fill-darkSecondary dark:fill-secondary"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/login"
              onClick={openLoginModal}
              className="btn_primary_s"
            >
              Log in
            </Link>
          </div>
          <div>
            <button onClick={openProModal} className="btn_primary_a">
              Get Pro
            </button>
          </div>
        </div>

        {/* links */}
        <div>
          <div className="grid gap-7">
            <div className="grid gap-2 text-textSecondary">
              <ActiveLink to="/">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.97449 1.66666H10.0255C11.2667 1.66666 12.2327 1.66665 13.0102 1.72406C13.7991 1.78233 14.4431 1.90221 15.0298 2.16805C16.2728 2.73126 17.2687 3.72715 17.8319 4.97018C18.0977 5.55689 18.2177 6.20086 18.2759 6.98983C18.3333 7.7672 18.3333 8.73332 18.3333 9.97449V10.0255C18.3333 11.2667 18.3333 12.2327 18.2759 13.0102C18.2177 13.7991 18.0977 14.4431 17.8319 15.0298C17.2687 16.2728 16.2728 17.2687 15.0298 17.8319C14.4431 18.0977 13.7991 18.2177 13.0102 18.2759C12.2327 18.3333 11.2667 18.3333 10.0255 18.3333H9.97449C8.73332 18.3333 7.7672 18.3333 6.98983 18.2759C6.20086 18.2177 5.55688 18.0977 4.97018 17.8319C3.72715 17.2687 2.73126 16.2728 2.16805 15.0298C1.90221 14.4431 1.78233 13.7991 1.72406 13.0102C1.66665 12.2327 1.66666 11.2667 1.66666 10.0255V9.97449C1.66666 8.73332 1.66665 7.76721 1.72406 6.98983C1.78233 6.20086 1.90221 5.55688 2.16805 4.97018C2.73126 3.72715 3.72715 2.73126 4.97018 2.16805C5.55689 1.90221 6.20086 1.78233 6.98983 1.72406C7.76721 1.66665 8.73332 1.66666 9.97449 1.66666ZM7.0819 2.97066C6.36221 3.02382 5.883 3.12678 5.48607 3.30662C4.51927 3.74468 3.74468 4.51927 3.30663 5.48607C3.14459 5.84368 3.04496 6.2681 2.98796 6.87499H9.37499V2.91696C8.41766 2.91836 7.68319 2.92626 7.0819 2.97066ZM10.625 2.91696V6.87499H17.012C16.955 6.2681 16.8554 5.84369 16.6933 5.48607C16.2553 4.51927 15.4807 3.74468 14.5139 3.30663C14.117 3.12678 13.6377 3.02382 12.9181 2.97067C12.3168 2.92626 11.5823 2.91836 10.625 2.91696ZM17.0729 8.12499H10.625V11.875H17.0729C17.0832 11.3463 17.0833 10.7313 17.0833 9.99999C17.0833 9.26866 17.0832 8.65366 17.0729 8.12499ZM17.012 13.125H10.625V17.083C11.5823 17.0817 12.3168 17.0737 12.9181 17.0293C13.6377 16.9762 14.117 16.8732 14.5139 16.6933C15.4807 16.2553 16.2553 15.4807 16.6933 14.5139C16.8554 14.1563 16.955 13.7319 17.012 13.125ZM9.37499 17.083V13.125H2.98796C3.04496 13.7319 3.14459 14.1563 3.30662 14.5139C3.74468 15.4807 4.51927 16.2553 5.48607 16.6933C5.883 16.8732 6.36221 16.9762 7.0819 17.0293C7.68319 17.0737 8.41766 17.0817 9.37499 17.083ZM2.92709 11.875H9.37499V8.12499H2.92709C2.91679 8.65366 2.91666 9.26866 2.91666 9.99999C2.91666 10.7313 2.91679 11.3463 2.92709 11.875Z"
                      className="fill-textSecondary"
                    />
                  </svg>
                  <button className="text-h6">Discover</button>
                </div>
              </ActiveLink>
              <ActiveLink to="/ui-kits">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={uiKitsIcon} alt="" />
                  <button className="text-h6">UI Kits</button>
                </div>
              </ActiveLink>
              <ActiveLink to="/templates">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={screensIcon} alt="" />
                  <button className="text-h6">Templates</button>
                </div>
              </ActiveLink>
              <ActiveLink to="/articles">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={articlesIcon} alt="" />
                  <button className="text-h6">Articles</button>
                </div>
              </ActiveLink>
              <ActiveLink to="/sponsor">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={sponsoreIcon} alt="" />
                  <button className="text-h6 text-nowrap">
                    Become Sponsor
                  </button>
                </div>
              </ActiveLink>
              <ActiveLink to="/hire">
                <div className="flex gap-2 px-4 py-2 items-center">
                  <img src={hireIcon} alt="" />
                  <button className="text-h6 text-nowrap">
                    Hire Flutter Dev
                  </button>
                </div>
              </ActiveLink>
            </div>

            {/* All screens link */}
            <div>
              <h4 className="text-h6 text-textPrimary pl-4 pb-2 dark:text-white">
                All Screens
              </h4>
              <div className="grid gap-2 text-textSecondary overflow-y-auto max-h-[400px]">
                <ActiveLink to="/sign-in">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">Sign in</button>
                    <h3 className="text-h6">10</h3>
                  </div>
                </ActiveLink>
                <ActiveLink to="/chat">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">Chat</button>
                    <h3 className="text-h6">5</h3>
                  </div>
                </ActiveLink>
                <ActiveLink to="/onboarding">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">Onboarding</button>
                    <h3 className="text-h6">18</h3>
                  </div>
                </ActiveLink>
                <ActiveLink to="/e-commerce">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">E-commerce</button>
                    <h3 className="text-h6">9</h3>
                  </div>
                </ActiveLink>
                <ActiveLink to="/checkout">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">Checkout</button>
                    <h3 className="text-h6">10</h3>
                  </div>
                </ActiveLink>
                <ActiveLink to="/error">
                  <div className="flex justify-between py-2 pl-6 pr-4 items-center">
                    <button className="text-h6">Error</button>
                    <h3 className="text-h6">16</h3>
                  </div>
                </ActiveLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* input search filed  modal */}
      <SearchModal
        currentButton={currentButton}
        totalPages={totalPages}
        handleNext={handleNext}
        visibleButtons={visibleButtons}
      />

      {/* mode modal */}
      <div ref={modeModalRef} className="relative">
        <ModeModal
          mode={mode}
          handleLightModeClick={handleLightModeClick}
          handleDarkModeClick={handleDarkModeClick}
          handleSystemModeClick={handleSystemModeClick}
        />
      </div>
      {/* login modal */}
      <LoginModal isOpen={isLoginModal} onClose={closeLoginModal} />
      <GetProModal isOpen={isProModal} onClose={closeProModal} />
      {/* user modal */}
      <div ref={userModalRef}>
        <UserModal user={user} />
      </div>
    </>
  );
};

export default Header;
