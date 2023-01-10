import { Portal } from '../index';
import { ModalProps } from '../../types';

const modal = ({ title, isOpen, onCancel, url, owner }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal__overlay" onClick={onCancel}>
            <div className="modal__window">
              <button className="modal__close" onClick={onCancel} />
              <div className="modal__container">
                <h3 className="modal__title">{title}</h3>
                <div
                  className="modal__image"
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
                <p className="modal__owner">Owner: {owner}</p>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default modal;
