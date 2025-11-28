import React from 'react'

const team = [
  { name: 'مریم رضوی', role: 'معمار راهکار', skills: 'GenAI, LLMOps, طراحی محصول', social: '#' },
  { name: 'حسین نادری', role: 'مهندس اتوماسیون', skills: 'n8n, DevOps, Observability', social: '#' },
  { name: 'سارا کیانی', role: 'تحلیلگر داده', skills: 'BI, ML, DataOps', social: '#' }
]

const values = [
  'صداقت و شفافیت در تعامل با مشتری',
  'طراحی داده‌محور و تست سریع',
  'امنیت و حریم خصوصی در لایه اول طراحی',
  'همکاری نزدیک با تیم‌های داخلی سازمان'
]

export default function About() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="section-title">درباره نکسورا</div>
      <p style={{ color: '#cfc4ff', maxWidth: 780 }}>
        نکسورا استودیو با تکیه بر تجربه اجرای پروژه‌های هوش مصنوعی در صنعت مالی، بیمه، خرده‌فروشی و تولید، تیمی چندتخصصی از معماران
        راهکار، مهندسان یادگیری ماشین، و متخصصان اتوماسیون را کنار هم آورده است.
      </p>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="section-title">تیم رهبری</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {team.map((member) => (
            <div key={member.name} className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="badge">{member.role}</div>
              <h3>{member.name}</h3>
              <p style={{ color: '#cfc4ff' }}>{member.skills}</p>
              <a className="btn-ghost" href={member.social}>لینکدین</a>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="section-title">داستان نکسورا</div>
        <p style={{ color: '#cfc4ff' }}>
          ما با هدف کوتاه‌کردن فاصله بین استراتژی و اجرا در پروژه‌های هوش مصنوعی شکل گرفتیم. تیم نکسورا از دل پروژه‌های واقعی بیرون آمده
          و می‌داند برای پیاده‌سازی موفق چه معیارهایی باید رعایت شود؛ از حاکمیت داده تا تجربه کاربری.
        </p>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="section-title">ارزش‌های ما</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {values.map((v) => (
            <div key={v} className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
