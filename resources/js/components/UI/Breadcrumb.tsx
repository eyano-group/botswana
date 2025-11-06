import React from 'react';
import { Link } from '@inertiajs/react';

const Breadcrumb = ({ items }) => {
  return (
    <ul className="flex items-center">
      {items.map((item, index) => (
        <li key={index} className="relative inline-block text-white text-base font-normal pr-8 mr-3 last:pr-0 last:mr-0">
          {index === 0 && item.icon && (
            <i className={`${item.icon} mr-2`}></i>
          )}
          {item.href ? (
            <Link href={item.href} className="text-white hover:text-gray-200 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="absolute text-white text-sm font-semibold top-1 right-0">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;