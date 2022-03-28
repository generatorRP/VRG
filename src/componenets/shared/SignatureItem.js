import React from 'react';

const CabSignatureItem = ({
  value,
  selected,
  setSelectedRank,
  setSelectedRankImg = null,
}) => {
  return (
    <input
      type='button'
      className={`btn btn-gradient btn-outline-dark text-truncate ${
        selected ? 'active' : ''
      }`}
      value={value}
      onClick={() => {
        setSelectedRank(value);
        if (setSelectedRankImg) {
          (async () => {
            const image = await import(
              `../../assets/images/ems/ranks/${value
                .toLocaleLowerCase()
                .replace(' ', '-')}.png`
            );
            setSelectedRankImg(image.default);
          })();
        }
      }}
    />
  );
};

export default CabSignatureItem;
