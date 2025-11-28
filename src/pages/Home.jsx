import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'ایجنت‌های هوشمند گفتاری',
    desc: 'دستیارهای چندزبانه با اتصال به CRM، واتساپ و مرکز تماس برای پاسخ‌گویی ۲۴/۷.',
    badge: 'AI Agents'
  },
  {
    title: 'اتوماسیون هوشمند n8n',
    desc: 'طراحی فلوهای چندمرحله‌ای برای حذف کارهای تکراری مالی، منابع انسانی و پشتیبانی.',
    badge: 'Automation'
  },
  {
    title: 'هوش تجاری و تحلیل داده',
    desc: 'داشبوردهای زنده با پیش‌بینی، کشف الگو و هشداردهی آنی برای مدیران ارشد.',
    badge: 'Data Intelligence'
  }
]

const projects = [
  {
    name: 'اتوماسیون پذیرش بیمه',
    result: 'کاهش ۶۵٪ زمان پردازش پرونده',
    detail: 'ایجنت هوشمند ارزیاب خسارت با اتصال به سامانه بیمه مرکزی و OCR فارسی.',
    tag: 'اتوماسیون اداری'
  },
  {
    name: 'ربات تلگرام فروش B2B',
    result: '۳ برابر رشد لید ماهانه',
    detail: 'گفتگوگر فروش متصل به CRM با اولویت‌بندی و امتیازدهی لحظه‌ای.',
    tag: 'ربات تلگرام'
  },
  {
    name: 'پردازش تصویر خطوط تولید',
    result: '۹۸٪ دقت تشخیص خطا',
    detail: 'بینایی ماشین برای شناسایی نقص قطعات و هشدار آنی به اپراتور.',
    tag: 'پردازش تصویر'
  }
]

