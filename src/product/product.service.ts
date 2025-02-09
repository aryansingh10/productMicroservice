import { Injectable, Inject } from '@nestjs/common';
import { products } from 'src/database/schema';
import type { DrizzleClient } from './types';
import { sql } from 'drizzle-orm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: DrizzleClient,
  ) {}

  async findAll() {
    return await this.db.select().from(products);
  }

  async findById(id: number) {
    const [product] = await this.db
      .select()
      .from(products)
      .where(sql`${products.id} = ${id}`);
    return product;
  }

  async createProduct(data: CreateProductDto): Promise<string> {
    // Convert price to string for compatibility with Drizzle ORM
    const productData = {
      ...data,
      price: data.price.toString(), // Convert number to string
    };

    await this.db.insert(products).values(productData).execute();
    return 'Product created successfully!';
  }
}
