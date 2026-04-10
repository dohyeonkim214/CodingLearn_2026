export default function Textarea({
  value,
  maxLength = 50,
  onChange,
  placeholder,
  rows = 5,
  style,
}) {
  return (
    <textarea
      value={value}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={style}
    />
  )
}