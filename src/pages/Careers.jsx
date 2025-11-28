import React from 'react'

const roles = [
  { title: 'مهندس LLM', type: 'تمام وقت', location: 'تهران / ریموت', skills: 'Python, LangChain, Vector DB', link: '#' },
  { title: 'مهندس اتوماسیون n8n', type: 'تمام وقت', location: 'تهران', skills: 'n8n, DevOps, Monitoring', link: '#' },
  { title: 'تحلیلگر کسب‌وکار AI', type: 'پاره وقت', location: 'ریموت', skills: 'Product Discovery, Analytics', link: '#' }
]

export default function Careers() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">فرصت‌های شغلی</div>
      <p style={{ color: '#cfc4ff', maxWidth: 720 }}>
        اگر به ساخت محصولات هوش مصنوعی در سطح سازمانی علاقه‌مندید، به تیم نکسورا بپیوندید. فرهنگ ما مبتنی بر یادگیری مستمر، بازخورد
        شفاف و مالکیت end-to-end است.
      </p>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="section-title">فضای کاری</div>
        <p style={{ color: '#cfc4ff' }}>کار ترکیبی، بودجه یادگیری سالانه، و فرصت همکاری با مشتریان بزرگ ایرانی.</p>
      </div>

      <div className="grid" style={{ marginTop: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {roles.map((r) => (
          <div key={r.title} className="card">
            <div className="badge">{r.type}</div>
            <h3>{r.title}</h3>
            <p style={{ color: '#cfc4ff' }}>{r.skills}</p>
            <p style={{ color: '#cfc4ff' }}>مکان: {r.location}</p>
            <a className="btn-ghost" href={r.link}>جزئیات</a>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        <div>
          <div className="section-title">ارسال رزومه</div>
          <p style={{ color: '#cfc4ff' }}>رزومه خود را ارسال کنید تا در بانک استعداد نکسورا بررسی شود.</p>
        </div>
        <form style={{ display: 'grid', gap: 8 }}>
          <div className="field">
            <label>نام و نام خانوادگی</label>
            <input placeholder="نام شما" />
          </div>
          <div className="field">
            <label>ایمیل</label>
            <input placeholder="ایمیل سازمانی" />
          </div>
          <div className="field">
            <label>آپلود رزومه</label>
            <input type="file" />
          </div>
          <button className="btn-primary" type="button">ارسال</button>
        </form>
      </div>
    </div>
  )
}
