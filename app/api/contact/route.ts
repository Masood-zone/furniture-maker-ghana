import { NextResponse } from 'next/server';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
}

// Sample contact submissions data
const submissions: ContactSubmission[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newSubmission: ContactSubmission = {
      id: submissions.length + 1,
      ...body,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    submissions.push(newSubmission);
    
    // Here you would typically send an email notification
    // For now, we'll just log it
    console.log('New contact submission:', newSubmission);
    
    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error: unknown) {
    console.error('Failed to process contact form:', error);
    return NextResponse.json({ error: 'Failed to process contact form' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(submissions);
} 