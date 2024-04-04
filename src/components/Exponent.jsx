const Exponent = ({ num, exponent }) => {
  let expString = String(num);

  for (let i = 0; i < exponent - 1; i++) {
    expString += ` *  ${num}`;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {expString} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
