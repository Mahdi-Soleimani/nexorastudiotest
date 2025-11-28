import React from 'react'

const faqs = [
  { q: 'چطور امنیت داده تضمین می‌شود؟', a: 'دیتا در سرور اختصاصی داخل کشور نگهداری شده و دسترسی با RBAC و لاگ ممیزی پوشش داده می‌شود.' },
  { q: 'زمان استقرار چقدر است؟', a: 'نسخه اولیه طی ۱۰ روز و نسخه نهایی با تست کاربری در ۴ تا ۶ هفته آماده می‌شود.' },
  { q: 'آیا با سیستم‌های فعلی ما یکپارچه می‌شوید؟', a: 'بله، تیم ما کانکتور سفارشی برای ERP، CRM، دیتابیس و پیام‌رسان شما توسعه می‌دهد.' }
]

export default function Services() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">راهکارهای نکسورا</div>
      <p style={{ color: '#cfc4ff', maxWidth: 780 }}>
        سه لایه راهکار برای رسیدن از ایده تا محصول در مقیاس سازمانی: کشف مسئله، طراحی ایجنت و اتوماسیون، و استقرار پایدار با SLA.
      </p>

      <div className="grid" style={{ marginTop: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <div className="card">
          <span className="badge">n8n Automation</span>
          <h3>اتوماسیون هوشمند</h3>
          <p style={{ color: '#cfc4ff' }}>طراحی و پیاده‌سازی فلوهای پیچیده برای HR، مالی و پشتیبانی با نودهای سفارشی و مانیتورینگ.</p>
          <ul style={{ color: '#cfc4ff', lineHeight: 1.8 }}>
            <li>اپراتور دیجیتال برای پردازش اسناد</li>
            <li>اتصال به سامانه پیامکی، ایمیل و IVR</li>
            <li>کنترل نسخه و استقرار امن</li>
          </ul>
        </div>
        <div className="card">
          <span className="badge">AI Agents</span>
          <h3>ایجنت‌های هوشمند</h3>
          <p style={{ color: '#cfc4ff' }}>مکالمه، چندزبانه، و مجهز به ابزارهای سازمانی برای دریافت، تحلیل و اقدام روی داده‌های کسب‌وکار.</p>
          <ul style={{ color: '#cfc4ff', lineHeight: 1.8 }}>
            <li>Voice bot فارسی و عربی</li>
            <li>اتصال به CRM، انبار و پشتیبانی</li>
            <li>تنظیمات حاکمیت داده و امنیت</li>
          </ul>
        </div>
        <div className="card">
          <span className="badge">Data Intelligence</span>
          <h3>هوش تجاری پیش‌بین</h3>
          <p style={{ color: '#cfc4ff' }}>داشبوردهای برخط، پیش‌بینی، و هشداردهی با مدل‌های به‌روز و قابل تفسیر برای مدیران ارشد.</p>
          <ul style={{ color: '#cfc4ff', lineHeight: 1.8 }}>
            <li>Data Lake امن و استاندارد</li>
            <li>هشداردهی ریسک در زمان واقعی</li>
            <li>اتوماسیون گزارش مدیریتی</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: 30 }}>
        <div className="section-title">مقایسه روش سنتی و نکسورا</div>
        <table className="table">
          <thead>
            <tr>
              <th>شاخص</th>
              <th>روش سنتی</th>
              <th>نکسورا AI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>زمان راه‌اندازی</td>
              <td>۳-۶ ماه</td>
              <td>۱۰ روز تا MVP</td>
            </tr>
            <tr>
              <td>پشتیبانی</td>
              <td>محدود به ساعات اداری</td>
              <td>۲۴/۷ با داشبورد مانیتورینگ</td>
            </tr>
            <tr>
              <td>امنیت</td>
              <td>غیریکپارچه و دستی</td>
              <td>RBAC، ممیزی، رمزنگاری سراسری</td>
            </tr>
            <tr>
              <td>مقیاس‌پذیری</td>
              <td>وابسته به تیم زیرساخت</td>
              <td>Autoscaling و لاگ مرکزی</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: 30 }}>
        <div className="section-title">سوالات متداول</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {faqs.map((item) => (
            <div key={item.q} className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h4>{item.q}</h4>
              <p style={{ color: '#cfc4ff' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
