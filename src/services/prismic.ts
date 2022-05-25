import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client('https://portfoliojsd.prismic.io/api/v2', {
    req,
    accessToken:
      'MC5ZbzFkN1JNQUFDSUFiRHNU.77-977-9IXDvv73vv73vv73vv73vv73vv70sK3nvv73vv71477-9HC3vv70j77-977-977-977-9FjLvv70cUO-_ve-_vQ'
  })

  return prismic
}
