import {IsNumber, IsString, ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'

export class CoverAnime {
  @IsString()
  extraLarge!: string
  @IsString()
  large!: string
  @IsString()
  medium!: string
  @IsString()
  color!: string
  @IsString()
  __typename!: string
}

export class titleAnime {
  @IsString()
  romaji!: string
  @IsString()
  english!: string
  @IsString()
  __typename!: string
}

export class AnimeData {
  @IsNumber()
  id!: number
  @IsString()
  status!: string
  @IsNumber()
  meanScore!: number
  @IsString()
  format!: string
  @IsString()
  genres!: string[]

  @Type(() => CoverAnime)
  @ValidateNested()
  declare coverImage: CoverAnime

  @Type(() => titleAnime)
  @ValidateNested()
  declare title: titleAnime

  @IsString()
  __typename!: string
}

export class ArrAnimeData {
  [x: string]: any
  @Type(() => AnimeData)
  @ValidateNested({each: true})
  declare media: AnimeData[]
}
