import { ItemType } from "@/type"

export const getYearList = (count: number, from: number): ItemType[] => {
  return Array(count).fill(null).map((a, index) => ({
    id: index,
    content: String(from + index)
  }))
}