import { auth } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server";
import { validateBody } from "@/app/api/validate";
import { loginSchema } from "@/domains/auth/login/schemas";

export async function POST(request: NextRequest) {
    try {
        const validate = await validateBody(request, loginSchema)
        if (!validate.success) {
            console.log(validate.response)
            return validate.response
        }
        const {
            email, password, rememberMe
        } = validate.data


        await auth.api.signInEmail({
            body: {
                email, password,
            }
        })
        return NextResponse.json({
            message: "login successful",
            data: []
        }, { status: 200 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error }, { status: error.statusCode })
    }
}

