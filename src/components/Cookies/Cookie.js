import React,{useEffect,useState} from 'react'
import Cookiemodal from '../Modal/Cookiemodal';


const useSessionModal = () => {
  const session = "test";
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => {
    console.log("hideModal");
    const modalKey = "modalSession";
    localStorage.setItem(modalKey, session);
    setShowModal(false);
  };
  useEffect(() => {
    const modalKey = "modalSession";
    const modalSession = localStorage.getItem(modalKey);
    setShowModal(modalSession !== session);
  });
  return [showModal, hideModal];
};



function Cookies() {
    const [showModal, hideModal] = useSessionModal();
    return <h2 onClick={hideModal}>{showModal ? <Cookiemodal/> : null}</h2>;

}



export default Cookies