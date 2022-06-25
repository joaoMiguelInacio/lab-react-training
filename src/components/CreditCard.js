/* Always avoid using inline styles. Use styles on css files everytime you can. */

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

  const [numbers, setNumbers] = useState(hiddenNumbers);

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
        {/* Instead of repeating the whole tag, just make the src conditional.
        <img
            style={{ width: 65, height: 30, paddingRight: 20 }}
            src={type === `Visa` ? "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499709/Random/visa_pdpag0.png" : "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/master-card_qzu31n.svg"}
            alt={type === `Visa` ? "/public/visa-logo-png-453454.png" : "/public/mastercard-logo-png-453454.png"}
          />
        */}
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
          onClick={() => setNumbers(numbers === hiddenNumbers ? shownNumbers : hiddenNumbers)}
        ></button>
      </p>
      <div style={{ paddingLeft: 20 }}>
        <p style={{ margin: 0 }}>
          Expires{` `}
          {/* So that your code is easier to read, avoid making these math operations inside tags. Do them in variables or funcions and use those here. */}
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
