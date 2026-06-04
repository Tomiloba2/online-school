import * as React from 'react';
import ForgotPassword from '@/domains/auth/forgotPassword/components/ForgotPassword';

export interface IForgotPasswordPageProps {
}

export default function ForgotPasswordPage (props: IForgotPasswordPageProps) {
  return (
    <div>
      <ForgotPassword/>
    </div>
  );
}
