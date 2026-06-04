import LoginPage from '@/domains/auth/login/components/LoginForm';
import * as React from 'react';

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
    return (
        <div>
            <LoginPage />
        </div>
    );
}
