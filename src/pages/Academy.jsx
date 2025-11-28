import React from 'react'

const videos = [
  { title: 'معماری ایجنت سازمانی', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'اتوماسیون با n8n', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
]

const articles = [
  { title: 'راهنمای انتخاب ایجنت برای مرکز تماس', desc: 'بررسی معیارهای دقت، سرعت و یکپارچگی با CRM.' },
  { title: 'چک‌لیست امنیتی برای پروژه‌های هوش مصنوعی', desc: 'الزامات حریم خصوصی، ذخیره‌سازی و کنترل دسترسی.' },
  { title: 'ROI واقعی اتوماسیون در سازمان ایرانی', desc: 'مدل محاسبه بازگشت سرمایه با داده‌های بومی.' }
]

export default function Academy() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">آکادمی نکسورا</div>
      <p style={{ color: '#cfc4ff', maxWidth: 760 }}>
        محتواهای کاربردی برای تیم‌های فناوری، عملیات و مدیران جهت اتخاذ تصمیم هوشمندانه در سرمایه‌گذاری هوش مصنوعی.
      </p>

      <div className="grid" style={{ marginTop: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {videos.map((v) => (
          <div className="card" key={v.title}>
            <div className="badge">ویدیو</div>
            <h3>{v.title}</h3>
            <div style={{ position: 'relative', paddingBottom: '56%', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                title={v.title}
                src={v.url}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 30 }}>
        <div className="section-title">مقالات کوتاه</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {articles.map((a) => (
            <div key={a.title} className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h4>{a.title}</h4>
              <p style={{ color: '#cfc4ff' }}>{a.desc}</p>
              <a className="btn-ghost" href="#">ادامه</a>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 14 }}>
        <div>
          <div className="section-title">خبرنامه</div>
          <p style={{ color: '#cfc4ff' }}>بروزرسانی‌های محصولات، فرصت‌های شغلی و رویدادهای فنی را زودتر دریافت کنید.</p>
        </div>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <input placeholder="ایمیل سازمانی" style={{ flex: 1, minWidth: 200 }} />
          <button className="btn-primary" type="button">عضویت</button>
        </form>
      </div>
    </div>
  )
}
