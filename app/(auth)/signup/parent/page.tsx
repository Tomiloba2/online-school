import ParentRegistrationForm from '@/domains/auth/signup/components/parentForm';
import * as React from 'react';

export interface IParentRegistrationProps {
}

export default function ParentRegistration (props: IParentRegistrationProps) {
  return (
    <div>
      <ParentRegistrationForm/>
    </div>
  );
}
