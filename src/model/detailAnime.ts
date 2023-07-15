import {IsNumber, IsString, ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'
import {CoverAnime, titleAnime} from './animeList'

export class ModelEdges {
  @IsNumber() id: number
  @IsString() __typename: string
}

export class ModelStudios {
  @Type(() => ModelEdges)
  @ValidateNested()
  declare edges: ModelEdges[]
}

export class ModelDetailAnime {
  @IsNumber() id: number
  @IsString() status: string
  @IsString() format: string
  @IsString() bannerImage: string
  @IsString() popularity: number

  @Type(() => CoverAnime)
  @ValidateNested()
  declare coverImage: CoverAnime

  @Type(() => titleAnime)
  @ValidateNested()
  declare title: titleAnime

  @IsString() description: string
  @IsNumber() episodes: number
  @IsString() genres: string[]
  @IsNumber() meanScore: number

  @Type(() => ModelStudios)
  @ValidateNested()
  declare studios: ModelStudios

  @IsString() __typename: string
}
