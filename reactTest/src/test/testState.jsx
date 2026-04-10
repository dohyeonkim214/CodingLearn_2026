import { useState } from 'react'
import Textarea from '../component/textarea.jsx'

export default function TestState() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const textLength = text.length
  const isWarning = textLength >= 41
  const isDisabled = textLength === 0

  return (
    <section
      style={{
        padding: '24px 20px 72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          border: '1px solid #e5e4e7',
          borderRadius: '14px',
          background: '#ffffff',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }}
      >
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
        <strong style={{ minWidth: '32px', textAlign: 'center' }}>{count}</strong>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '20px',
          border: '1px solid #e5e4e7',
          borderRadius: '18px',
          background: '#ffffff',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          boxSizing: 'border-box',
        }}
      >
        <Textarea
          value={text}
          maxLength={50}
          onChange={(event) => setText(event.target.value)}
          placeholder="지금 무슨 일이 일어나고 있나요?"
          rows={5}
          style={{
            width: '100%',
            resize: 'none',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#111827',
            boxSizing: 'border-box',
            background: 'transparent',
          }}
        />

        <div
          style={{
            marginTop: '16px',
            paddingTop: '14px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: '700',
              color: isWarning ? '#dc2626' : '#4b5563',
            }}
          >
            글자 수 {textLength}/50
          </span>

          <button
            type="button"
            disabled={isDisabled}
            style={{
              border: 'none',
              borderRadius: '999px',
              padding: '10px 18px',
              fontSize: '14px',
              fontWeight: '700',
              color: '#ffffff',
              background: isDisabled ? '#9ca3af' : '#2563eb',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.8 : 1,
            }}
          >
            등록
          </button>
        </div>
      </div>
    </section>
  )
}
