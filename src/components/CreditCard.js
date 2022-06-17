import React, { useState } from 'react';

function CreditCard(props) {
  let hiddenNumbers = `${props.number}`
    .replace(/[0-9](?=([0-9]{4}))/g, '*')
    .match(/.{1,4}/g)
    .join(' ');

  let variable = 'a';

  function hideNumbers() {
    hiddenNumbers = `${props.number}`
      .replace(/[0-9](?=([0-9]{4}))/g, '*')
      .match(/.{1,4}/g)
      .join(' ');
    variable = 'a';
    console.log(variable);
    setState(hiddenNumbers);
  }

  function showMeTheMoney() {
    let shownNumbers = `${props.number}`
        .match(/.{1,4}/g)
        .join(' ');
    variable = 'b';
    console.log(variable);
    setState(shownNumbers);
  }

  const [numbers, setState] = useState(hiddenNumbers);

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        width: 600,
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
      }}
    >
      <p
        style={{
          alignSelf: `flex-end`,
        }}
      >
        {props.type === `Visa` ? (
          <img
            style={{ width: 65, height: 30, paddingRight: 20 }}
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1655465085/Random/visa-logo-png-453454_wnxju7.png"
            alt="/public/visa-logo-png-453454.png"
          />
        ) : (
          <img
            style={{ width: 65, height: 30, paddingRight: 20 }}
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1655465084/Random/mastercard-logo-png-453454_cowb35.png"
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
          onClick={() => {
            variable === 'a' ? showMeTheMoney() : hideNumbers();
          }}
        ></button>
      </p>
      <div style={{ paddingLeft: 20 }}>
        <p style={{ margin: 0 }}>
          Expires{` `}
          {props.expirationMonth.toString().length === 1
            ? `0${props.expirationMonth}`
            : props.expirationMonth}
          /{props.expirationYear} {props.bank}
        </p>
        <p style={{ marginTop: 0 }}>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
