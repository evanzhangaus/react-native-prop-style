import * as nativeBaseComponents from 'native-base'
import { packComponents } from './index'

const cs = packComponents(nativeBaseComponents,{});
module.exports = {
    ...cs
}