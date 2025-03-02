import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/lib/models/Product';
/*
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

  if (Array.isArray(slug)) {
    res.end(`${slug.join(', ')}`)
  } else {
    res.end(`${slug}`)
  }
}*/



interface Params {
  slug: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
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
