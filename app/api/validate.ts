// lib/api/validate.ts
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

export async function validateBody<T>(
  request: NextRequest,
  schema: z.ZodType<T>
): Promise<{ success: true; data: T } | { success: false; response: NextResponse }> {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      console.log(result.error.flatten());
      
      return {
        success: false,
        response: NextResponse.json(
          {
            error: 'Validation failed',
            issues: result.error.flatten().fieldErrors,
          },
          { status: 400 }
        ),
      };
    }

    return { success: true, data: result.data };
  } catch (err) {
    return {
      success: false,
      response: NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      ),
    };
  }
}