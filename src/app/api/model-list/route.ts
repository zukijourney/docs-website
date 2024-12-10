import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [modelsResponse] = await Promise.all([
      fetch('https://api.zukijourney.com/v1/models'),
    ]);
    
    const modelsData = await modelsResponse.json();
    
    return NextResponse.json({
      models: modelsData.data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}
export const runtime = 'edge';