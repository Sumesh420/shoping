import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css'; // Import your breadcrumb styles

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home /</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={index}>
              <li className={`breadcrumb-item${isLast ? ' active' : ''}`}>
                {isLast ? (
                  <span>{name}</span>
                ) : (
                  <Link to={routeTo}>{name}</Link>
                )}
              </li>
              {!isLast && <li className="breadcrumb-slash">/</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;