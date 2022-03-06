import { Sorter } from "./Sorter"
import { NumberCollection } from "./NumberCollection"

const numberCollection = new NumberCollection([14, 3, 11, -9])
const sorter = new Sorter(numberCollection)
sorter.sort()
console.log(numberCollection.data)