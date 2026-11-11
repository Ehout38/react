export default function ClearCartButton({ onClear, disabled }) {
  return <button className="secondary" type="button" onClick={onClear} disabled={disabled}>Clear cart</button>;
}
