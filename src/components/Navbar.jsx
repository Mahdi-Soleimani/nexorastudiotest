import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'خانه' },
  { to: '/services', label: 'راهکارها' },
  { to: '/portfolio', label: 'نمونه‌کارها' },
  { to: '/academy', label: 'آکادمی' },
  { to: '/about', label: 'درباره ما' },
  { to: '/careers', label: 'فرصت‌های شغلی' },
  { to: '/contact', label: 'تماس با ما' }
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.svg" alt="Nexora" width="38" height="38" />
          <div>
            <div style={{ fontWeight: 800 }}>نکسورا AI استودیو</div>
            <small style={{ color: '#cfc4ff' }}>معماری هوش مصنوعی برای کسب‌وکار</small>
          </div>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    padding: '10px 12px',
                    borderRadius: 12,
                    color: isActive ? '#fff' : '#cfc4ff',
                    background: isActive ? 'rgba(180,107,255,0.16)' : 'transparent',
                    border: '1px solid rgba(255,255,255,0.04)'
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="btn-primary" href="#consult">درخواست مشاوره رایگان</a>
        </nav>
      </div>
    </header>
  )
}
