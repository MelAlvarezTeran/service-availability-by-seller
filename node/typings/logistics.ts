export interface InventoryBySkuResponse {
  skuId: string
  balance: [StockInfo]
}

export interface StockInfo {
  warehouseId: string
  warehouseName: string
  totalQuantity: number
  reservedQuantity: number
  hasUnlimitedQuantity: number
}

export interface Seller {
  items: [
    {
      account: string
      name: string
    }
  ]
}
