import React, { useState } from 'react';

function CreditCard(props) {

  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  let hiddenNumbers = `${number}`
    .replace(/[0-9](?=([0-9]{4}))/g, '*')
    .match(/.{1,4}/g)
    .join(' ');

  let shownNumbers = `${number}`
    .match(/.{1,4}/g)
    .join(' ');

  const [numbers, setState] = useState(hiddenNumbers);

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        width: 600,
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      <p
        style={{
          alignSelf: `flex-end`,
        }}
      >
        {type === `Visa` ? (
          <img
            style={{ width: 65, height: 30, paddingRight: 20 }}
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499709/Random/visa_pdpag0.png"
            alt="/public/visa-logo-png-453454.png"
          />
        ) : (
          <img
            style={{ width: 65, height: 30, paddingRight: 20 }}
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/master-card_qzu31n.svg"
            alt="/public/mastercard-logo-png-453454.png"
          />
        )}
      </p>
      <p style={{ fontSize: 40, textAlign: 'center' }}>
        {numbers}
        <button
          style={{
            alignSelf: 'center',
            border: 'none',
            width: 30,
            height: 30,
            backgroundImage: `url(https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-eye-icon-png-image_515473.jpg)`,
            backgroundSize: `contain`,
          }}
          onClick={() => setState(numbers === hiddenNumbers ? shownNumbers : hiddenNumbers)}
        ></button>
      </p>
      <div style={{ paddingLeft: 20 }}>
        <p style={{ margin: 0 }}>
          Expires{` `}
          {expirationMonth.toString().length === 1
            ? `0${expirationMonth}`
            : expirationMonth}
          /{expirationYear} {bank}
        </p>
        <p style={{ marginTop: 0 }}>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
