import {IsNumber, IsString, IsBoolean} from 'class-validator'

export class ModelPagination {
  @IsNumber() total: number
  @IsNumber() currentPage: number
  @IsNumber() lastPage: number
  @IsBoolean() hasNextPage: boolean
  @IsNumber() perPage: number
  @IsString() __typename: string
}
