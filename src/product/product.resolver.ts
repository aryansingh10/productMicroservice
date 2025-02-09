import {
  Resolver,
  Query,
  ResolveReference,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { Product } from './product.model';
import { ProductService } from './product.service';

import { CreateProductDto } from './dto/create-product.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findAll();
  }
  @Mutation(() => String, { name: 'createProduct' })
  async createProduct(@Args('input') input: CreateProductDto): Promise<string> {
    return this.productService.createProduct(input);
  }
  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    return this.productService.findById(reference.id);
  }
}
