import React, { useState } from 'react'

const projects = [
  {
    category: 'ربات تلگرام',
    name: 'بات فروش صنعتی',
    challenge: 'نیاز به پاسخ‌گویی سریع به استعلام قیمت.',
    solution: 'ایجنت تلگرام متصل به انبار و CRM با محاسبه لحظه‌ای قیمت.',
    result: '۳ برابر رشد لید و کاهش ۷۰٪ تماس پشتیبانی.',
    demo: 'demo/nexora-telegram'
  },
  {
    category: 'اتوماسیون اداری',
    name: 'اتوماسیون مرخصی و حقوق',
    challenge: 'فرآیند دستی و زمان‌بر HR.',
    solution: 'فلو n8n با اتصال به حضور و غیاب، پیامک و ERP.',
    result: '۵۰٪ کاهش هزینه عملیاتی.',
    demo: 'demo/nexora-hr'
  },
  {
    category: 'پردازش تصویر',
    name: 'کیفیت خط تولید',
    challenge: 'تشخیص نقص قطعات در لحظه.',
    solution: 'مدل Vision با هشدار آنی به SCADA و تعمیرات.',
    result: '۹۸٪ دقت تشخیص و کاهش ضایعات.',
    demo: 'demo/vision'
  }
]

const filters = ['همه', 'ربات تلگرام', 'اتوماسیون اداری', 'پردازش تصویر']

export default function Portfolio() {
  const [active, setActive] = useState('همه')
  const filtered = active === 'همه' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">نمونه‌کارها</div>
      <p style={{ color: '#cfc4ff' }}>منتخب پروژه‌های پیاده‌سازی شده برای سازمان‌های ایرانی.</p>

      <div className="filter-group" style={{ margin: '14px 0 22px' }}>
        {filters.map((f) => (
          <button key={f} className={`filter-btn ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {filtered.map((p) => (
          <div className="card" key={p.name}>
            <div className="badge">{p.category}</div>
            <h3>{p.name}</h3>
            <p style={{ color: '#cfc4ff' }}>چالش: {p.challenge}</p>
            <p style={{ color: '#cfc4ff' }}>راهکار: {p.solution}</p>
            <strong>{p.result}</strong>
            <button className="btn-ghost" style={{ marginTop: 10 }}>مشاهده دمو</button>
          </div>
        ))}
      </div>
    </div>
  )
}
