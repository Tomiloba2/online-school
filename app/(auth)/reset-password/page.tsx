import * as React from 'react';
import ResetPassword from '@/domains/auth/resetPassword/components/ResetPassword';

export interface IResetPasswordProps {
}

export default function ResetPasswordPage (props: IResetPasswordProps) {
  return (
    <div>
      <ResetPassword />
    </div>
  );
}
