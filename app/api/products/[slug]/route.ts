import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/lib/models/Product';

interface Params {
  slug: string;
}

export async function GET(req: Request, { params }: { params: Params }): Promise<NextResponse> {
  try {
    await dbConnect();

    const { slug } = params; 

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
