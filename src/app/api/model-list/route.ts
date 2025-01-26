import { NextResponse } from 'next/server';
export const runtime = 'edge';
export async function GET() {
  try {
    const response = await fetch('https://api.zukijourney.com/v1/models', { next: { revalidate: 60 } });
    if (!response.ok) {
      console.error('Failed response:', response);
      throw new Error('Failed to fetch metrics');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error during fetch:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
  
}