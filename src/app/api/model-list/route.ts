import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [modelsResponse, unfModelsResponse] = await Promise.all([
      fetch('https://api.zukijourney.com/v1/models'),
      fetch('https://api.zukijourney.com/unf/models')
    ]);
    
    const modelsData = await modelsResponse.json();
    const unfModelsData = await unfModelsResponse.json();
    
    return NextResponse.json({
      models: modelsData.data,
      unfModels: unfModelsData.data
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}