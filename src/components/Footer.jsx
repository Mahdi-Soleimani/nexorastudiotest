import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/logo.svg" alt="Nexora" width="36" />
            <strong>نکسورا AI استودیو</strong>
          </div>
          <p style={{ color: '#cfc4ff' }}>
            هم‌افزایی تجربه تجاری و فناوری هوش مصنوعی برای طراحی راهکارهای مقیاس‌پذیر و مطمئن برای سازمان‌های ایرانی.
          </p>
        </div>
        <div>
          <h4 className="section-title" style={{ fontSize: 16 }}>مسیرهای سریع</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link to="/services">راهکارها</Link>
            <Link to="/portfolio">نمونه‌کارها</Link>
            <Link to="/academy">آکادمی</Link>
            <Link to="/careers">فرصت‌های شغلی</Link>
          </nav>
        </div>
        <div>
          <h4 className="section-title" style={{ fontSize: 16 }}>دفتر تهران</h4>
          <p style={{ color: '#cfc4ff' }}>تهران، بلوار میرداماد، برج فناوری، طبقه ۱۲</p>
          <p style={{ color: '#cfc4ff' }}>تلفن: ۰۲۱-۷۵۲۵۳</p>
          <p style={{ color: '#cfc4ff' }}>ایمیل: hello@nexora.studio</p>
        </div>
      </div>
      <div className="container" style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', color: '#9ca3af' }}>
        <span>© ۱۴۰۳ نکسورا. تمامی حقوق محفوظ است.</span>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
