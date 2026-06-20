import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>صفحه مورد نظر یافت نشد!</h2>
      <p>متاسفانه، صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

export default NotFound;