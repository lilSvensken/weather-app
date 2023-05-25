import { StatusPopup } from 'features/StatusPopup';
import { useState } from 'react';

export const Tests = () => {
  const [isOpenStatusPopup, setIsOpenStatusPopup] = useState(false);

  const onToggleStatusPopup = (isOpen: boolean) => {
    setIsOpenStatusPopup(isOpen);
  };

  return (
    <div className="pageContent">
      <button onClick={ () => onToggleStatusPopup(true) }>
        Открыть попап
      </button>

      <StatusPopup
        isOpen={ isOpenStatusPopup }
        onClose={ () => onToggleStatusPopup(false) }
      />
    </div>
  );
};

export default Tests;
