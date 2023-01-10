import { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: ReactNode;
};

const Portal = ({ children }: ModalProps) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
  });

  useEffect(() => {
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
