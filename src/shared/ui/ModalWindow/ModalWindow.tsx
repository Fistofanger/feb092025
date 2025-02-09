import './ModalWindow.css';

type ModalWindowProps = {
  active: boolean;
  setActive: (value: boolean) => void;
  children: React.ReactNode;
};

const ModalWindow = ({
  active,
  setActive,
  children,
}: ModalWindowProps): JSX.Element => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
