import React from 'react'

export default function Contact() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">تماس با نکسورا</div>
      <p style={{ color: '#cfc4ff', maxWidth: 720 }}>
        برای همکاری سازمانی، فرم زیر را تکمیل کنید یا مستقیماً با تیم فروش ما در ارتباط باشید.
      </p>

      <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        <form style={{ display: 'grid', gap: 8 }}>
          <div className="field">
            <label>نام سازمان</label>
            <input placeholder="مثال: هلدینگ فناوری پارس" />
          </div>
          <div className="field">
            <label>نقش شما</label>
            <select defaultValue="default">
              <option value="default" disabled>انتخاب کنید</option>
              <option>مدیرعامل</option>
              <option>مدیر فناوری</option>
              <option>مدیر عملیات</option>
              <option>دیگر</option>
            </select>
          </div>
          <div className="field">
            <label>شماره تماس</label>
            <input placeholder="۰۲۱ یا ۰۹" />
          </div>
          <div className="field">
            <label>شرح نیاز</label>
            <textarea rows="4" placeholder="مسئله و انتظار خود را توضیح دهید" />
          </div>
          <button className="btn-primary" type="button">ارسال پیام</button>
        </form>

        <div className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <h3>راه‌های ارتباطی</h3>
          <p style={{ color: '#cfc4ff' }}>ایمیل: sales@nexora.studio</p>
          <p style={{ color: '#cfc4ff' }}>تلفن: ۰۲۱-۷۵۲۵۳</p>
          <p style={{ color: '#cfc4ff' }}>آدرس: تهران، بلوار میرداماد، برج فناوری</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a className="btn-ghost" href="https://wa.me/989123456789" target="_blank" rel="noreferrer">واتساپ</a>
            <a className="btn-ghost" href="https://t.me" target="_blank" rel="noreferrer">تلگرام</a>
          </div>
        </div>
      </div>
    </div>
  )
}