export default function Home() {
  const [volume, setVolume] = useState(500)
  const [cost, setCost] = useState(15000000)

  const roi = useMemo(() => {
    const hoursSaved = volume * 0.7
    const monthlyValue = hoursSaved * 90000
    const gain = monthlyValue - cost
    const percent = ((gain / cost) * 100).toFixed(1)
    return { hoursSaved, monthlyValue, gain, percent }
  }, [volume, cost])

  return (
    <div className="container">
      <section className="hero">
        <div>
          <span className="badge soft">پلتفرم جامع هوش مصنوعی سازمانی</span>
          <h1>هوش مصنوعی، نیروی محرکه کسب‌وکار شما</h1>
          <p style={{ color: '#cfc4ff' }}>
            نکسورا استودیو، تیم تخصصی طراحی و پیاده‌سازی ایجنت‌های هوشمند، اتوماسیون و تحلیل داده برای سازمان‌های ایرانی
            با استاندارد امنیتی، مقیاس‌پذیری و پشتیبانی ۲۴/۷.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="btn-primary" to="/services">مشاهده راهکارها</Link>
            <Link className="btn-ghost" to="/portfolio">مشاهده نمونه‌کارها</Link>
          </div>
          <div className="glass card" style={{ marginTop: 20 }}>
            <div className="section-title" style={{ marginBottom: 8 }}>اعتماد شرکت‌های فناوری</div>
            <div className="marquee">
              {[1, 2].map((group) => (
                <div key={group} style={{ display: 'flex', gap: 12, animation: 'marquee 18s linear infinite' }}>
                  <div className="logo-chip">OpenAI</div>
                  <div className="logo-chip">n8n</div>
                  <div className="logo-chip">Python</div>
                  <div className="logo-chip">Postgres</div>
                  <div className="logo-chip">Supabase</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: -40, background: 'radial-gradient(circle at 30% 20%, rgba(180,107,255,0.25), transparent 35%)' }} />
          <div style={{ position: 'relative' }}>
            <div className="badge">پیشنهاد ویژه ۱۴۰۳</div>
            <h3 style={{ marginTop: 12 }}>سکوهای هوشمند آماده بهره‌برداری</h3>
            <ul style={{ color: '#cfc4ff', paddingRight: 18, lineHeight: 1.9 }}>
              <li>استقرار ایجنت صوتی فارسی در کمتر از ۱۰ روز</li>
              <li>اتصال مستقیم به CRM، ERP و دیتابیس شما</li>
              <li>زیرساخت مقیاس‌پذیر و مانیتورینگ ۲۴ ساعته</li>
            </ul>
            <div style={{ marginTop: 16 }}>
              <div className="section-title" style={{ fontSize: 16 }}>ماشین حساب ROI</div>
              <div className="field">
                <label>تعداد تعامل ماهانه</label>
                <input type="range" min="100" max="5000" value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cfc4ff' }}>
                  <span>{volume.toLocaleString('fa-IR')} تماس</span>
                  <span>هدف: ۵۰۰۰</span>
                </div>
              </div>
              <div className="field">
                <label>هزینه ماهانه (ریال)</label>
                <input type="range" min="5000000" max="40000000" step="500000" value={cost} onChange={(e) => setCost(Number(e.target.value))} />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cfc4ff' }}>
                  <span>{cost.toLocaleString('fa-IR')}</span>
                  <span>سقف: ۴۰,۰۰۰,۰۰۰</span>
                </div>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 10 }}>
                <div>
                  <div className="badge soft">ساعت صرفه‌جویی</div>
                  <strong>{roi.hoursSaved.toLocaleString('fa-IR')} ساعت</strong>
                </div>
                <div>
                  <div className="badge soft">بازگشت سرمایه ماهانه</div>
                  <strong>{roi.percent}%</strong>
                </div>
                <div>
                  <div className="badge soft">ارزش مالی</div>
                  <strong>{roi.monthlyValue.toLocaleString('fa-IR')} ریال</strong>
                </div>
                <div>
                  <div className="badge soft">سود خالص</div>
                  <strong>{roi.gain.toLocaleString('fa-IR')} ریال</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <div className="section-title">خدمات برتر نکسورا</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {services.map((s) => (
            <div className="card" key={s.title}>
              <span className="badge">{s.badge}</span>
              <h3>{s.title}</h3>
              <p style={{ color: '#cfc4ff' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <div className="section-title">نمونه پروژه‌های برگزیده</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {projects.map((p) => (
            <div className="card" key={p.name}>
              <div className="badge">{p.tag}</div>
              <h3>{p.name}</h3>
              <p style={{ color: '#cfc4ff' }}>{p.detail}</p>
              <strong style={{ color: '#fff' }}>{p.result}</strong>
              <button className="btn-ghost" style={{ marginTop: 10 }}>نمایش دمو</button>
            </div>
          ))}
        </div>
      </section>

      <section id="consult" className="card" style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
        <div>
          <div className="section-title">درخواست مشاوره رایگان</div>
          <p style={{ color: '#cfc4ff' }}>سناریوی پیشنهادی برای صنعت شما در کمتر از ۴۸ ساعت آماده می‌شود.</p>
          <ul style={{ color: '#cfc4ff', lineHeight: 1.9 }}>
            <li>جلسه ۳۰ دقیقه‌ای با معمار راهکار</li>
            <li>پروتوتایپ سریع با داده‌های تستی</li>
            <li>برآورد هزینه و زمان‌بندی دقیق</li>
          </ul>
        </div>
        <form style={{ display: 'grid', gap: 8 }}>
          <div className="field">
            <label>نام و نام خانوادگی</label>
            <input placeholder="مثال: سارا رضایی" />
          </div>
          <div className="field">
            <label>شماره تماس</label>
            <input placeholder="۰۹۱۲..." />
          </div>
          <div className="field">
            <label>حوزه فعالیت</label>
            <select defaultValue="default">
              <option value="default" disabled>انتخاب کنید</option>
              <option>فین‌تک</option>
              <option>خرده‌فروشی</option>
              <option>صنعت و تولید</option>
              <option>سلامت و بیمه</option>
            </select>
          </div>
          <button className="btn-primary" type="button">ارسال درخواست</button>
        </form>
      </section>
    </div>
  )
}
