/* eslint-disable @typescript-eslint/no-explicit-any */
interface Args {
  sku: string
}

export const getStockBySeller = async (
  _: unknown,
  { sku }: Args,
  { clients }: Context
) => {
  const sellerMap = await clients.stocksellers.mapSellers()

  const stockBySeller = await Promise.all(
    sellerMap.data.items.map((seller) => {
      // eslint-disable-next-line no-console
      console.log('Data del Seller: ', seller)

      return clients.stocksellers
        .listInventoryBySku(sku, seller.account)
        .then((resp: any) => ({
          vtexAccount: seller.account,
          sellerid: seller.name,
          ...resp,
        }))
    })
  )

  return stockBySeller
}
