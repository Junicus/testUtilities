import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div>
      <h1>Not Found go back!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
