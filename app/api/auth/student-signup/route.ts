import { auth } from "@/lib/auth"
import { NextRequest, NextResponse } from "next/server";
import { validateBody } from "@/app/api/validate";
import { StudentSignupSchema } from "@/domains/auth/signup/schemas/student";

export async function POST(request: NextRequest) {
    try {
        const validate = await validateBody(request, StudentSignupSchema)
        if (!validate.success) {
            console.log(validate.response)
            return validate.response
        }
        const {
            email, password, fullName,terms
        } = validate.data


        await auth.api.signUpEmail({
            body: {
                name: fullName, email, password, role: 'student', terms
            }
        })
        return NextResponse.json({
            message: "signup successful",
            data: []
        }, { status: 201 })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error }, { status: error.statusCode })
    }
}

