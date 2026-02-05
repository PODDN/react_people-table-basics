import React from 'react';
import { Person } from '../../types';

type Props = {
  person: Person | null | undefined;
  name?: string;
};

export const PersonLink: React.FC<Props> = ({ person, name }) => {
  const displayName = person ? person.name : name;

  if (!displayName) {
    return <>-</>;
  }

  const linkClass = person?.sex === 'f' ? 'has-text-danger' : '';

  if (person?.slug) {
    return (
      <a href={`#/people/${person.slug}`} className={linkClass}>
        {displayName}
      </a>
    );
  }

  return <span className={linkClass}>{displayName}</span>;
};
