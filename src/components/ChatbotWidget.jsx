import React, { useState } from 'react'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'سلام! من ایجنت هوشمند نکسورا هستم. می‌خوای نمونه‌کارهای مربوط به صنعت خودت رو نشونت بدم؟' }
  ])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const user = { from: 'user', text: input }
    const reply = {
      from: 'bot',
      text: 'پیامت رسید. تیم ما در کمتر از ۵ دقیقه بهترین سناریو را بر اساس صنعت شما ارسال می‌کند.'
    }
    setMessages((prev) => [...prev, user, reply])
    setInput('')
  }

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen((v) => !v)}>
        <span style={{ fontWeight: 800 }}>ایجنت نکسورا</span>
        <small style={{ color: '#f3e8ff' }}>{open ? 'بستن' : 'گفتگو'}</small>
      </button>
      {open && (
        <div className="chatbot-panel card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontWeight: 800 }}>دستیار هوشمند</div>
              <small style={{ color: '#cfc4ff' }}>پاسخ‌گویی سریع و پیشنهادی</small>
            </div>
            <span className="badge">فعال</span>
          </div>
          <div className="messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`message ${m.from === 'user' ? 'user' : ''}`}>
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '10px 14px' }}>
              ارسال
            </button>
          </form>
        </div>
      )}
    </>
  )
}
