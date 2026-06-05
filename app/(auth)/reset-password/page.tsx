import * as React from 'react';
import ResetPassword from '@/domains/auth/resetPassword/components/ResetPassword';
import { ResetPasswordLoading } from '@/domains/auth/resetPassword/components/ResetPasswordFallback';

export interface IResetPasswordProps {
}

export default function ResetPasswordPage (props: IResetPasswordProps) {
  return (
    <div>
      <React.Suspense fallback={<ResetPasswordLoading />}>
        <ResetPassword />
      </React.Suspense>
          </div>
  );
}
