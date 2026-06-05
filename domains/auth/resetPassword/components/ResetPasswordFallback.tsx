import { Loader2 } from "lucide-react";


export function ResetPasswordLoading() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Verifying reset link...</p>
            </div>
        </div>
    );
}